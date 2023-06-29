import React, { useRef, useState } from "react";
import { Pressable, TextInput, View, Text, Switch } from "react-native";
import TagContainer from "../TagContainer";
import styles from "./style";

export default function MacroInput({ list, manager, style }) {

    const [input, setInput] = useState('')
    const [value, setValue] = useState(0)
    const [macroParam, toggleParam] = useState(false)

    const addTag = (tagName : string, value : int) => {
        if (tagName == "") return
        const filteredData = list.filter(item => item.pure !== tagName)

        const tag = (macroParam ? "max" : "min") + tagName;
        console.log(tag);

        var newArray = [...filteredData, { name: tag, amount: value, unit: "g", pure: tagName}]
        setInput("")
        setValue(0)
        manager(newArray)
    }

    const deleteTag = (tagName) => {
        if (!tagName) return
        const filteredData = list.filter(item => item.name !== tagName)
        manager(filteredData)
    }

    const numInput = useRef()

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
        "Fiber": "g",
        "Folate": "mg",
        "FolicAcid": "µg",
        "Iodine": "µg",
        "Iron": "mg",
        "Magnesium": "mg",
        "Manganese": "mg",
        "Phosphorus": "mg",
        "Potassium": "mg",
        "Selenium": "µg",
        "Sodium": "mg",
        "Sugar": "g",
        "Zinc": "mg"
    };

    return (
        <View style={styles.mainContainer}>
            <View style={styles.tagBox}>
                <TextInput
                    placeholder={"Macro"}
                    style={[style, styles.macroBox]}
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={() => numInput.current.focus()}
                    returnKeyType="next"
                    selectTextOnFocus={true}
                    blurOnSubmit={false}
                />
                <TextInput
                    placeholder={"0"}
                    style={[style, styles.valueBox]}
                    value={value}
                    onChangeText={setValue}
                    onSubmitEditing={() => addTag(input, value)}
                    returnKeyType="search"
                    keyboardType="numeric"
                    selectTextOnFocus={true}
                    ref={numInput}
                />
            </View>
            <View style={styles.parameterContainer}>
                <Text style={[styles.parameterText, !macroParam && styles.parameterTextFocus]}>MIN</Text>
                <Switch
                    thumbColor={"#FFFFFF"}
                    trackColor={{ false: "#AAAAAA", true: "#AAAAAA" }}

                    onValueChange={() => toggleParam(previousState => !previousState)}
                    value={macroParam}
                />
                <Text style={[styles.parameterText, macroParam && styles.parameterTextFocus]}>MAX</Text>
            </View>
            <TagContainer tagList={list} enableCancelButton={true} cancelHandler={deleteTag} />
        </View>
    );
}