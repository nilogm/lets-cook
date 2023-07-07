import React, { useRef, useState } from "react";
import { TextInput, View, FlatList, Pressable, Text, Keyboard, ActivityIndicator } from "react-native";
import { tag } from "../../../types";
import { search_item } from "../../../api";
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

    const [isLoading, setIsLoading] = useState(false);

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

        mainInput.current.focus()
    }

    const deleteTag = (tag) => {
        if (!tag) return
        const filteredData = list.filter(item => item.name !== tag.name)
        manager(filteredData)
    }

    const setTag = (item) => {
        addTag(item.name)
        setMatches([])
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder={"Ingredient"}
                style={style}
                value={input}
                onChangeText={(search) => {
                    setInput(search);
                    updateAutocomplete(search);
                }}
                selectTextOnFocus={true}
                ref={mainInput}
            />
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
                                    <Text style={styles.autocompleteText}>{item.name}</Text>
                                </Pressable>
                            }
                        </View>
                    )
                }}
                ItemSeparatorComponent={< View style={{ width: "100%", height: 2, backgroundColor: "#CCCCCC" }} />}
            />
            <TagContainer tagList={list} args={{ style: { alignSelf: "center", marginTop: 10 }, iconArgs: { onClick: deleteTag } }} />
        </View>
    );
}