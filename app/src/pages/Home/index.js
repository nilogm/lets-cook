import { View, Button, Switch, ActivityIndicator, Text, Pressable, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { get_recipes } from '../../api';
import { Line } from '../../components/assets'
import TagDiet from "../../components/tag_selection/TagDiet"
import MacroInput from '../../components/tag_selection/MacroInput';
import TagInput from '../../components/tag_selection/TagInput';
import Popup from '../../components/Popup';
import KeyboardAvoid from '../../components/KeyboardAvoid';
import styles from './style.js';


export default function Home({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);

    const [unitUS, setUnitUS] = useState(false);
    const toggle = (state) => {
        setUnitUS(state);
    }

    const [modalMessage, setModalMessage] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [macros, setMacros] = useState([]);
    const [diets, setDiets] = useState([]);
    const [noResults, setnoResults] = useState(false)

    const make_search = async () => {
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
        results.ingredientsUsed = ingredients
        results.macrosUsed = macros
        results.dietsUsed = diets
        
        setIsLoading(false)
        if (results.results.length == 0) {
            setnoResults(true)            
        } 
        else
            navigation.navigate('Search', results);
    }

    console.log(noResults)

    return (
        <KeyboardAvoid>
            <View style={styles.container}>
                <Text style={styles.title}>Let's cook!</Text>

                <TagInput list={ingredients} manager={setIngredients} style={styles.inputBox} setPopupMessage={setModalMessage} />

                <MacroInput list={macros} manager={setMacros} style={styles.inputBox} setPopupMessage={setModalMessage} />

                <Line />

                <TagDiet list={diets} manager={setDiets} style={styles.inputBox}></TagDiet>

                <View style={styles.searchPressableContainer}>
                    <Pressable style={styles.searchPressableLoad} onPress={make_search}>
                        {isLoading && <ActivityIndicator size="large" color="yellow" />}
                    </Pressable>
                </View>
                {
                noResults && (
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalMessage != ""}
                    onRequestClose={() => { setModalMessage("") }}>

                    <View style={styles.popup}>
                        <Popup content={(
                            <View>
                                {
                                    // modalMessage != "" &&
                                    <View>
                                        <Text style={styles.popupText}>Keyword "{modalMessage}" doesn't exist.</Text>
                                        <Text style={styles.popupText}>Check for unnecessary spacing or incorrect writing.</Text>
                                    </View>
                                    
                                }
                            </View>
                        )} setPopupMessage={setModalMessage} />
                    </View>
                </Modal>
                )}
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