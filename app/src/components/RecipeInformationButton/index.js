import { Text, View, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";


export default function Recipe({ navigation, title, data, page }) {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => { navigation.navigate(page, data) }}
                style={styles.block}>
            </Pressable>
            <Text style={styles.header} >{title}</Text>
        </View>
    );
}