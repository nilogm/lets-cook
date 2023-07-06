import { FlatList, Pressable, View, Text, ActivityIndicator } from "react-native";
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import RecipeSearchButton from "../../components/RecipeSearchButton"
import TagIcon from "../../components/tag_selection/TagIcon";
import styles from "./style";



export default function RecipeSearch({ route, navigation }) {

    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(7);

    const data = route.params;

    const results = data.results;
    const url = data.source;
    const ingredients = data.ingredientsUsed
    const macros = data.macrosUsed
    const isUS_measure = data.isUS_measure

    const getMoreRecipes = async (url, results) => {
        try {
            setIsLoading(!isLoading);

            setOffset(offset + 7);
            url = url + "&offset=" + offset;

            const response = await fetch(url);

            const json = await response.json();
            const moreResults = json.results

            for (i = 0; i < moreResults.length; i++) {               
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
        <View style={{ flex: 1 }}>
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
                style={styles.list}
                vertical={true}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                data={results}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item, index }) => (
                    <RecipeSearchButton
                        navigation={navigation} recipe={item}
                        args={{ "isUS_measure": isUS_measure }}
                    />)}
                ItemSeparatorComponent={<View style={{ height: 5, width: "100%" }} />}

                ListFooterComponent={() => <View style={styles.loadMoreView}>
                    <Pressable style={styles.loadMorePressable} onPress={() => { getMoreRecipes(url, results) }}>
                        {
                            isLoading ?
                            <ActivityIndicator size="large" color="#777777" />
                            :                       
                            <Text style={styles.loadMoreText}>More Recipes</Text>
                        }

                    </Pressable>
                </View>}
            />
        </View>
    )
}