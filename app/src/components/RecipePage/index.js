import React from "react";
import { Text, View, FlatList, Image, ImageBackground, Pressable, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";




export default function RecipePage({ name, information, ingredients, preparo, image, navigation }) {
    return (
        <View>
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <LinearGradient
                        colors={['transparent', "#FFFFFFF0"]}
                        style={styles.gradient}
                    />
                </ImageBackground>
                <Text style={styles.title}>{name}</Text>


            </View>


            <ScrollView style={styles.opt} horizontal showsHorizontalScrollIndicator={false}>
                <View >
                    <Pressable onPress={() => { navigation.navigate('Info') }} style={styles.recipeOpt}>
                        <Text style={styles.campoText} numberOfLines={1}>Informations</Text>
                    </Pressable>

                    <LinearGradient
                        colors={["#AAAAAA40", "transparent"]}
                        style={styles.gradient2}
                    />
                </View>
                <View>
                    <Pressable onPress={() => { navigation.navigate('Ingredients') }} style={styles.recipeOpt}>
                        <Text style={styles.campoText} numberOfLines={1}>Ingredients</Text>
                    </Pressable>
                    <LinearGradient
                        colors={["#AAAAAA40", "transparent"]}
                        style={styles.gradient2}
                    />
                </View>
                <View>
                    <Pressable onPress={() => { navigation.navigate('Instructions') }} style={styles.recipeOpt}>
                        <Text style={styles.campoText} numberOfLines={2}>Instructions</Text>
                    </Pressable>
                    <LinearGradient
                        colors={["#AAAAAA40", "transparent"]}
                        style={styles.gradient2}
                    />
                </View>

            </ScrollView>

        </View>
    )
}



//title={"Informações"} data={information}