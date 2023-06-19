import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";
import TagContainer from "../TagContainer";

export default function TagInput({ inputText, list, manager }) {

    const mainInput = useRef();

    const [input, setInput] = useState(null)

    const addTag = (tagName) => {
        if (!tagName) return
        const filteredData = list.filter(item => item.name === tagName)
        if (filteredData.length > 0)
            return

        var newArray = [...list, { name: tagName }]
        setInput(null)
        manager(newArray)

        mainInput.current.focus()
    }

    const deleteTag = (tagName) => {
        if (!tagName) return
        const filteredData = list.filter(item => item.name !== tagName)
        manager(filteredData)
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder={inputText}
                style={styles.inputBox}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={() => addTag(input)}
                returnKeyType="search"
                blurOnSubmit={false}
                selectTextOnFocus={true}
                ref={mainInput}
            />
            <TagContainer tagList={list} enableCancelButton={true} cancelHandler={deleteTag} />
        </View>
    );
}