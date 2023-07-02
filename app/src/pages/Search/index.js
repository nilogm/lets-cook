import { FlatList, Pressable, View, Text, ActivityIndicator } from "react-native";
import { useState } from 'react';

import RecipeSearchButton from "../../components/RecipeSearchButton"
import TagIcon from "../../components/TagIcon";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";



export default function RecipeSearch({ route, navigation }) {

    const [isLoading, setIsLoading] = useState(false);

    const data = route.params;

    const results = data.results;
    const url = data.source;
    const ingredients = data.ingredientsUsed
    const macros = data.macrosUsed
    const isUS_measure = data.isUS_measure

    const getMoreRecipes = async (url, results) => {
        try {
            setIsLoading(!isLoading);

            url = url + "&offset=7"

            const response = await fetch(url);

            const json = await response.json();
            const moreResults = json.results

            for (i = 0; i < 7; i++) {
                // if (!results.includes(moreResults[i]))         
                results.push(moreResults[i])
            }

        } catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }

    };
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
                style={{ height: 700 }}
                vertical={true}
                scrollEnabled={true}
                data={results}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item, index }) => (
                    <RecipeSearchButton
                        navigation={navigation} data={item}
                        index={index} isUS_measure={isUS_measure}
                    />)}
                ItemSeparatorComponent={<View style={{ height: 5, width: "100%" }} />}

                ListFooterComponent={() => <View style={styles.loadMoreView}>
                    <Pressable style={styles.loadMorePressable} onPress={() => { getMoreRecipes(url, results) }}>
                        {isLoading && <ActivityIndicator size="large" color="yellow" />}
                        <Text style={styles.loadMoreText}>
                            {isLoading ? "loading..." : "More Recipes"}
                        </Text>
                    </Pressable>
                </View>}
            />
        </View>
    )
}