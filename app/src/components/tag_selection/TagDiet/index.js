import React, { useState } from "react";
import { View } from "react-native";
import { tag } from "../../../types";
import { allDiets } from "../../../data";
import TagContainer from "../TagContainer";

/**
 * Tag container display with selectable tags.
 * @param {Array<tag>} list current list of macros, changeable.
 * @param {function} manager function handler to execute list updates.
 * @returns 
 */
export default function TagDiet({ list, manager }: {
    list: Array<tag>,
    manager: function
}) {

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
        <View>
            <TagContainer tagList={allDiets} args={{ iconArgs: { onClick: addDiet, changeColor: true } }} />
        </View>
    );
}