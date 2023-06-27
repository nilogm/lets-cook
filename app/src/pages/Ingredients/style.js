import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    ingredientContainer: {
        width: "100%",
        height: 70,
        flexDirection: "row",
        alignItems: "center",
    },
    textBox: {
        flex: 1,
        paddingLeft: 20,
    },
    unit: {
        fontSize: 20,
        fontWeight: "bold",
        color: "orange",
    },
    text: {
        fontSize: 20,
        fontWeight: 300,
    },
    image:{
        height: "100%",
        aspectRatio: 1
    }
});

export default styles