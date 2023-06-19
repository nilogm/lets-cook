import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";
import TagContainer from "../TagContainer";

export default function TagInput({ inputText, list, manager }) {

    const numInput = useRef()

    const [input, setInput] = useState(null)
    const [value, setValue] = useState(0)

    const addTag = (tagName, value) => {
        if (!tagName) return
        const filteredData = list.filter(item => item.name !== tagName)

        var newArray = [...filteredData, { name: tagName, value: value, unit: "g" }]
        setInput(null)
        setValue(0)
        manager(newArray)
    }

    const deleteTag = (tagName) => {
        if (!tagName) return
        const filteredData = list.filter(item => item.name !== tagName)
        manager(filteredData)
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.tagBox}>
                <TextInput
                    placeholder={inputText}
                    style={styles.inputBox}
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={() => numInput.current.focus()}
                    returnKeyType="next"
                    selectTextOnFocus={true}
                    blurOnSubmit={false}
                />
                <TextInput
                    placeholder={"0"}
                    style={styles.valueBox}
                    value={value}
                    onChangeText={setValue}
                    onSubmitEditing={() => addTag(input, value)}
                    returnKeyType="search"
                    keyboardType="numeric"
                    selectTextOnFocus={true}
                    ref={numInput}
                />
            </View>
            <TagContainer tagList={list} enableCancelButton={true} cancelHandler={deleteTag} />
        </View>
    );
}