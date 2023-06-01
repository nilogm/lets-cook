import React, { useState } from "react";
import { TextInput, Text, View, Button, FlatList, Pressable } from "react-native";
import styles from "./style";
import TagIcon from "../TagIcon";
import TagContainer from "../TagContainer";

export default function TagInput({ inputText, startingItems }) {

    const [tagList, setList] = useState([])

    const [input, setInput] = useState(null)

    const addTag = (name) => {
        if (!name) return

        const filteredData = tagList.filter(item => item.tag === name)
        if (filteredData.length > 0)
            return

        var newArray = [...tagList, { tag: name }]
        setInput(null)
        setList(newArray)
    }

    const deleteItemByTag = (tag) => {
        const filteredData = tagList.filter(item => item.tag !== tag)
        setList(filteredData)
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder={inputText}
                style={styles.inputBox}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={() => addTag(input)}
            />
            <TagContainer tagList={tagList} />
        </View>
    );
}