import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    textBox: {
        flex: 1,
        flexDirection: "row",
        marginLeft: 20,
    },
    unit: {
        fontSize: 20,
        fontWeight: 500,
        color: "orange",
    },
    text: {
        fontSize: 20,
        fontWeight: 300,
        flex: 1,
        flexWrap: "wrap", 
    },
    image: {
        height: 50,
        borderRadius: 50,
        aspectRatio: 1,
    },
});

export default styles