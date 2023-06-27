import React from "react";
import { Text, View, FlatList, Image, ImageBackground, Pressable, ScrollView } from "react-native";
import RecipePage from '../../components/RecipePage';
import SimilarRecipes from "../../components/SimilarRecipes";
import RecipeInformationButton from "../../components/RecipeInformationButton";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";


export default function Recipe({ route, navigation }) {

    const info = [
        {
            header: "Calorias: ",
            info: "134 kcal"
        },
        {
            header: "Tempo de preparo: ",
            info: "20 minutos"
        },
    ]

    const ingre = [
        {
            info: "5 folhas de alface",
        },
        {
            info: "2 tomates",
        },
        {
            info: "1/2 cebola",
        },
        {
            info: "Sal e azeite a gosto",
        },
    ]

    const modo = [
        {
            info: "Lave e corte o tomate em meias rodelas.",
        },
        {
            info: "Lave e pique a cebola em quadradinhos pequenos.",
        },
        {
            info: "Lave e rasgue as folhas de alface em tamanhos menores.",
        },
        {
            info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
        },
        {
            info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
        },
        {
            info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
        },
        {
            info: "Coloque todos os ingredientes em uma vasilha e tempere com sal e azeite a gosto.",
        },
    ]

    const recipe = route.params;
    const image = recipe.image;

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
                    <Image source={{ uri: image }} style={styles.image}></Image>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle} numberOfLines={2}>{recipe.title}</Text>
                        <View style={{ marginTop: 5 }}>
                            <Text style={styles.headerInformation}>{recipe.servings} servings</Text>
                            <Text style={styles.headerInformation}>{recipe.readyInMinutes} minutes</Text>
                        </View>
                    </View>
                </View>

                <FlatList
                    style={styles.blocks}
                    horizontal={true}
                    data={blocks}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (<RecipeInformationButton navigation={navigation} title={item.title} data={recipe} page={item.page}></RecipeInformationButton>)}
                    ItemSeparatorComponent={<View style={{ height: "100%", width: 20 }} />}
                />

            </View>
            <SimilarRecipes>

            </SimilarRecipes>
        </View>
    );
}