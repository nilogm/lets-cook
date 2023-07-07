import { Text, View, FlatList } from "react-native";
import RecipeSearchButton from '../RecipeSearchButton'
import styles from "./style";

/**
 * Displays the similar recipes given.
 * @param {Array<Object>} similarRecipes list of similar recipes
 * @param {function} setIsLoading function handler that updates loading status.
 * @returns 
 */
export default function SimilarRecipes({ navigation, similarRecipes, setIsLoading }: {
    similarRecipes: Array<Object>,
    setIsLoading : function
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
                        navigation={navigation} recipe={item} setIsLoading={setIsLoading} args={{ enableTagContainer: false }}
                    />
                )}
                ItemSeparatorComponent={
                    <View style={{ height: 5, width: "100%" }} />
                }
            />
        </View>
    )

}