import React, { useRef, useState } from "react";
import { Pressable, TextInput, View, Text, FlatList } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { tag } from "../../../types";
import { allMacros } from "../../../data";
import TagContainer from "../TagContainer";
import { error_text_style, iconbutton_style, inputbox_error, inputbox_style, text_style } from "../../../design";
import styles from "./style";

/**
 * Input for macros.
 * @param {Array<tag>} list current list of macros, changeable.
 * @param {function} manager function handler to execute list updates.
 * @returns 
 */
export default function MacroInput({ list, manager }: {
    list: Array<tag>,
    manager: function
}) {

    const [input, setInput] = useState('')

    const [minValue, setMinValue] = useState("")
    const [maxValue, setMaxValue] = useState("")

    const [inputError, setInputError] = useState(false)
    const [valueError, setValueError] = useState("")

    const [unit, setUnit] = useState("");

    const [matches, setMatches] = useState([]);

    const addTag = () => {
        if (input == "")
            return
        if (minValue == "" && maxValue == "") {
            setValueError("Amount values have not been set.")
            return
        }
        if (minValue != "" && maxValue != "" && Number(minValue) >= Number(maxValue)) {
            setValueError("MIN can't be greater than MAX.")
            return
        }
        if (matches.length == 0 && input.length == 0)
            return

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

        if (filteredData.length == 0 && search != "")
            setInputError(true)

        setMatches(filteredData);
    }

    const setTag = (item) => {
        searchItem("");
        setInput(item.name);
        setUnit(item.unit);
    }

    return (
        <View style={styles.mainContainer}>
            <View style={[styles.tagBox, list.length > 0 && { marginBottom: 10 }]}>
                <View style={{ marginBottom: 10 }}>
                    <TextInput
                        placeholder={"Macro"}
                        style={[inputbox_style, inputError && inputbox_error]}
                        value={input}
                        onChangeText={(search) => {
                            setInput(search)
                            setInputError(false)
                            searchItem(search)
                        }}
                        selectTextOnFocus={true}
                        blurOnSubmit={false}
                    />
                    {
                        inputError &&
                        <Text style={error_text_style}>Unknown macro.</Text>
                    }
                    <FlatList
                        data={matches}
                        renderItem={({ item }) => (
                            <Pressable style={styles.autocompleteBox} onPress={() => setTag(item)}>
                                <Text style={text_style}>{item.name}</Text>
                            </Pressable>
                        )}
                        ItemSeparatorComponent={<View style={{ width: "100%", height: 2, backgroundColor: "#CCCCCC" }} />}
                    />
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.valueContainer}>
                        <Text style={[text_style, styles.valuesText]}>MIN</Text>
                        <TextInput
                            placeholder={"0" + unit}
                            style={[inputbox_style, styles.valueBox, valueError != "" && inputbox_error]}
                            maxLength={2}
                            value={minValue}
                            onChangeText={(value) => {
                                setValueError("")
                                setMinValue(value)
                            }}
                            returnKeyType="search"
                            keyboardType="numeric"
                            selectTextOnFocus={true}
                        />
                        <Text style={[text_style, styles.valuesText]}>to</Text>
                        <TextInput
                            placeholder={"100" + unit}
                            maxLength={2}
                            style={[inputbox_style, styles.valueBox, valueError != "" && inputbox_error]}
                            value={maxValue}
                            onChangeText={(value) => {
                                setValueError("")
                                setMaxValue(value)
                            }}
                            returnKeyType="search"
                            keyboardType="numeric"
                            selectTextOnFocus={true}
                        />
                        <Text style={[text_style, styles.valuesText]}>MAX</Text>
                    </View>
                    <Pressable style={[iconbutton_style, styles.button]} onPress={addTag}>
                        <Icon name={"search"} size={16} style={styles.icons} />
                    </Pressable>
                </View>
                {
                    valueError != "" &&
                    <Text style={error_text_style}>{valueError}</Text>
                }
            </View>
            <TagContainer tagList={list} args={{ iconArgs: { onClick: deleteTag } }} />
        </View>
    );
}