import React, { useState } from 'react';
import { View, Text, Pressable, Button, FlatList, Image, } from "react-native";
import styles from "./style";

const getSubstitutes = async (id) => {
    try {
        url = 'https://api.spoonacular.com/food/ingredients/' + id + '/substitutes?apiKey=ed5efa73e002400393a5034f3327b3c4'

        console.log(id);

        const response = await fetch(url);        

        const json = await response.json();      
        
        var message = ""
        if (json.status == "success") {           
            message = json.substitutes[0]
        }
        else {         
            message = json.message
            
        }      
        console.log(message)

        return (
            <View style={{backgroundColor:"blue"}}>
                <Text>{message}</Text>
            </View>
        )


    } catch (error) {
        console.error(error);
    }
};


export default function Ingredients({ route}) {
    const recipe = route.params.recipe;
    const isUS_measure = route.params.isUS_measure
    const ingredients = recipe.extendedIngredients;
    console.log(ingredients[0].measures.metric)
   
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
                            {
                                isUS_measure &&
                                <Text style={styles.unit}>{item.measures.us.amount} {item.unit}  </Text>
                            }
                            {
                                !isUS_measure &&
                                <Text style={styles.unit}>{item.measures.metric.amount} {item.measures.metric.unitShort}  </Text>

                            }
                            <Pressable style={{ backgroundColor: "#AFAFAFA0" }}
                                onPress={() => { getSubstitutes(item.id) }}>

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