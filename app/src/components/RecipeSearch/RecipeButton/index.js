import { Text, View, ImageBackground, Pressable } from "react-native";
import styles from "./style";
import TagInput from "../../TagInput";
import TagContainer from "../../TagContainer";
import { LinearGradient } from 'expo-linear-gradient';

export default function RecipeButton({ navigation, title, image }: { title: string, image: var }) {
    const tagList = [
        { name: "banana" },
        { name: "maçã" },
        { name: "aveia" },
    ];

    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate('Recipe')}>
            <View style={styles.image_container}>
                <ImageBackground source={{ uri: image }} style={styles.image}>
                    <View style={styles.filter}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.information_text}>30' . 6 porções</Text>
                    </View>
                </ImageBackground>
            </View>


            <View style={styles.info_container}>
                <LinearGradient
                    colors={["#00000070", 'transparent']}
                    style={styles.gradient}
                />

                <Text style={[styles.information_title, styles.text]}>Macros:</Text>
                <View style={styles.tag_container}>
                    <TagContainer tagList={tagList}></TagContainer>
                </View>

                <Text style={[styles.information_title, styles.text]}>Macros:</Text>
                <View style={styles.tag_container}>
                    <TagContainer tagList={tagList}></TagContainer>
                </View>
            </View>

            <LinearGradient
                colors={["#00000020", 'transparent']}
                style={styles.gradient}
            />
        </Pressable >
    )
}