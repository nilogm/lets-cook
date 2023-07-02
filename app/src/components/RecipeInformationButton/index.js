import { Text, View, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";


export default function Recipe({ navigation, title, data, page, isUS_measure }) {

    send = {
        recipe: data,
        isUS_measure: isUS_measure
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => { navigation.navigate(page, send) }}
                style={styles.block}>
            </Pressable>
            <Text style={styles.header} >{title}</Text>
        </View>
    );
}