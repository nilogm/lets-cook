import { FlatList, Pressable, View, Text } from "react-native";
import RecipeSearchButton from "../../components/RecipeSearchButton"
import TagIcon from "../../components/TagIcon";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";



const getMoreRecipes = async (url, results) => {
    try {
          

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
};

export default function RecipeSearch({ route, navigation }) {

    const data = route.params;

    const results = data.results;
    const url = data.source;

    ingredients = data.ingredientsUsed
    macros = data.macrosUsed

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
                style={{height:700}}     
                vertical={true}
                scrollEnabled={true}
                data={results}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item, index }) => (
                    <RecipeSearchButton
                        navigation={navigation} data={item}
                        index={index} similar={false}
                    />)}
                ItemSeparatorComponent={<View style={{ height: 5, width: "100%" }} />}

                ListFooterComponent= { () => <View style={styles.loadMoreView}>
                                                <Pressable style={styles.loadMorePressable}  onPress={()=>{getMoreRecipes(url, results)}}>
                                                    <Text style={styles.loadMoreText}>Load More</Text>
                                                </Pressable>
                                            </View>}
            />
        </View>
    )
}