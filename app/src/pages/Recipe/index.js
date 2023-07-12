import { Text, View, FlatList, Image, Modal, ActivityIndicator, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { recipe } from "../../types";
import { text_style } from "../../design";
import { format_summary } from "../../utils";
import { Line } from "../../components/assets";
import LoadingModal from "../../components/LoadingModal";
import RecipeSearchButton from "../../components/RecipeSearchButton";
import styles from "./style";


function header(recipe: recipe) {
    return (
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
    );
}


function scrollHeader(navigation, summary) {
    return (
        <View style={{ width: "100%" }}>
            <View style={styles.summaryContainer}>
                <Text style={[text_style, { fontSize: 16 }]}>{summary}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <Pressable
                        onPress={() => { navigation.navigate("Ingredients", { recipe: recipe }) }}
                        style={[styles.button, { backgroundColor: "#99FF55" }]}>
                        <Icon name="carrot" size={32} style={styles.icons} />
                    </Pressable>
                    <Text>Ingredients</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Pressable
                        onPress={() => { navigation.navigate("Instructions", { recipe: recipe }) }}
                        style={[styles.button, { backgroundColor: "#FFDD00" }]}>
                        <Icon name="utensil-spoon" size={32} style={styles.icons} />
                    </Pressable>
                    <Text>Instructions</Text>
                </View>
            </View>

            <Text style={[text_style, { fontSize: 24 }]}>Similar Recipes</Text>
        </View>
    )
}


export default function Recipe({ route, navigation }) {
    const recipe: recipe = route.params.recipe;
    const similarRecipes: Array<Object> = route.params.similarRecipes

    const [isLoading, setIsLoading] = useState(false);

    const summary = format_summary(recipe.summary)

    return (
        <View style={{ height: "100%" }}>
            {header(recipe)}

            <FlatList
                ListHeaderComponent={scrollHeader(navigation, summary)}
                style={{ marginTop: 10, width: "90%", alignSelf: "center" }}
                data={similarRecipes}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignContent: "center" }}
                renderItem={({ item }) => (
                    <RecipeSearchButton
                        navigation={navigation} recipe={item} setIsLoading={setIsLoading} args={{ enableTagContainer: false }}
                    />
                )}
                ItemSeparatorComponent={
                    <View style={{ height: 5, width: "100%" }} />
                }
                ListFooterComponent={(<View style={{ paddingBottom: 10, height: 10 }}></View>)}
            />

            <LoadingModal isVisible={isLoading} isLoading={isLoading} />
        </View>
    );
}