import { View, Text, Pressable, Button, FlatList, Image } from "react-native";
import styles from "./style";


const data = [
    {
        id: 0,
        image: "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
        name: "Butter",
        amount: 100,
        unit: "g",
        replaceable: true
    },
    {
        id: 1,
        image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
        name: "Apples",
        amount: 4,
        unit: "",
        replaceable: false
    },
    {
        id: 2,
        image: "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
        name: "Apricot preserves",
        amount: 3,
        unit: "",
        replaceable: true
    }
]


export default function Ingredients() {

    return (
        <View>
            <FlatList
                style={styles.container}
                data={data}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.ingredientContainer}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.textBox}>
                            <Text style={styles.unit}>{item.amount}{item.unit} </Text>
                            <Text style={styles.text}>{item.name}</Text>
                        </Text>
                    </View>
                )}
                ItemSeparatorComponent={<View style={{ height: 10, width: "100%" }} />}
            />
        </View>

    );

}