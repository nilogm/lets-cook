import { View, Button, Switch, ActivityIndicator, Text, Pressable, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { get_recipes } from '../../api';
import { Line } from '../../components/assets'
import { text_style } from '../../design';
import TagDiet from "../../components/tag_selection/TagDiet"
import MacroInput from '../../components/tag_selection/MacroInput';
import TagInput from '../../components/tag_selection/TagInput';
import KeyboardAvoid from '../../components/KeyboardAvoid';
import LoadingModal from '../../components/LoadingModal';
import styles from './style.js';


export default function Home({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, toggleModal] = useState(false);

    const [unitUS, setUnitUS] = useState(false);
    const toggle = (state) => {
        setUnitUS(state);
    }

    const [ingredients, setIngredients] = useState([]);
    const [macros, setMacros] = useState([]);
    const [diets, setDiets] = useState([]);

    const make_search = async () => {
        toggleModal(true)
        if (ingredients.length == 0 && diets.length == 0 && macros.length == 0)
            return

        setIsLoading(true);

        let diets_search = '';

        diets.forEach(element => {
            diets_search += element + ',';
        });

        let ingredient_search = '';

        ingredients.forEach(element => {
            ingredient_search += element.name + ',';
        });
        let macro_search = '';
        macros.forEach(element => {
            macro_search += element.name + '=' + element.amount + "&";
        });

        var results = await get_recipes(ingredient_search, macro_search, diets_search)
        setIsLoading(false)

        if (!results || results.results.length == 0)
            return

        toggleModal(false)

        results.ingredientsUsed = ingredients
        results.macrosUsed = macros
        results.dietsUsed = diets

        navigation.navigate('Search', results);
    }



    return (
        <KeyboardAvoid>
            <View style={styles.container}>
                <Text style={styles.title}>Let's cook!</Text>

                <TagInput list={ingredients} manager={setIngredients} />

                <MacroInput list={macros} manager={setMacros} />

                <Line />

                <TagDiet list={diets} manager={setDiets} />

                <View style={{ justifyContent: "center", flex: 1 }}>
                    <Pressable style={styles.button} onPress={make_search}>
                        <Icon name="utensils" size={40} style={styles.icons} />
                    </Pressable>
                </View>

                <LoadingModal
                    isVisible={modalVisible}
                    toggleVisibility={toggleModal}
                    isLoading={isLoading}
                    content={
                        (ingredients.length > 0 || macros.length > 0 || diets.length > 0) ?
                            (<Text style={text_style}>No recipes found.</Text>)
                            :
                            (<Text style={text_style}>No filters applied to search.</Text>)
                    } />
            </View>
        </KeyboardAvoid>
    )
}



/*
    cannellini bean
    cauliflower
    berry banna

    red lentil soup
    asparagus 
    garlicky kale
    slow cooker beef staw

*/