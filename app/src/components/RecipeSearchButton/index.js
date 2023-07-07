import { Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { get_key, set_params } from "../../utils";
import { recipe, ingredient, nutrients } from "../../types";
import TagContainer from "../tag_selection/TagContainer";
import styles from "./style";

/**
 * 
 * @param {*} navigation 
 * @param {recipe} data 
 * @param {boolean} isUS_measure 
 * @returns 
 */
const getSimilar = async (navigation, data, isUS_measure) => {
    const similar = []
    

    try {
        url = 'https://api.spoonacular.com/recipes/' + data.id + '/similar' + get_key(2) + '&number=3'

        const response = await fetch(url);
        const json = await response.json();

 

        for (i = 0; i < json.length; i++) {
            const response2 = await fetch("https://api.spoonacular.com/recipes/" + json[i].id + "/information" + get_key(2))
            const json2 = await response2.json()
            similar.push(json2)
        }

        const send = {
            recipe: data,
            similarRecipes: similar,
            isUS_measure: isUS_measure
        }

        return (
            navigation.navigate('Recipe', send)
        )

    } catch (error) {
        console.error(error)
    }
}



type args = {
    similar: boolean,
    isUS_measure: boolean,
};

/**
 * Button that displays basic recipe information. Optionally, more data can be displayed.
 * @param {recipe} recipe data from recipe to be displayed.
 * @param {args} args arguments related to the style of the component.
 * @returns 
 */
export default function RecipeSearchButton({ navigation, recipe, args }: {
    recipe: recipe,
    args: args
}) {

    var default_args = {
        "similar": false,
        "isUS_measure": false,
    };
    args = set_params(default_args, args);

    var nutrients : Array<nutrients> = [];
    var ingredients : Array<ingredient> = [];
    if (!args.similar) {
        if (recipe.nutrition != undefined){
            nutrients = recipe.nutrition.nutrients;
            console.log(Object.keys(nutrients))
        }
        ingredients = recipe.missedIngredients;
    }

    return (
        <Pressable style={styles.container}
            onPress={() => { getSimilar(navigation, recipe, args.isUS_measure) }}>
            <View style={styles.image_container}>
                <Image source={{ uri: recipe.image }} style={styles.image} />
                <View style={styles.info_container}>
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
                !args.similar &&
                <View style={styles.tag_container}>
                    <LinearGradient
                        colors={["#00000030", 'transparent']}
                        style={styles.gradient}
                    />

                    <View style={styles.taglist_container}>
                        <TagContainer tagList={[...ingredients, ...nutrients]} args={{ "small": true }}></TagContainer>
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