import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { get_key, get_similar } from "../../api";
import { set_params } from "../../utils";
import { recipe, ingredient, nutrients } from "../../types";
import { Line } from "../assets";
import TagContainer from "../tag_selection/TagContainer";
import styles from "./style";

type args = {
    enableTagContainer: boolean,
    isUS_measure: boolean,
};

/**
 * Button that displays basic recipe information. Optionally, more data can be displayed.
 * @param {recipe} recipe data from recipe to be displayed.
 * @param {function} setIsLoading function handler to update loading state.
 * @param {args} args arguments related to the style of the component.
 * @returns 
 */
export default function RecipeSearchButton({ navigation, recipe, setIsLoading, args }: {
    recipe: recipe,
    args: args
}) {

    const load_recipe = async () => {
        setIsLoading(true)
        const page_data = await get_similar(recipe)
        setIsLoading(false)
        navigation.navigate('Recipe', page_data)
    }

    var default_args = {
        "enableTagContainer": true,
        "isUS_measure": false,
    };
    args = set_params(default_args, args);

    var nutrients: Array<nutrients> = [];
    var ingredients: Array<ingredient> = [];
    if (args.enableTagContainer) {
        if (recipe.nutrition != undefined)
            nutrients = recipe.nutrition.nutrients;
        ingredients = recipe.missedIngredients;
    }

    return (
        <View style={{ width: "90%" }}>
            <Pressable style={styles.container} onPress={() => load_recipe()}>

                <View style={styles.headerContainer}>

                    <Image source={{ uri: recipe.image }} style={styles.image} />

                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, styles.title]} numberOfLines={2}>{recipe.title}</Text>
                        <Text style={[styles.text, styles.information_text]}>
                            <Text>{recipe.readyInMinutes}' • </Text>
                            <Text>
                                <Text>{recipe.servings} serving</Text>
                                {recipe.servings > 1 && <Text>s</Text>}
                            </Text>
                        </Text>
                    </View>

                </View>

                {
                    args.enableTagContainer &&
                    <View style={styles.tagContainer}>
                        <Line />
                        <TagContainer tagList={[...ingredients, ...nutrients]} args={{ "small": true }}></TagContainer>
                    </View>
                }


            </Pressable>
            <LinearGradient
                colors={["#00000020", 'transparent']}
                style={styles.gradient}
            />
        </View>
    )
}