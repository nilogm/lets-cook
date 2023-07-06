import { View, ActivityIndicator, Text, Pressable, Modal } from 'react-native';
import React, { useState, useEffect } from 'react';
import { get_key } from '../../utils/index.js';
import { tag, ModalStatus } from '../../types/index.js';
import TagDiet from "../../components/tag_selection/TagDiet"
import MacroInput from '../../components/tag_selection/MacroInput';
import TagInput from '../../components/tag_selection/TagInput';
import styles from './style.js';
import Popup from '../../components/Popup/index.js';


export default function Home({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);

    const [unitUS, setUnitUS] = useState(false);
    const toggle = (state) => {
        setUnitUS(state);
    }

    const getRecipes = async (ingredients_search, macros_search, diets_search) => {
        try {

            const numberofRecipes = 7;

            const url = 'https://api.spoonacular.com/recipes/complexSearch' + get_key() + '&addRecipeInformation=true&includeIngredients='
                + ingredients_search + '&' + macros_search + '&number=' + numberofRecipes + "&fillIngredients=true&diet=" + diets_search
            console.log(url)

            const response = await fetch(url);
            const json = await response.json();

            const send = {
                results: json.results,
                source: url,
                ingredientsUsed: ingredients,
                macrosUsed: macros,
                isUS_measure: unitUS,
            }

            return navigation.navigate('Search', send);

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    };

    const [modalMessage, setModalMessage] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [macros, setMacros] = useState([]);
    const [diets, setDiets] = useState([]);

    const makeSearch = () => {
        setIsLoading(!isLoading);

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

        getRecipes(ingredient_search, macro_search, diets_search)
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Let's cook!</Text>
            </View>

            <TagInput list={ingredients} manager={setIngredients} style={styles.inputBox} setPopupMessage={setModalMessage} />

            <MacroInput list={macros} manager={setMacros} style={styles.inputBox} setPopupMessage={setModalMessage} />

            <View style={{ alignSelf: "center", width: "80%", height: 1, backgroundColor: "#AAAAAA", marginBottom: 20 }}></View>

            <TagDiet list={diets} manager={setDiets} style={styles.inputBox}></TagDiet>

            <View style={{ alignItems: 'center', justifyContent: "center", flex: 1 }}>
                <Pressable style={{ aspectRatio: 1, backgroundColor: "#FFAA33CC", height: 100, borderRadius: 50 }} onPress={makeSearch}>
                    {isLoading && <ActivityIndicator size="large" color="yellow" />}
                </Pressable>
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalMessage != ""}
                onRequestClose={() => { setModalMessage("") }}>

                <View style={styles.popup}>
                    <Popup content={(
                        <View>
                            {
                                modalMessage != "" &&
                                <View>
                                    <Text style={styles.popupText}>Keyword "{modalMessage}" doesn't exist.</Text>
                                    <Text style={styles.popupText}>Check for unnecessary spacing or incorrect writing.</Text>
                                </View>
                            }
                        </View>
                    )} setPopupMessage={setModalMessage}/>
                </View>

            </Modal>
        </View>
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