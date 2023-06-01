import React from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import RecipeButton from "./RecipeButton";
import styles from "./style";

const Spacing = () => (
    <View style={{ height: "100%", width: 10 }} />
);

export default function RecipeScroll({title, mode} : {title: string, mode: int}){
    const DATA = [
        {
            name: "Chocolate Chip Cookies",
            info: "274 kcal - 1 hour",
        },
        {
            name: "Raisin Cookies",
            info: "274 kcal - 1 hour",
        },
        {
            name: "Dark Chocolate Cookies",
            info: "274 kcal - 1 hour",
        },
        {
            name: "Cookies",
            info: "274 kcal - 1 hour",
        },
        {
            name: "Biscuits",
            info: "274 kcal - 1 hour",
        },
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={DATA}
                renderItem={({item}) => <RecipeButton name={item.name} info={item.info} mode={mode}/>}
                ItemSeparatorComponent={ Spacing() }
                ListHeaderComponent={ Spacing() }
                ListFooterComponent={ Spacing() }
                showsHorizontalScrollIndicator={false}
                alwaysBounceHorizontal={false}
                style={mode == 1 ? styles.list_main : styles.list_lesser}
            />
        </View>
    )
}