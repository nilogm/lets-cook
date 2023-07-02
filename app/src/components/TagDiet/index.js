import React, { useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";
import TagContainer from "../TagContainer";

export default function TagDiet({ list, manager, style }) {

    const allDiets = [
        { name: "Gluten Free" },
        { name: "Ketogenic" },
        { name: "Vegetarian" },
        { name: "Lacto-Vegetarian" },
        { name: "Ovo-Vegetarian" },
        { name: "Vegan" },
        { name: "Pescetarian" },
        { name: "Paleo" },
        { name: "Primal" },
        { name: "Whole30" }
    ];

    const [checkedList, setCheckedList] = useState([])

    const addDiet = (diet) => {
        const filteredData = list.filter(item => item === diet.name)
        if (filteredData.length > 0)
            var newArray = list.filter(item => item !== diet.name)
        else
            var newArray = [...list, diet.name]
        manager(newArray)
    }

    return (
        <View style={styles.mainContainer}>
            <TagContainer tagList={allDiets} onClick={addDiet} changeColor={true} />
        </View>
    );
}