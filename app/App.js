

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useEffect, useState} from 'react';


import Home from "./src/pages/Home"
import Search from "./src/pages/Search"
import Recipe from "./src/pages/Recipe"

const Stack = createNativeStackNavigator();


function App() {
  
  const [isLoading, setLoading] = useState(true);
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
    } finally {
    setLoading(false);
      }
  };

  const ingredients = "tomato,cheese";
  const macros = "maxFat=25&maxCholesterol=100";

  useEffect(() => {
    getRecipes(ingredients, macros);
  }, []);

  console.log(data);
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
