import React from "react";
import { View, Text, Pressable, FlatList, Image } from "react-native";
import styles from "./style";

const analyzedInstructions = [
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
  },
];

export default function Instructions() {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.container}
        data={analyzedInstructions}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.textContainer}>
            <Text>
              <Text style={styles.number}>{item.number}. </Text>
              <Text style={styles.text}>{item.step}</Text>
            </Text>
            </View>
          )
        }}
        ItemSeparatorComponent={<View style={{ height: 30, width: "100%" }} />}
      >
      </FlatList>
    </View>
  );

}