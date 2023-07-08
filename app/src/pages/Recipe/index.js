import { Text, View, FlatList, Image, Modal, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { recipe } from "../../types";
import { Line } from "../../components/assets";
import SimilarRecipes from "../../components/SimilarRecipes";
import RecipeInformationButton from "../../components/RecipeInformationButton";
import styles from "./style";
import LoadingModal from "../../components/LoadingModal";


export default function Recipe({ route, navigation }) {
    const recipe: recipe = route.params.recipe;
    const similarRecipes: Array<Object> = route.params.similarRecipes

    const [isLoading, setIsLoading] = useState(false);

    const blocks = [
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
                <Line />
            </View>

            <FlatList
                style={styles.blocks}
                data={blocks}
                horizontal={true}
                contentContainerStyle={styles.itemsContainer}
                renderItem={({ item }) => (
                    <RecipeInformationButton
                        navigation={navigation}
                        title={item.title}
                        data={recipe}
                        page={item.page} />)}
            />

            <SimilarRecipes navigation={navigation} similarRecipes={similarRecipes} setIsLoading={setIsLoading} />

            <LoadingModal isVisible={isLoading} isLoading={isLoading} />
        </View>
    );
}