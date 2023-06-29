import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import styles from "./style";
import TagContainer from "../TagContainer";

export default function TagInput({ list, manager, style }) {

    const mainInput = useRef();

    const [input, setInput] = useState('')

    const addTag = (tagName) => {
        if (!tagName) return
        tagName = tagName.toLowerCase();
        const filteredData = list.filter(item => item.name === tagName)
        if (filteredData.length > 0)
            return

        var newArray = [...list, { name: tagName }]
        setInput(null)
        manager(newArray)

        mainInput.current.focus()
    }

    const deleteTag = (tag) => {
        if (!tag) return
        const filteredData = list.filter(item => item.name !== tag.name)
        manager(filteredData)
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder={"Ingredient"}
                style={[style, styles.inputBox]}
                value={input}
                onChangeText={setInput}
                onSubmitEditing={() => addTag(input)}
                returnKeyType="search"
                blurOnSubmit={false}
                selectTextOnFocus={true}
                ref={mainInput}
            />
            <TagContainer tagList={list} onClick={deleteTag} />
        </View>
    );
}