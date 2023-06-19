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

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Recipe')}>
            <View style={styles.image_container}>
                <Image source={{ uri: image }} style={styles.image}/>
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