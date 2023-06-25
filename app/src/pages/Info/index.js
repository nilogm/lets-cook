import { View, Text, Pressable } from "react-native";




export default function Info() {
    return (
        <View style={{paddingLeft:20, paddingRight:20}}>
            <Text style={{fontSize:27, fontWeight:"bold", paddingTop:20, paddingLeft:50, color: "orange"}}>More About this Recipe!</Text>
            <Text style={{paddingTop:30, fontSize: 17 }}>
                Turkey Tomato Cheese Pizza might be just the Mediterranean recipe you are searching for. 
                For $1.84 per serving, this recipe covers 23% of your daily requirements of vitamins and minerals.  
            </Text>
            <Text style={{paddingTop:20, fontSize: 17}}>
                This hor d'oeuvre has 221 calories, 10g of protein, and 8g of fat per serving. This recipe serves 6. 
                Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today.                
            </Text>
            <Text style={{paddingTop:20, fontSize: 17}}>
                This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around 15 minutes. 
                All things considered, we decided this recipe deserves a spoonacular score of 97%. This score is outstanding.
                Users who liked this recipe also liked
            </Text>
        </View>
    );

}