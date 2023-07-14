import React, { useRef, useState } from "react";
import { TextInput, View, FlatList, Pressable, Text, ActivityIndicator } from "react-native";
import { tag } from "../../../types";
import { search_item } from "../../../api";
import TagContainer from "../TagContainer";
import styles from "./style";
import { error_text_style, inputbox_error, inputbox_style, text_style } from "../../../design";

/**
 * Input for ingredients.
 * @param {Array<list>} list current list of ingredients, changeable.
 * @param {function} manager function handler to execute list updates.
 * @returns 
 */
export default function TagInput({ list, manager }: {
    list: Array<tag>,
    manager: function,
}) {

    const [isLoading, setIsLoading] = useState(false);

    const [inputError, setInputError] = useState(false);

    const [input, setInput] = useState('')
    const [matches, setMatches] = useState([]);

    const updateAutocomplete = async (search) => {
        if (search == "") {
            setMatches([])
            return
        }

        setIsLoading(true)
        setMatches([{ state: isLoading }])
        const res = await search_item(search)
        setIsLoading(false)

        if (res.length == 0)
            setInputError(true)

        setMatches(res)
    }

    const addTag = (tagName) => {
        if (!tagName) return
        setMatches([])

        tagName = tagName.toLowerCase();
        const filteredData = list.filter(item => item.name === tagName)
        if (filteredData.length > 0)
            return

        var newArray = [...list, { name: tagName }]
        setInput(null)
        manager(newArray)
    }

    const deleteTag = (tag) => {
        if (!tag) return
        const filteredData = list.filter(item => item.name !== tag.name)
        manager(filteredData)
    }

    const setTag = (item) => {
        addTag(item.name)
        setInputError(false)
        setMatches([])
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder={"Ingredient"}
                style={[inputbox_style, inputError && inputbox_error]}
                value={input}
                onChangeText={(search) => {
                    setInput(search);
                    setInputError(false);
                    updateAutocomplete(search);
                }}
                selectTextOnFocus={true}
            />
            {
                inputError &&
                <Text style={error_text_style}>Unknown ingredient.</Text>
            }
            {
                input && input.length > 0 &&
                <FlatList
                    data={matches}
                    renderItem={({ item }) => {
                        return (
                            <View>
                                {isLoading ?
                                    <View style={styles.autocompleteBox}>
                                        <ActivityIndicator size="large" color="gray" />
                                    </View>
                                    :
                                    <Pressable style={styles.autocompleteBox} onPress={() => setTag(item)}>
                                        <Text style={text_style}>{item.name}</Text>
                                    </Pressable>
                                }
                            </View>
                        )
                    }}
                    ItemSeparatorComponent={< View style={{ width: "100%", height: 2, backgroundColor: "#CCCCCC" }} />}
                />
            }
            <TagContainer tagList={list} args={{ style: { alignSelf: "center", marginTop: 10 }, iconArgs: { onClick: deleteTag } }} />
        </View>
    );
}