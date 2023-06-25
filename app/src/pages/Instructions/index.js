import { View, Text, Pressable, FlatList, Image } from "react-native";



const analyzedInstructions = 
[
        {
          number: 1,
          step: "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top.",
          ingredients: [
            {
              id: 11549,
              name: "tomato sauce",
              localizedName: "tomato sauce",
              image: "tomato-sauce-or-pasta-sauce.jpg"
            },
            {
              id: 0,
              name: "spread",
              localizedName: "spread",
              image: ""
            },
            {
              id: 0,
              name: "crust",
              localizedName: "crust",
              image: ""
            },
            {
              id: 0,
              name: "wheat",
              localizedName: "wheat",
              image: ""
            }
          ],
          equipment: [
            {
              id: 404706,
              name: "grill",
              localizedName: "grill",
              image: "grill.jpg"
            }
          ]
        },
        {
          number: 2,
          step: "Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion.",
          ingredients: [
            {
              id: 10211821,
              name: "bell pepper",
              localizedName: "bell pepper",
              image: "bell-pepper-orange.png"
            },
            {
              id: 1041009,
              name: "cheese",
              localizedName: "cheese",
              image: "cheddar-cheese.png"
            },
            {
              id: 11529,
              name: "tomato",
              localizedName: "tomato",
              image: "tomato.png"
            },
            {
              id: 5165,
              name: "whole turkey",
              localizedName: "whole turkey",
              image: "turkey-raw-whole.jpg"
            },
            {
              id: 11282,
              name: "onion",
              localizedName: "onion",
              image: "brown-onion.png"
            }
          ],
          equipment: []
        },
        {
          number: 3,
          step: "Add another layer of cheese, and then sprinkle with pepper.",
          "ingredients": [
            {
              id: 1041009,
              name: "cheese",
              localizedName: "cheese",
              image: "cheddar-cheese.png"
            },
            {
              id: 1002030,
              name: "pepper",
              localizedName: "pepper",
              image: "pepper.jpg"
            }
          ],
          equipment: []
        },
        {
          number: 4,
          step: "Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately.",
          ingredients: [],
          equipment: [
            {
              id: 404706,
              name: "grill",
              localizedName: "grill",
              image: "grill.jpg"
            }
          ],
          length: {
            number: 10,
            unit: "minutes"
          }
        }
]

export default function Instuctions() {
    
    return (
        <View>
            <Image source={require("../../assets/instructions.png")} style={{height:50, width:50}}></Image>
            <Text style={{fontSize:27, fontWeight:"bold", paddingTop:20, paddingLeft:50, color: "orange"}}>Step-by-Step Instuctions</Text>
            <FlatList
                style={{height:"100%"}}            
                data={analyzedInstructions}
                scrollEnabled={true}
                renderItem={({ item }) => {
                    return (
                        <View style={{width: "100%", flexDirection: "row", paddingLeft:30, paddingTop:20}}>                            
                            <Text style={{paddingLeft:5, paddingTop:25, fontSize:20, paddingRight: 10}}>{item.number} - {item.step}</Text>                      

                            
                        </View>
                    )
                }}
            
            
            >   

            </FlatList>
        </View>
    );

}