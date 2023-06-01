

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useEffect, useState} from 'react';


import Home from "./src/pages/Home"
import Search from "./src/pages/Search"
import Recipe from "./src/pages/Recipe"

const Stack = createNativeStackNavigator();

const [data, setData] = useState([]);

const getRecipes = async (ingredients, macros) => {
  try {
    var instrucoes;
    
    instrucoes = {
      "modoPreparo" : [
      ]
    }
    const numberofRecipes = 2;
    const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=ed5efa73e002400393a5034f3327b3c4&includeIngredients=' + ingredients +'&' 
                                + macros + '&number='+numberofRecipes);
    const json = await response.json();
    const recipes = json.results;
    setData(recipes);
  
  
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}
};


function App() {

  ingredients = "tomato,cheese";
  macros = "maxFat=25&maxCholesterol=100";

  useEffect(() => {
    getRecipes(ingredients, macros);
  }, []);
  recipes = data;
  console.log(recipes);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Recipe" component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;