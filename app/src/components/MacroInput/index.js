import React, { useRef, useState } from "react";
import { Pressable, TextInput, View, Text, Switch, FlatList } from "react-native";
import TagContainer from "../TagContainer";
import styles from "./style";

export default function MacroInput({ list, manager, style }) {

    const [input, setInput] = useState('')

    const [minValue, setMinValue] = useState(0)
    const [maxValue, setMaxValue] = useState(100)

    const [unit, setUnit] = useState("");

    const [matches, setMatches] = useState([]);

    const addTag = () => {
        if (input == "") return

        var newArray = list;
        if (minValue != 0) {
            const filteredData = newArray.filter(item => item.name !== "min" + input)
            newArray = [...filteredData, { name: "min" + input, amount: minValue, unit: "g" }]
        }

        if (maxValue != 100){
            const filteredData = newArray.filter(item => item.name !== "max" + input)
            newArray = [...newArray, { name: "max" + input, amount: maxValue, unit: "g" }]
        }

        setInput("")
        setUnit("")
        setMinValue(0)
        setMaxValue(100)

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

    const allMacros = [
        {
            name: "Carbs",
            unit: "g"
        },
        {
            name: "Protein",
            unit: "g"
        },
        {
            name: "Calories",
            unit: "kcal"
        },
        {
            name: "Fat",
            unit: "g"
        },
        {
            name: "Alcohol",
            unit: "g"
        },
        {
            name: "Caffeine",
            unit: "mg"
        },
        {
            name: "Copper",
            unit: "mg"
        },
        {
            name: "Calcium",
            unit: "mg"
        },
        {
            name: "Choline",
            unit: "mg"
        },
        {
            name: "Cholesterol",
            unit: "mg"
        },
        {
            name: "Fluoride",
            unit: "mg"
        },
        {
            name: "SaturatedFat",
            unit: "g"
        },
        {
            name: "VitaminA",
            unit: "IU"
        },
        {
            name: "VitaminC",
            unit: "mg"
        },
        {
            name: "VitaminD",
            unit: "µg"
        },
        {
            name: "VitaminE",
            unit: "mg"
        },
        {
            name: "VitaminK",
            unit: "µm"
        },
        {
            name: "VitaminB1",
            unit: "mg"
        },
        {
            name: "VitaminB2",
            unit: "mg"
        },
        {
            name: "VitaminB5",
            unit: "mg"
        },
        {
            name: "VitaminB3",
            unit: "mg"
        },
        {
            name: "VitaminB6",
            unit: "mg"
        },
        {
            name: "VitaminB12",
            unit: "µm"
        },
        {
            name: "Fiber",
            unit: "g"
        },
        {
            name: "Folate",
            unit: "mg"
        },
        {
            name: "FolicAcid",
            unit: "µg"
        },
        {
            name: "Iodine",
            unit: "µg"
        },
        {
            name: "Iron",
            unit: "mg"
        },
        {
            name: "Magnesium",
            unit: "mg"
        },
        {
            name: "Manganese",
            unit: "mg"
        },
        {
            name: "Phosphorus",
            unit: "mg"
        },
        {
            name: "Potassium",
            unit: "mg"
        },
        {
            name: "Selenium",
            unit: "µg"
        },
        {
            name: "Sodium",
            unit: "mg"
        },
        {
            name: "Sugar",
            unit: "g"
        },
        {
            name: "Zinc",
            unit: "mg"
        }
    ];

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
                            maxLength={3}
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
            <TagContainer tagList={list} onClick={deleteTag} />
        </View>
    );
}