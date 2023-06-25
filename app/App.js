

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, { useEffect, useState } from 'react';


import Home from "./src/pages/Home"
import Search from "./src/pages/Search"
import Recipe from "./src/pages/Recipe"
import Info from './src/pages/Info'
import Ingredients from './src/pages/Ingredients'
import Instructions from './src/pages/Instructions';


const Stack = createNativeStackNavigator();


function App() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="Recipe" component={Recipe} />
				<Stack.Screen name="Info" component={Info} />
				<Stack.Screen name="Ingredients" component={Ingredients} />
				<Stack.Screen name="Instructions" component={Instructions} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
