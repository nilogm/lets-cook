import { View } from "react-native";
import RecipeSearch from "../../components/RecipeSearch";

export default function Search({ navigation }) {
    return (
        <View>
            <RecipeSearch navigation={navigation} />
        </View>
    );
}