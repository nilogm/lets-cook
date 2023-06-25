import { View, Text, Pressable, Button, FlatList, Image } from "react-native";


const data = [
    {
        id: 0,
        image: "https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg",
        name: "Butter",
        amount: 100,
        unit: "g",
        replaceble: true
    },
    {
        id: 1,
        image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg",
        name: "Apples",
        amount: 4,
        unit: "",
        replaceble: false
    },
    {
        id: 2,
        image: "https://spoonacular.com/cdn/ingredients_100x100/apricot-jam.jpg",
        name: "Apricot preserves",
        amount: 3,
        unit: "",
        replaceable: true
    }
]


export default function Ingredients() {

    return (
        <View style={{ paddingTop: 10 }}>
            <Text style={{fontSize:27, fontWeight:"bold", paddingTop:20, paddingLeft:50, color: "orange", paddingVertical:20}}>Ingredients</Text>
            <FlatList    
                style={{height:"100%"}}            
                data={data}
                scrollEnabled={true}
                renderItem={({ item }) => {
                    return (
                        <View style={{width: "100%", flexDirection: "row", paddingLeft:30, paddingTop:20}}>
                            <Image source={{uri:item.image}} style={{height:70, width: 70, }} />
                            <Text style={{paddingLeft:20, paddingTop:25, fontSize:20}}>{item.name}  -  {item.amount} {item.unit}</Text>
                            
                        </View>
                    )
                }}
            />
       
        </View>

    );

}