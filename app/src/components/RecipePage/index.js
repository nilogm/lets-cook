import React from "react";
import { Text, View, FlatList, Image, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";
import RecipeAccordion from "./Accordion";

export default function RecipePage({ name, information, ingredients, preparo, image }) {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <LinearGradient
                    colors={['transparent', "#FFFFFFF0"]}
                    style={styles.gradient}
                />
            </ImageBackground>
            <Text style={styles.title}>{name}</Text>
            <RecipeAccordion title={"Informações"} data={information} />
            <RecipeAccordion title={"Ingredientes"} data={ingredients} />
            <RecipeAccordion title={"Modo de Preparo"} data={preparo} />
        </ScrollView>
    )
}