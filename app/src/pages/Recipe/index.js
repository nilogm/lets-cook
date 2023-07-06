import { Text, View, FlatList, Image } from "react-native";
import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { recipe } from "../../types";
import SimilarRecipes from "../../components/SimilarRecipes";
import RecipeInformationButton from "../../components/RecipeInformationButton";
import styles from "./style";


export default function Recipe({ route, navigation }) {
    const recipe : recipe = route.params.recipe;
    const similarRecipes : Array<Object> = route.params.similarRecipes
    const isUS_measure : boolean = route.params.isUS_measure

    const blocks = [
        {
            title: "Information",
            page: "Info"
        },
        {
            title: "Ingredients",
            page: "Ingredients"
        },
        {
            title: "Instructions",
            page: "Instructions"
        },
    ]

    return (
        <View>
            <View>
                <View style={styles.container}>
                    <Image source={{ uri: recipe.image }} style={styles.image}></Image>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle} numberOfLines={2}>{recipe.title}</Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={styles.headerInformation}>{recipe.readyInMinutes} minutes</Text>
                            <Text style={styles.headerInformation}>
                                <Text>{recipe.servings} serving</Text>
                                {recipe.servings > 1 && <Text>s</Text>}
                            </Text>
                        </View>
                    </View>
                </View>
            
                <FlatList
                    style={styles.blocks}
                    data={blocks}
                    horizontal={true}
                    contentContainerStyle={styles.itemsContainer}
                    renderItem={({ item }) => (
                        <RecipeInformationButton isUS_measure={isUS_measure}
                            navigation={navigation}
                            title={item.title}
                            data={recipe}
                            page={item.page} />)}
                />

            </View>
            <View style = {{marginTop: 30}}>
                <SimilarRecipes navigation={navigation} similarRecipes={similarRecipes} /> 
            </View>
        </View>
    );
}