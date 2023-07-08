import { FlatList, Pressable, View, Text, ActivityIndicator, Modal } from "react-native";
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import RecipeSearchButton from "../../components/RecipeSearchButton"
import TagIcon from "../../components/tag_selection/TagIcon";
import styles from "./style";
import { get_more_recipes } from "../../api";
import LoadingModal from "../../components/LoadingModal";



export default function RecipeSearch({ route, navigation }) {

    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [offset, setOffset] = useState(7);
    const [haveMoreSimilar, setHaveMoreSimilar] = useState(false)
    var haveMoreRecipes = true

    const data = route.params;

    var results = data.results;
    if (results.length < 7 ) 
        haveMoreRecipes = false
    
    const url = data.source;
    const ingredients = data.ingredientsUsed
    const macros = data.macrosUsed
    const diets = data.dietsUsed  

   

    const loadMore = async () => {
        setIsLoadingMore(true)
        setOffset(offset + 7)
        results = await get_more_recipes(url, results, offset)
        setIsLoadingMore(false)
        if (results.length < 7)   
            haveMoreRecipes = false
    }
        
       

    return (
        <View >
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
                contentContainerStyle={{ width: "90%", alignSelf: "center" }}
                renderItem={({ item, index }) => (
                    <RecipeSearchButton
                        navigation={navigation} recipe={item} setIsLoading={setIsLoading}
                    />)}
                ItemSeparatorComponent={<View style={{ height: 5, width: "100%" }} />}

                ListFooterComponent={() =>haveMoreRecipes && (<View style={styles.loadMoreView}>
                    <Pressable style={styles.loadMorePressable} onPress={loadMore}>
                        {
                            isLoadingMore ?
                                <ActivityIndicator size="large" color="#777777" />
                                :
                                <Text style={styles.loadMoreText}>More Recipes</Text>
                        }

                    </Pressable>
                </View>)}
            />

            <LoadingModal isVisible={isLoading} isLoading={true}/>
        </View>
    )
}