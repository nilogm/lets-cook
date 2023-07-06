import { Text, View, FlatList } from "react-native";
import RecipeSearchButton from '../RecipeSearchButton'
import styles from "./style";

/**
 * 
 * @param {*} navigation
 * @param {Array<Object>} similarRecipes
 * @returns 
 */
export default function SimilarRecipes({ navigation, similarRecipes }: {
    similarRecipes: Array<Object>,
}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Similar Recipes</Text>
            <FlatList
                style={styles.list}
                data={similarRecipes}
                contentContainerStyle={{ alignContent: "center" }}
                renderItem={({ item }) => (
                    <RecipeSearchButton
                        navigation={navigation} recipe={item} args={{ similar: true }}
                    />
                )}
                ItemSeparatorComponent={
                    <View style={{ height: 5, width: "100%" }} />
                }
            />
        </View>
    )

}