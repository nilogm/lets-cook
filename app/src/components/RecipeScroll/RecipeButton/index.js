import { ImageBackground, Text, View, Pressable } from "react-native";
import styles from "./style";

/**
 * Constrói um botão que representa a receita contida.
 * @param name nome da receita.
 * @param info informações curtas da receita.
 * @param mode para 1, mostrar as receitas no modo "destaque", caso contrário, modo "comum".
 * @returns 
 */
export default function RecipeButton({name, info, mode} : {name: string, info: string, mode: int}){

    const onPress = (link) => {
        console.log("Pressed \"" + name + "\"")
    }

    return (
        <ImageBackground style={mode == 1 ? styles.image_main : styles.image_lesser} source={require("../../../assets/biscoito.jpg")}>
            <Pressable style={styles.pressable} onPress={() => onPress(null)}>
                <Text style={styles.recipeName}>{name}</Text>
                <Text style={styles.recipeInfo}>{info}</Text>
            </Pressable>
        </ImageBackground>
    )
}