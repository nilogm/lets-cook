import { View, Button, Switch, ActivityIndicator } from 'react-native';
import styles from './style.js';
import TagInput from '../../components/TagInput';
import MacroInput from '../../components/MacroInput';
import { useState, useEffect } from 'react';

export default function Home({ navigation }) {

    const [isUS_measure, setIsUS_measure] = useState(false)
    const toggleSwitch = () => setIsUS_measure(previousState => !previousState);
    const [isLoading, setIsLoading] = useState(false);

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
                macrosUsed: macros,
                isUS_measure: isUS_measure
            }

            return (
                navigation.navigate('Search', send)
            )

        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }

    };

    const [ingredients, setIngredients] = useState([]);
    const [macros, setMacros] = useState([]);

    const makeSearch = () => {
        setIsLoading(!isLoading);

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
            <TagInput inputText="Ingredient" list={ingredients} manager={setIngredients} />
            <MacroInput inputText="Macros" list={macros} manager={setMacros} />
            <Button title={isLoading ? "LOADING..." : "More Recipes"} onPress={() => { makeSearch() }} >
                {isLoading && <ActivityIndicator size="large" color="yellow" />}            
            </Button>

            <Switch
                trackColor={{ false: '#767577', true: '#c90414' }}
                thumbColor={isUS_measure ? '#3925cf' : '#c96304'}
                onValueChange={toggleSwitch}
                value={isUS_measure}
            />
        </View>
    )
}