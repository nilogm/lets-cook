import { View, Button, Text, Pressable } from 'react-native';
import styles from './style.js';
import TagInput from '../../components/TagInput';
import MacroInput from '../../components/MacroInput';
import { useState, useEffect } from 'react';
import TagDiet from '../../components/TagDiet/index.js';

export default function Home({ navigation }) {

    const [data, setData] = useState([]);

    const getRecipes = async (ingredients_search, macros_search) => {
        try {

            const numberofRecipes = 7;

            const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ed5efa73e002400393a5034f3327b3c4&addRecipeInformation=true&includeIngredients='
                + ingredients_search + '&' + macros_search + '&number=' + numberofRecipes + "&&fillIngredients=true"
            console.log(url)

            const response = await fetch(url);

            const json = await response.json();


            const send = {
                results: json.results,
                source: url,
                ingredientsUsed: ingredients,
                macrosUsed: macros
            }

            return (
                navigation.navigate('Search', send)
            )

        } catch (error) {
            console.error(error);
        }
    };

    const [ingredients, setIngredients] = useState([]);
    const [macros, setMacros] = useState([]);
    const [diets, setDiets] = useState([]);






    const makeSearch = () => {
        console.log(ingredients);
        console.log(macros);
        console.log(diets);
        // return;

        let ingredient_search = '';
        ingredients.forEach(element => {
            ingredient_search += element.name + ',';
        });
        let macro_search = '';
        macros.forEach(element => {
            macro_search += element.name + '=' + element.value + "&";
        });

        getRecipes(ingredient_search, macro_search)

    }

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.title}>Let's cook!</Text>
            </View>
            <TagInput list={ingredients} manager={setIngredients} style={styles.inputBox}/>
            <MacroInput list={macros} manager={setMacros} style={styles.inputBox}/>
            <View style={{alignSelf: "center", width: "80%", height: 1, backgroundColor: "#AAAAAA", marginBottom: 20}}></View>
            <TagDiet list={diets} manager={setDiets} style={styles.inputBox}></TagDiet>
            <View style={{alignItems: 'center', justifyContent: "center", flex: 1}}>
                <Pressable style={{ aspectRatio: 1, backgroundColor : "#FFAA33CC", height: 100, borderRadius: 50}} onPress={makeSearch}/>
            </View>
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
