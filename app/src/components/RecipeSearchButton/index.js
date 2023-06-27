import { Text, View, ImageBackground, Image, Pressable } from "react-native";
import styles from "./style";
import TagInput from "../TagInput";
import TagContainer from "../TagContainer";
import { LinearGradient } from 'expo-linear-gradient';

export default function RecipeSearchButton({ navigation, title, image }: { title: string, image: var }) {
    const ingredientes = [
        { name: "maçã" },
        { name: "aveia" },
    ];
    const macros = [
        { name: "protein", value: 10, unit: "g" },
        { name: "fat", value: 2, unit: "g" },
    ];
    //Tomato Cheese Pizza might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$1.84 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This hor d'oeuvre has <b>221 calories</b>, <b>10g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/turkey-tomato-pizza-430522\">Turkey Tomato Pizza</a>, <a href=\"https://spoonacular.com/recipes/tomato-cheese-pizza-430570\">Tomato Cheese Pizza</a>, and <a href=\"https://spoonacular.com/recipes/cheese-tomato-pizza-696636\">Cheese & Tomato Pizza</a>.",
    const results =
    {
        "title": "Turkey Tomato Cheese Pizza",
        "readyInMinutes": 15,
        "servings": 6,
        "sourceUrl": "http://www.pinkwhen.com/turkey-tomato-cheese-pizza-recipe/",
        "image": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
        "summary": "Turkey Tomato Cheese Pizza might be just the <b>Mediterranean</b> recipe you are searching for. For <b>$1.84 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This hor d'oeuvre has <b>221 calories</b>, <b>10g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 6. Head to the store and pick up bell pepper, parsley, onion, and a few other things to make it today. This recipe from Pink When has 910 fans. From preparation to the plate, this recipe takes around <b>15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is outstanding. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/turkey-tomato-pizza-430522\">Turkey Tomato Pizza</a>, <a href=\"https://spoonacular.com/recipes/tomato-cheese-pizza-430570\">Tomato Cheese Pizza</a>, and <a href=\"https://spoonacular.com/recipes/cheese-tomato-pizza-696636\">Cheese & Tomato Pizza</a>.",
        "analyzedInstructions": [
            {
                name: "",
                steps: [
                    {
                        "number": 1,
                        "step": "Heat up your grill to 450 degrees.Start off with your whole wheat crust and spread the tomato sauce evenly over the top.",
                        "ingredients": [
                            {
                                "id": 11549,
                                "name": "tomato sauce",
                                "localizedName": "tomato sauce",
                                "image": "tomato-sauce-or-pasta-sauce.jpg"
                            },
                            {
                                "id": 0,
                                "name": "spread",
                                "localizedName": "spread",
                                "image": ""
                            },
                            {
                                "id": 0,
                                "name": "crust",
                                "localizedName": "crust",
                                "image": ""
                            },
                            {
                                "id": 0,
                                "name": "wheat",
                                "localizedName": "wheat",
                                "image": ""
                            }
                        ],
                        "equipment": [
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            }
                        ]
                    },
                    {
                        "number": 2,
                        "step": "Add a little cheese, bell pepper, onion, turkey and create a layer.Top with another layer of cheese, turkey, tomato, bell pepper, onion.",
                        "ingredients": [
                            {
                                "id": 10211821,
                                "name": "bell pepper",
                                "localizedName": "bell pepper",
                                "image": "bell-pepper-orange.png"
                            },
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            },
                            {
                                "id": 11529,
                                "name": "tomato",
                                "localizedName": "tomato",
                                "image": "tomato.png"
                            },
                            {
                                "id": 5165,
                                "name": "whole turkey",
                                "localizedName": "whole turkey",
                                "image": "turkey-raw-whole.jpg"
                            },
                            {
                                "id": 11282,
                                "name": "onion",
                                "localizedName": "onion",
                                "image": "brown-onion.png"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 3,
                        "step": "Add another layer of cheese, and then sprinkle with pepper.",
                        "ingredients": [
                            {
                                "id": 1041009,
                                "name": "cheese",
                                "localizedName": "cheese",
                                "image": "cheddar-cheese.png"
                            },
                            {
                                "id": 1002030,
                                "name": "pepper",
                                "localizedName": "pepper",
                                "image": "pepper.jpg"
                            }
                        ],
                        "equipment": []
                    },
                    {
                        "number": 4,
                        "step": "Place the pizza on a ceramic grill plate and place into the grill.Grill for 6-10 minutes, or until cooked as desired.Slice, and serve immediately.",
                        "ingredients": [],
                        "equipment": [
                            {
                                "id": 404706,
                                "name": "grill",
                                "localizedName": "grill",
                                "image": "grill.jpg"
                            }
                        ],
                        "length": {
                            "number": 10,
                            "unit": "minutes"
                        }
                    }
                ]
            }
        ],
        "nutrition": {
            "nutrients": [
                {
                    "name": "Fat",
                    "amount": 8.25438,
                    "unit": "g"
                },
                {
                    "name": "Cholesterol",
                    "amount": 15.3714,
                    "unit": "mg"
                }
            ]
        }
    };

    return (
        <Pressable style={styles.container} onPress={() => {
            navigation.navigate('Recipe', results);
        }}>
            <View style={styles.image_container}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.info_container}>
                    <Text style={[styles.text, styles.title]} numberOfLines={2}>{title}</Text>
                    <Text style={[styles.text, styles.information_text]}>30' . 6 porções</Text>
                </View>
            </View>

            <View style={styles.tag_container}>
                <LinearGradient
                    colors={["#00000030", 'transparent']}
                    style={styles.gradient}
                />

                <View style={styles.taglist_container}>
                    <TagContainer tagList={[...ingredientes, ...macros]}></TagContainer>
                </View>
            </View>

            <LinearGradient
                colors={["#00000020", 'transparent']}
                style={styles.gradient}
            />
        </Pressable>
    )
}