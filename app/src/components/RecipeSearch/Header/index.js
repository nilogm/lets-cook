import { FlatList, Text, View } from "react-native";
import styles from "./style";

const Spacing = () => (
    <View style={{ height: 20, width: "100%" }} />
);

export default function RecipeHeader() {
    const DATA = [
        {
            info: name
        }
    ]

    return (
        <View>
            <View></View>
            <FlatList
                horizontal={true}
                scrollEnabled={true}
                data={DATA}
                contentContainerStyle={{
                    alignItems: "center",
                }}
                renderItem={({ item }) => (
                    <RecipeButton title={item.title} image={item.image} />
                )}
                ItemSeparatorComponent={Spacing()}
            />
        </View>
    )
}