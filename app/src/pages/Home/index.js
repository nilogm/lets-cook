import { View, Button } from 'react-native';
import styles from './style.js';
import TagInput from '../../components/TagInput';
import MacroInput from '../../components/MacroInput';
import { useState, useEffect} from 'react';

export default function Home({ navigation }) {
    
    const [data, setData] = useState([]);

    const getRecipes = async (ingredients, macros) => {
        try {          
      
            const numberofRecipes = 2;

            const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=ed5efa73e002400393a5034f3327b3c4&addRecipeInformation=true&includeIngredients=' + ingredients +'&' 
                                        + macros + '&number='+numberofRecipes);
            const json = await response.json();    
      
            setData(json.results);    
    
        } catch (error) {
            console.error(error);
        }
    };

    const [ingredients, setIngredients] = useState([]);
    const [macros, setMacros] = useState([]);

    function searchRecipes() {
        
        // useEffect(() => {
        //     console.log(ingredients);
        //     console.log(macros);
        //     getRecipes(ingredients, macros);
        // }, []);
    }
    

    console.log(data);

   

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

    //console.log(makeSearch())

    return (
        <View style={styles.container}>
            <TagInput inputText="Ingredient" list={ingredients} manager={setIngredients} />
            <MacroInput inputText="Macros" list={macros} manager={setMacros} />
            <Button title='Search' onPress={() => { navigation.navigate('Search') } } />
        </View>
    )
}