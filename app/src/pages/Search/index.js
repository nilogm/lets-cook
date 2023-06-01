import { FlatList, View } from "react-native";
import RecipeSearchButton from "../../components/RecipeSearchButton"

const Spacing = () => (
    <View style={{ height: 20, width: "100%" }} />
);

export default function RecipeSearch({ navigation }) {

    const DATA = [
        {
            title: "Frango Grelhado",
            image: "https://spoonacular.com/recipeImages/716429-312x231.jpg"
        },
        {
            title: "Milkshake de Baunilha",
            image: "https://spoonacular.com/recipeImages/715538-312x231.jpg"
        },
        {
            title: "Salada Ceasar",
            image: "https://spoonacular.com/recipeImages/73420-312x231.jpg"
        },
        {
            title: "Biscoito de Aveia",
            image: "https://spoonacular.com/recipeImages/73420-312x231.jpg"
        },
    ]

    return (
        <View>
            <FlatList
                vertical={true}
                scrollEnabled={true}
                data={DATA}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item }) => (<RecipeSearchButton navigation={navigation} title={item.title} image={item.image} />)}
                ItemSeparatorComponent={Spacing()}
            />
        </View>
    )
}