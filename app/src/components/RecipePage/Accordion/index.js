import React, { useState, useRef, useEffect } from "react";
import { Text, View, FlatList, Pressable, Animated, LayoutAnimation } from "react-native";
import styles from "./style";

const Spacing = () => (
    <View style={{ height: 10, width: "100%" }} />
);

export default function RecipeAccordion({ title, data }: { title: string, data: const[] }) {

    const [open, setOpen] = useState(true)

    const onPress = (link) => {
        setOpen(!open)
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
            {
                open &&
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Text style={{ marginLeft: 20 }}>
                        <Text style={styles.item_header}>{item.header}</Text>
                        <Text style={styles.item_info}>{item.info}</Text>
                    </Text>}
                    ListHeaderComponent={Spacing()}
                    ListFooterComponent={Spacing()}
                />
            }
        </View>
    )
}