import React, { useRef, useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";
import styles from "./style";
import TagContainer from "../TagContainer";
import { Switch } from "react-native";

export default function TagInput({ inputText, list, manager }) {

    const numInput = useRef()

    const [input, setInput] = useState('')
    const [value, setValue] = useState('')

    const [macroParam, toggleParam] = useState(false)

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

    const [macro, setMacro] = useState("");
    const allMacros = {
        "Carbs": "g",
        "Protein": "g",
        "Calories": "kcal",
        "Fat": "g",
        "Alcohol": "g",
        "Caffeine": "mg",
        "Copper": "mg",
        "Calcium": "mg",
        "Choline": "mg",
        "Cholesterol": "mg",
        "Fluoride": "mg",
        "SaturatedFat": "g",
        "VitaminA": "IU",
        "VitaminC": "mg",
        "VitaminD": "µg",
        "VitaminE": "mg",
        "VitaminK": "µm",
        "VitaminB1": "mg",
        "VitaminB2": "mg",
        "VitaminB5": "mg",
        "VitaminB3": "mg",
        "VitaminB6": "mg",
        "VitaminB12": "µm",
        "Fiber" : "g",
        "Folate" : "mg",
        "FolicAcid" : "µg",
        "Iodine" : "µg",
        "Iron" : "mg",
        "Magnesium" : "mg",
        "Manganese" : "mg",
        "Phosphorus" : "mg",
        "Potassium" : "mg",
        "Selenium" : "µg",
        "Sodium" : "mg",
        "Sugar" : "g",
        "Zinc" : "mg"
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.tagBox}>
                <TextInput
                    placeholder={inputText}
                    style={[styles.inputBox, styles.macroBox]}
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={() => numInput.current.focus()}
                    returnKeyType="next"
                    selectTextOnFocus={true}
                    blurOnSubmit={false}
                />
                <TextInput
                    placeholder={"0"}
                    style={[styles.inputBox, styles.valueBox]}
                    value={value}
                    onChangeText={setValue}
                    onSubmitEditing={() => addTag(input, value)}
                    // returnKeyType="search"
                    keyboardType='decimal-pad'
                    selectTextOnFocus={true}
                    ref={numInput}
                />
            </View>
            <View style={styles.parameterContainer}>
                <Text style={[styles.parameterText, !macroParam && styles.parameterTextFocus]}>MIN</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => toggleParam(previousState => !previousState)}
                    value={macroParam}
                />
                <Text style={[styles.parameterText, macroParam && styles.parameterTextFocus]}>MAX</Text>
            </View>
            <TagContainer tagList={list} enableCancelButton={true} cancelHandler={deleteTag} />
        </View>
    );
}