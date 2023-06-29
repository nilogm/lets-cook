import { Text, View, ImageBackground, Image, Pressable } from "react-native";
import styles from "./style";
import TagInput from "../TagInput";
import TagContainer from "../TagContainer";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";

type Search = {
    title: string,
    image: var,
    cookingMinutes: string,
    preparationMinutes: string,
    readyInMinutes: string,
    servings: string,
    dishTypes: Array,
    diets: Array,
    dairyFree: boolean,
    vegan: boolean,
    vegetarian: boolean,
    healthScore: int,
    nutrition: Array | undefined,
    missedIngredients: Array
};

export default function RecipeSearchButton({ navigation, data, results, index }: { data: Search, results: JSON, index: int }) {
    var nutrients = [];

    if (data.nutrition != undefined)
        nutrients = data.nutrition.nutrients;
    const ingredients = data.missedIngredients;

    return (
        <Pressable style={styles.container} onPress={() => {
            navigation.navigate('Recipe', results[index]);
        }}>
            <View style={styles.image_container}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.info_container}>
                    <Text style={[styles.text, styles.title]} numberOfLines={2}>{data.title}</Text>
                    <Text style={[styles.text, styles.information_text]}>
                        <Text>{data.readyInMinutes}' • </Text>
                        <Text>
                            <Text>{data.servings} serving</Text>
                            {data.servings > 1 && <Text>s</Text>}
                        </Text>
                    </Text>

                </View>
            </View>

            <View style={styles.tag_container}>
                <LinearGradient
                    colors={["#00000030", 'transparent']}
                    style={styles.gradient}
                />

                <View style={styles.taglist_container}>
                    <TagContainer tagList={[...ingredients, ...nutrients, {name: '...'}]}></TagContainer>
                </View>
            </View>

            <LinearGradient
                colors={["#00000020", 'transparent']}
                style={styles.gradient}
            />
        </Pressable>
    )
}