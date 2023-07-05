import { Text, View, FlatList } from "react-native";
import RecipeSearchButton from '../RecipeSearchButton'
import styles from "./style";

/**
 * 
 * @param {*} navigation
 * @param {Array<string>} similarRecipes
 * @returns 
 */
export default function SimilarRecipes({ navigation, similarRecipes }: {
    similarRecipes: Array<string>,
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Similar Recipes</Text>
            <FlatList
                style={{ width: "100%" }}
                data={similarRecipes}
                contentContainerStyle={{ alignContent: "center" }}
                renderItem={({ item }) => (
                    <RecipeSearchButton
                        navigation={navigation} data={item} args={{ similar: true }}
                    />
                )}
                ItemSeparatorComponent={
                    <View style={{ height: 5, width: "100%" }} />
                }
            />
        </View>
    )

}