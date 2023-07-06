import { View, Text, Pressable, FlatList} from "react-native";
import styles from "./style";

export default function Info({ route, navigation }) {
    var summary = ""

    summary = route.params.recipe.summary;

    const renderSummary = () => {
        const sentences = summary.split('.')
    }

    const s = [
        {
            bold: false,
            sentence: 'Cannellini Bean and Asparagus Salad with Mushrooms requires approximately'
        },
        {
            bold: true,
            sentence: '45 minutes'
        },
        {
            bold: false,
            sentence: 'from start to finish.'
        }
    ]

    console.log(summary)
   
 
    return (
        <View style={styles.container}>
            <FlatList data={s} renderItem={({ item }) => (                
                item.bold ?
                <Text style={{fontWeight: 'bold'}}>{item.sentence}</Text>
                :
                <Text>{item.sentence}</Text>
            )}
            />            
        </View>
    );

}
/*
You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. 
This recipe serves 8 and costs $1.12 per serving. This hor doeuvre has <b>192 calories</b>, <b>7g of protein</b>, 
and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame 
seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. 
It is brought to you by fullbellysisters.blogspot.com. It is a good option if youre following a <b>gluten free, 
dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe 
takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. 
If you like this recipe, you might also like recipes such as 
<a href="https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601">Cauliflower, Brown Rice, and Vegetable Fried 
Rice</a>, 
<a href="https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897">Cauliflower, 
Brown Rice, and Vegetable Fried Rice</a>, and 
<a href="https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097">Cauliflower, 
Brown Rice, and Vegetable Fried Rice</a>.

*/