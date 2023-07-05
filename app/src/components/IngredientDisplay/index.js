import React, { useState } from 'react';
import { View, Text, Image, } from "react-native";
import styles from "./style";
import { ingredient } from '../../types';

/**
 * Ingredient display used in the ingredient list page.
 * @param {ingredient} item API ingredient object.
 * @returns 
 */
export default function IngredientDisplay({ item }: { item : ingredient }) {

    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://spoonacular.com/cdn/ingredients_100x100/" + item.image }} style={styles.image} />
            <View style={styles.textBox}>
                {
                    item.usPreference &&
                    <Text style={styles.unit}>{item.measures.us.amount} {item.unit}  </Text>
                }
                {
                    !item.usPreference &&
                    <Text style={styles.unit}>{item.measures.metric.amount} {item.measures.metric.unitShort}  </Text>
                }
                <Text style={styles.text}>{item.name}</Text>
            </View>
        </View>

    );

}