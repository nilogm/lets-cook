import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, ImageBackground, Pressable, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";
import RecipeSearchButton from '../RecipeSearchButton'
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


export default function SimilarRecipes({ navigation, similarRecipes }) {
    console.log(similarRecipes)
    return (
        <View style={styles.container}>
            <Text style = {styles.title}>Similar Recipes</Text>
            <FlatList
                style={{ paddingTop:20}}
                
                horizontal={true}
                scrollEnabled={true}
                data={similarRecipes}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item }) => (   
                                             
                    <RecipeSearchButton
                        navigation={navigation} data={item} similar={true}
                    />                   
                    
                )}

                ItemSeparatorComponent={<View style={{ height: "100%", width: 50 }} />}
            />
        </View>
    )

}