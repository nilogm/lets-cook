import { FlatList, View } from "react-native";
import RecipeSearchButton from "../../components/RecipeSearchButton"
import TagIcon from "../../components/TagIcon";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";

export default function RecipeSearch({ navigation }) {

    const results = [
        {
            "id": 715495,
            "image": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
            "imageType": "jpg",
            "nutrition": { "nutrients": [] },
            "title": "Turkey Tomato Cheese Pizza"
        },
        {
            "id": 715421,
            "image": "https://spoonacular.com/recipeImages/715421-312x231.jpg",
            "imageType": "jpg",
            "nutrition": { "nutrients": [] },
            "title": "Cheesy Chicken Enchilada Quinoa Casserole"
        }
    ]

    const ingredients = [
        { name: "tomato" },
        { name: "cheese" }
    ];
    const macros = [
        { name: "maxFat", value: 10, unit: "g" },
        { name: "maxCholesterol", value: 2, unit: "g" }
    ];

    return (
        <View>
            <View style={styles.container}>
                <FlatList
                    horizontal={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={[...ingredients, ...macros]}
                    renderItem={({ item }) => (<TagIcon tag={item} />)}
                />
            </View>
            <LinearGradient
                colors={["#00000030", 'transparent']}
                style={styles.gradient}
            />
            <FlatList
                vertical={true}
                scrollEnabled={true}
                data={results}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item }) => (<RecipeSearchButton navigation={navigation} title={item.title} image={item.image} />)}
                ItemSeparatorComponent={<View style={{ height: 5, width: "100%" }} />}
            />
        </View>
    )
}