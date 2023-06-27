import { Text, View, Pressable } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./style";


export default function Recipe({ navigation, title, data, page }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => { navigation.navigate(page, data) }} style={styles.block}>
                <Text style={styles.header} numberOfLines={2}>{title}</Text>
                <View style={styles.informationContainer}>
                    <Text style={styles.text}>information.</Text>
                </View>
            </Pressable>
            <LinearGradient
                colors={["#AAAAAA40", "transparent"]}
                style={styles.gradient}
            />
        </View>
    );
}