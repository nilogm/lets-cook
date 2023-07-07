import { View, Text, Pressable, FlatList} from "react-native";
import styles from "./style";

export default function Info({ route, navigation }) {
    var summary = ""
    summary = route.params.recipe.summary;
    var firstSplit = summary.split("<a")[0]
    var lastDot = -1
    for (i =0; i< firstSplit.length; i++) {
        if (firstSplit[i] == ".") {
            lastDot = i
        }
    }
    summary = firstSplit.substring(0, lastDot+1)
    console.log(summary)

    var info = []
    var focus = false
   
    const renderSummary = () => {
        var splitted = summary.split("<b>")
        for (i=0; i< splitted.length; i++) {            
            var splitted2 =  splitted[i].split("</b>")
            for (j=0; j<splitted2.length; j++) {

                info.push(focus ? <Text style={{fontWeight: 'bold', color: "orange"}}>{splitted2[j]}</Text> : <Text>{splitted2[j]}</Text>)
                focus = !focus
            }
        } 
    }
    
    
    renderSummary()

    // info.forEach( (element) => {
    //     lista.push(element.focus ?
    //         <Text style={{fontWeight: 'bold'}}>{element.sentence}</Text>
    //         :
    //         <Text>{element.sentence}</Text>)
    // })
   
 
    return (
        <View style={styles.container}>
            <Text style = {{fontSize: 20}}>{info}</Text>            
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