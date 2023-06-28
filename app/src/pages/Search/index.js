import { FlatList, Pressable, View, Text } from "react-native";
import RecipeSearchButton from "../../components/RecipeSearchButton"
import TagIcon from "../../components/TagIcon";
import styles from "./style";
import { LinearGradient } from "expo-linear-gradient";

export default function RecipeSearch({ route, navigation }) {

    const results = route.params   
    console.log(route)

    const ingredients = [
        { name: "tomato" },
        { name: "cheese" }
    ];
    const macros = [
        { name: "maxFat", value: 10, unit: "g" },
        { name: "maxCholesterol", value: 2, unit: "g" }
    ];    
        

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
                style={{height:600}}
                vertical={true}
                scrollEnabled={true}
                data={results}
                contentContainerStyle={{ alignItems: "center" }}
                renderItem={({ item, index}) => (
                <RecipeSearchButton 
                    navigation={navigation} title={item.title} image={item.image} 
                    servings={item.servings} cookingTime={item.readyInMinutes} 
                    results={results} index={index}
                />)}
                ItemSeparatorComponent={<View style={{ height: 5, width: "100%" }} />}
            />     
            <View style={styles.loadMoreView}>
                <Pressable style= {styles.loadMorePressable} >
                    <Text style={styles.loadMoreText}>Load More</Text>               
                </Pressable>
            </View>     


        </View>
    )
}