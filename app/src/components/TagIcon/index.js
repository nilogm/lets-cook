import { View, Text, Pressable } from "react-native";
import styles from "./style"

type tag = {
    name: string,
    amount: double | int | undefined,
    unit: string | undefined,
}

export default function TagIcon({ tag, style, focus = false, onClick = null }: { tag: tag, focus: boolean, onClick: function }) {

    return (
        <Pressable style={styles.boxContainer}
            onPress={() => {onClick(tag)}}>
            {/* change color based on macro */}
            {/* add icon */}
            <Text style={[styles.text, focus ? styles.textFocus : styles.textLesser]}>
                <Text>{tag.name}</Text>
                {
                    (tag.amount != null) &&
                    <Text style={styles.textLesserContent}>: {tag.amount} {tag.unit}</Text>
                }
            </Text>
        </Pressable>
    )

}