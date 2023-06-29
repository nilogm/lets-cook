import { View, Button, Text } from 'react-native';
import styles from './style.js';
import TagInput from '../../components/TagInput';
import MacroInput from '../../components/MacroInput';
import { useState, useEffect } from 'react';

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






    const makeSearch = () => {
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
            <TagInput inputText="Ingredient" list={ingredients} manager={setIngredients} />
            <MacroInput inputText="Macros" list={macros} manager={setMacros} />
            <Button title='Search' onPress={() => { makeSearch() }} />
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