import { Text, View, ImageBackground, Image, Pressable } from "react-native";
import styles from "./style";
import TagInput from "../TagInput";
import TagContainer from "../TagContainer";
import { LinearGradient } from 'expo-linear-gradient';

export default function RecipeSearchButton({ navigation, title, image }: { title: string, image: var }) {
    const tagList = [
        { name: "banana" },
        { name: "maçã" },
        { name: "aveia" },
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

            {/* <View style={styles.info_container}>
                <LinearGradient
                    colors={["#00000070", 'transparent']}
                    style={styles.gradient}
                />

                {<Text style={[styles.information_title, styles.text]}>Macros:</Text>
                <View style={styles.tag_container}>
                    <TagContainer tagList={tagList}></TagContainer>
                </View>

                <Text style={[styles.information_title, styles.text]}>Macros:</Text>
                <View style={styles.tag_container}>
                    <TagContainer tagList={tagList}></TagContainer>
                </View> }
            </View> */}

            <LinearGradient
                colors={["#00000020", 'transparent']}
                style={styles.gradient}
            />
        </Pressable>
    )
}