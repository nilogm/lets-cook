import { Text, View, ImageBackground, Image, Pressable } from "react-native";
import styles from "./style";
import TagInput from "../TagInput";
import TagContainer from "../TagContainer";
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from "react";



const getSimilar = async (id, navigation, data) => {
    const similar = []

    try {

        url = 'https://api.spoonacular.com/recipes/' + id + '/similar?apiKey=ed5efa73e002400393a5034f3327b3c4&number=2'

        const response = await fetch(url);

        const json = await response.json();

        for (i = 0; i < 2; i++) {
            const response2 = await fetch("https://api.spoonacular.com/recipes/" + json[i].id +
                "/information?apiKey=ed5efa73e002400393a5034f3327b3c4")
            const json2 = await response2.json()
            similar.push(json2)
        }

        const send = {
            recipe: data,
            similarRecipes: similar
        }

        return (
            navigation.navigate('Recipe', send)
        )

    } catch (error) {
        console.error(error)
    }
}

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

export default function RecipeSearchButton({ navigation, data, similar = false }: { data: Search, similar: Boolean }) {

    var nutrients = [];
    var ingredients = [];
    if (!similar) {
        if (data.nutrition != undefined)
            nutrients = data.nutrition.nutrients;

        ingredients = data.missedIngredients;
    }

    return (
        <Pressable
            style={styles.container}
            onPress={() => { getSimilar(data.id, navigation, data) }}
        >
            <View style={styles.image_container}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <View style={styles.info_container}>
                    <Text style={[styles.text, styles.title]} numberOfLines={2}>{data.title}</Text>
                    <Text style={[styles.text, styles.information_text]}>
                        <Text>{data.readyInMinutes}' . </Text>
                        <Text>
                            <Text>{data.servings} serving</Text>
                            {data.servings > 1 && <Text>s</Text>}
                        </Text>
                    </Text>

                </View>
            </View>

            {
                !similar &&
                <View style={styles.tag_container}>
                    <LinearGradient
                        colors={["#00000030", 'transparent']}
                        style={styles.gradient}
                    />

                    <View style={styles.taglist_container}>
                        <TagContainer tagList={[...ingredients, ...nutrients]}></TagContainer>
                    </View>
                </View>
            }

            <LinearGradient
                colors={["#00000020", 'transparent']}
                style={styles.gradient}
            />

        </Pressable>
    )
}