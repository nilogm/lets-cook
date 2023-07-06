import React, { useRef, useState } from "react";
import { Pressable, TextInput, View, Text, FlatList } from "react-native";
import { tag } from "../../../types";
import { allMacros } from "../../../data";
import TagContainer from "../TagContainer";
import styles from "./style";

/**
 * Input for macros.
 * @param {Array<tag>} list current list of macros, changeable.
 * @param {function} manager function handler to execute list updates.
 * @param {Object} style textbox style.
 * @param {function} setPopupMessage function handler to change message displayed in error popup.
 * @returns 
 */
export default function MacroInput({ list, manager, style, setPopupMessage }: {
    list: Array<tag>,
    manager: function,
    style: Object,
    setPopupMessage: function
}) {

    const [input, setInput] = useState('')

    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")

    const [unit, setUnit] = useState("");

    const [matches, setMatches] = useState([]);

    const addTag = () => {
        if (input == "") return
        if (allMacros.filter(item => item.name === input).length == 0){
            setPopupMessage(input)
            return
        }

        setPopupMessage("")

        var newArray = list;
        if (minValue != "") {
            const filteredData = newArray.filter(item => item.name !== "min" + input)
            newArray = [...filteredData, { name: "min" + input, amount: minValue, unit: "g" }]
        }

        if (maxValue != "") {
            const filteredData = newArray.filter(item => item.name !== "max" + input)
            newArray = [...filteredData, { name: "max" + input, amount: maxValue, unit: "g" }]
        }

        setInput("")
        setUnit("")
        setMinValue("")
        setMaxValue("")

        manager(newArray)
    }

    const deleteTag = (tag) => {
        if (!tag) return

        const filteredData = list.filter(item => item.name !== tag.name)
        manager(filteredData)
    }

    const searchItem = (search: string) => {
        const filteredData = allMacros.filter(item => {
            const searchTerm = search.toLowerCase();
            const fullName = item.name.toLowerCase();

            return searchTerm && fullName.startsWith(searchTerm);
        })
        setMatches(filteredData);
    }

    const setTag = (item) => {
        searchItem("");
        setInput(item.name);
        setUnit(item.unit);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.tagBox}>
                <View>
                    <TextInput
                        placeholder={"Macro"}
                        style={style}
                        value={input}
                        onChangeText={(search) => {
                            setInput(search)
                            searchItem(search)
                        }}
                        selectTextOnFocus={true}
                        blurOnSubmit={false}
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
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.valueContainer}>
                        <Text style={styles.valuesText}>MIN</Text>
                        <TextInput
                            placeholder={"0" + unit}
                            style={[style, styles.valueBox]}
                            maxLength={2}
                            value={minValue}
                            onChangeText={setMinValue}
                            returnKeyType="search"
                            keyboardType="numeric"
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.valuesText}>to</Text>
                        <TextInput
                            placeholder={"100" + unit}
                            maxLength={2}
                            style={[style, styles.valueBox]}
                            value={maxValue}
                            onChangeText={setMaxValue}
                            returnKeyType="search"
                            keyboardType="numeric"
                            selectTextOnFocus={true}
                        />
                        <Text style={styles.valuesText}>MAX</Text>
                    </View>
                    <Pressable style={styles.sendButton} onPress={addTag} />
                </View>
            </View>
            <TagContainer tagList={list} args={{ iconArgs: { onClick: deleteTag } }} />
        </View>
    );
}