import { View, Text, Pressable } from "react-native";
import styles from "./style"

/**
 * Creates _Tag_ instance with given name.
 * @param {string} name tag name.
 * @param {function} handler "close" button function handler (default: null).
 * @param {boolean} enableCancelButton (default: false).
 * @returns 
 */
export default function TagIcon({ name, handler = null, enableCancelButton = false }: { name: string, handler: function, enableCancelButton: boolean }) {

    return (
        <View style={styles.boxContainer}>
            {/* change color based on macro */}
            {/* icon */}
            {/* <Image></Image> */}
            <Text style={styles.textTitle}>{name}</Text>
            {
                enableCancelButton &&
                <Pressable style={styles.cancelButton}
                    onPress={() => handler(name)}>
                    <Text style={{ fontSize: 8 }}>X</Text>
                </Pressable>
            }
        </View>
    )

}