import { Text, View, FlatList } from "react-native";
import RecipeSearchButton from '../RecipeSearchButton'
import styles from "./style";


export default function SimilarRecipes({ navigation, similarRecipes }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Similar Recipes</Text>
            <FlatList
                style={{ width: "100%" }}
                data={similarRecipes}
                contentContainerStyle={{ alignContent: "center" }}
                renderItem={({ item }) => (
                    <RecipeSearchButton
                        navigation={navigation} data={item} similar={true}
                    />
                )}
                ItemSeparatorComponent={
                    <View style={{ height: 5, width: "100%" }} />
                }
            />
        </View>
    )

}