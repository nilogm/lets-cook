

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {useEffect, useState} from 'react';


import Home from "./src/pages/Home"
import Search from "./src/pages/Search"
import Recipe from "./src/pages/Recipe"

import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

const getRecipes = async (ingredients, macros) => {
  try {
    var instrucoes;

    instrucoes = {
      "modoPreparo": [
      ]
    }
    const numberofRecipes = 2;
    const response = await fetch('https://api.spoonacular.com/recipes/complexSearch?apiKey=ed5efa73e002400393a5034f3327b3c4&includeIngredients=' + ingredients + '&'
      + macros + '&number=' + numberofRecipes);
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error(error);
  } finally {
  }
  return null;
};


function App() {

  const [data, setData] = useState(null);
  const [recipes, setRecipes] = useState(null);

  ingredients = "tomato,cheese";
  macros = "maxFat=25&maxCholesterol=100";

  useEffect(() => {
    setRecipes(getRecipes(ingredients, macros));
  }, []);
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