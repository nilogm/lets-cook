import { View, Text, Pressable } from "react-native";
import styles from "./style"
import { useState } from "react";

type tag = {
    name: string,
    amount: double | int | undefined,
    unit: string | undefined,
}

export default function TagIcon({ tag, style, focus = false, onClick = null, changeColor = false }: { tag: tag, focus: boolean, onClick: function, changeColor : boolean }) {

    const [enabled, toggleEnabled] = useState(false);

    const onPressed = () => {
        if (changeColor)
            toggleEnabled(!enabled);

        if (onClick)
            onClick(tag)
    }

    return (
        <Pressable style={[styles.boxContainer, enabled && styles.enabled]}
            onPress={onPressed}>
            <Text style={[styles.text, focus ? styles.textFocus : enabled ? styles.enabledText : styles.textLesser]}>
                <Text>{tag.name}</Text>
                {
                    (tag.amount != null) &&
                    <Text style={styles.textLesserContent}>: {tag.amount} {tag.unit}</Text>
                }
            </Text>
        </Pressable>
    )

}