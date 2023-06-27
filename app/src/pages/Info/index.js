import { View, Text, Pressable } from "react-native";
import styles from "./style";

export default function Info({ route, navigation }) {

    const summary = route.params.summary;

    return (
        <View style={styles.container}>
            <Text style={styles.infoText}>
                Turkey Tomato Cheese Pizza might be just the Mediterranean recipe you are searching for.
                For $1.84 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals.
                This hor d'oeuvre has 221 calories, 10g of protein, and 8g of fat per serving. This recipe serves 6.
                Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today.
                This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around 15 minutes.
                All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding.
                Users who liked this recipe also liked
            </Text>
        </View>
    );

}