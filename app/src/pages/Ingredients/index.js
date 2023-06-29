import React, { useState } from 'react';
import { View, Text, Pressable, Button, FlatList, Image,  } from "react-native";
import styles from "./style";

const getSubstitutes = async (id) => {
    try {     

        url = 'https://api.spoonacular.com/food/ingredients/{id}/substitutes?apiKey=ed5efa73e002400393a5034f3327b3c4'      

        const response = await fetch(url);
        const json = await response.json();
       

    } catch (error) {
        console.error(error);
    }
};


export default function Ingredients( {route, navigation}) {
    const recipe = route.params;
    const ingredients = recipe.extendedIngredients;
    
    return (
        <View>
            <FlatList
                style={styles.container}
                data={ingredients}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.ingredientContainer}>
                        {/* <Image source={{ uri: item.image }} style={styles.image} /> */}
                        <View style={styles.textBox}>
                            <Text style={styles.unit}>{item.measures.us.amount} {item.unit}  </Text>
                            <Pressable style={{backgroundColor: "#AFAFAFA0"}} onPress={() => {getSubstitutes(item.id)}}>
                                <Text style={styles.text}>{item.name}</Text>
                            </Pressable>
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={<View style={{ height: 10, width: "100%" }} />}
            />
        </View>

    );

}