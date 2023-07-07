import { View, Text, Pressable } from "react-native";
import styles from "./style";



export default function Popup({ content, setPopupMessage }: { setPopupMessage: function }) {

    return (
        <View style={styles.container}>
            {content}
            <Pressable
                style={[styles.button]}
                onPress={() => setPopupMessage("")}>
                <Text style={styles.text}>OK</Text>
            </Pressable>
        </View>
    );

}