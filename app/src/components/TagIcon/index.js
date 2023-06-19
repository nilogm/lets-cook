import { View, Text, Pressable } from "react-native";
import styles from "./style"

/**
 * Creates _Tag_ instance with given name.
 * @param {string} name tag name.
 * @param {function} cancelHandler "close" button function handler (default: null).
 * @param {boolean} enableCancelButton (default: false).
 * @returns 
 */
export default function TagIcon({ tag, cancelHandler = null, enableCancelButton = false }: { cancelHandler: function, enableCancelButton: boolean }) {

    const removeTag = () => {
        if (enableCancelButton == true)
            cancelHandler(tag.name)
    }

    return (
        <Pressable style={styles.boxContainer}
            onPress={() => removeTag()}>
            {/* change color based on macro */}
            {/* icon */}
            {/* <Image></Image> */}
            <Text style={styles.textTitle}>{tag.name}</Text>
            {
                (tag.value != null) &&
                <Text style={styles.textTitle}> {tag.value}{tag.unit}</Text>
            }
        </Pressable>
    )

}