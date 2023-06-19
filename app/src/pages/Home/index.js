import { View, Button } from 'react-native';
import styles from './style.js';
import TagInput from '../../components/TagInput';
import MacroInput from '../../components/MacroInput';
import { useState } from 'react';

export default function Home({ navigation }) {
    // const ingredients = "tomato,cheese";
    // const macros = "maxFat=25&maxCholesterol=100";

    const [ingredients, setIngredients] = useState([]);
    const [macros, setMacros] = useState([]);

    console.log(macros);
    console.log(ingredients);


    const makeSearch = () => {
        let ingredient_search = '';
        ingredients.forEach(element => {
            ingredient_search += element.name + ',';
        });
        let macro_search = '';
        macros.forEach(element => {
            macro_search += element.name + '=' + element.value + "&";
        });

        return [ingredient_search, macro_search];
    }

    console.log(makeSearch())

    return (
        <View style={styles.container}>
            <TagInput inputText="Ingredient" list={ingredients} manager={setIngredients} />
            <MacroInput inputText="Macros" list={macros} manager={setMacros} />
            <Button title='Search' onPress={() => { navigation.navigate('Search') }} />
        </View>
    )
}