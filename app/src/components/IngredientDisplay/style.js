import { StyleSheet } from "react-native";
import { highlight_color } from "../../design";

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
        color: highlight_color,
    },
    text: {
        fontSize: 20,
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