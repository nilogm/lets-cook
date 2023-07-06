import React, { useRef, useState } from "react";
import { TextInput, View } from "react-native";
import { tag } from "../../../types";
import TagContainer from "../TagContainer";
import styles from "./style";

/**
 * Input for ingredients.
 * @param {Array<list>} list current list of ingredients, changeable.
 * @param {function} manager function handler to execute list updates.
 * @param {Object} style textbox style.
 * @param {function} setPopupMessage function handler to change message displayed in error popup.
 * @returns 
 */
export default function TagInput({ list, manager, style, setPopupMessage }: {
    list: Array<tag>,
    manager: function,
    style: Object,
    setPopupMessage: function
}) {

    const mainInput = useRef();

    const [input, setInput] = useState('')

    const addTag = (tagName) => {
        if (!tagName) return

        // ao fazer o autocomplete,
        // se o ingrediente existir, setPopupMessage("")
        // caso contrário, setPopupMessage({tagName})

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
            <TagContainer tagList={list} args={{ iconArgs: { onClick: deleteTag } }} />
        </View>
    );
}