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
 
    return (
        <View style={styles.container}>
            <Text style = {{fontSize: 20}}>{info}</Text>            
        </View>
    );

}
