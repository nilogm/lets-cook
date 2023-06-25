import React, {useState } from "react";
import { Text, View, FlatList, Image, ImageBackground, Pressable, ScrollView} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";

const similar = [
    {
        id: 209128,
        title: "Dinner Tonight: Grilled Romesco-Style Pork",
        imageType: "jpg",
        readyInMinutes: 45,
        servings: 4,
        sourceUrl: "http://www.seriouseats.com/recipes/2008/07/grilled-romesco-style-pork-salad-recipe.html"
    },
    {
        id: 31868,
        title: "Dinner Tonight: Chickpea Bruschetta",
        imageType: "jpg",
        readyInMinutes: 45,
        servings: 2,
        sourceUrl: "http://www.seriouseats.com/recipes/2009/06/dinner-tonight-chickpea-bruschetta-babbo-nyc-recipe.html"
    }
]

// const [similar, setSimilar] = useState(null)



function getSimilar(id) {
    //pesquisar na api as similares 
    //https://api.spoonacular.com/recipes/{id}/similar
}


export default function ({id}) {


    return (
        <View style={{paddingTop:50, paddingLeft:100}}>            
            <Text style={{fontSize:30}}>Similar Recipes</Text>

        </View>




    )
}