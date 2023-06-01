import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/pages/Home"
import Search from "./src/pages/Search"
import Recipe from "./src/pages/Recipe"

const Stack = createNativeStackNavigator();

function App() {
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