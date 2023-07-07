import { View, Text, Pressable, FlatList, Image } from "react-native";
import { get_name, get_image } from "../../utils";
import { ingredient, substitute } from "../../types";
import styles from "./style";

/**
 * Popup that displays the ingredient name, image, possible units and substitutes. Toggles preference unit when "togglePreference" is given.
 * @param {ingredient} ingredient ingredient object the popup is being referered to.
 * @param {substitutes} substitutes substitutes to the ingredient.
 * @param {message} message message to be displayed in popup.
 * @param {function} togglePreference function handler that toggles the unit/metric preference.
 * @returns 
 */
export default function IngredientPopup({ ingredient, substitutes, message, togglePreference = null}: {
    togglePreference: function,
    ingredient : ingredient,
    message: string,
    substitutes : Array<substitute>
}) {

    return (
        <View style={styles.container}>
            {
                ingredient &&
                <View style={styles.headerContainer}>
                    <Image source={{ uri: get_image(ingredient.image) }} style={styles.image} />
                    <Text style={[styles.text, styles.titleText]}>{get_name(ingredient.name)}</Text>
                </View>
            }

            {
                ingredient &&
                (ingredient.measures.metric.amount != ingredient.measures.us.amount) &&
                <View style={styles.unitContainer}>
                    <Pressable style={styles.button}
                        onPress={() => { 
                            if (togglePreference)
                                togglePreference(true) 
                        }}>
                        <Text style={[styles.text, ingredient.usPreference ? styles.selectedText : null]}>
                            {ingredient.measures.us.amount} {ingredient.unit}
                        </Text>
                    </Pressable>

                    <Pressable style={styles.button}
                        onPress={() => { 
                            if (togglePreference)
                                togglePreference(false) 
                        }}>
                        <Text style={[styles.text, !ingredient.usPreference ? styles.selectedText : null]}>
                            {ingredient.measures.metric.amount} {ingredient.measures.metric.unitShort}
                        </Text>
                    </Pressable>
                </View>
            }

            <View style={styles.line} />

            <Text style={[styles.text, styles.messageText]}>{message}</Text>

            <FlatList
                data={substitutes}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item }) => (
                    <Text style={styles.text}>
                        <Text>{item.comparison} = </Text>
                        <Text style={styles.selectedText}>{item.substitute}</Text>
                    </Text>
                )}
                ItemSeparatorComponent={<View style={{ height: 5, width: "100%" }} />}
            />
        </View>
    );

}