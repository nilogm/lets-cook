import React, { useRef, useState } from "react";
import { TextInput, View, FlatList, Pressable, Text, Keyboard } from "react-native";
import { tag } from "../../../types";
import TagContainer from "../TagContainer";
import styles from "./style";
import { get_key } from "../../../utils";

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
    const [matches, setMatches] = useState([]);


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

    const searchItem = async (search: string) => {
        try {        

            const url = 'https://api.spoonacular.com/food/ingredients/autocomplete' + get_key() +'&query=' + search +'&number=4'

            const response = await fetch(url);
            const json = await response.json(); 
            setMatches(json)        
           

        } catch (error) {
            console.error(error);           

        }
    }

    const deleteTag = (tag) => {
        if (!tag) return
        const filteredData = list.filter(item => item.name !== tag.name)
        manager(filteredData)
    }

    const setTag = (item) => {
        // setInput(item.name);
        addTag(item.name)
        setMatches([])        
        // Keyboard.dismiss()
    }

    return (
        <View style={styles.mainContainer}>
            <TextInput
                placeholder={"Ingredient"}
                style={[style, styles.inputBox]}
                value={input}
                onChangeText={(search) => {
                    setInput(search)
                    searchItem(search)
                }}
                onSubmitEditing={() => addTag(input)}
                returnKeyType="search"
                blurOnSubmit={false}
                selectTextOnFocus={true}
                ref={mainInput}
            />
            <FlatList
                        data={matches}
                        renderItem={({ item }) => (
                            <Pressable style={styles.autocompleteBox} onPress={() => setTag(item)}>
                                <Text style={styles.autocompleteText}>{item.name}</Text>
                            </Pressable>
                        )}
                        ItemSeparatorComponent={<View style={{ width: "100%", height: 2, backgroundColor: "#CCCCCC" }} />}
            />
            <TagContainer tagList={list} args={{ iconArgs: { onClick: deleteTag } }} />
        </View>
    );
}