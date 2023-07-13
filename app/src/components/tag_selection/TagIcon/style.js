import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxContainer: {
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingVertical: 5,
        borderRadius: 20,
        flexDirection: "row",
        margin: 3,
        opacity: 0.6
    },
    enabled : {
        backgroundColor: "#33df33",
    },
    text: {
        color: "black",
        fontSize: 12,
    },
    textFocus: {
        fontSize: 16,
        fontWeight: "bold"
    },
    enabledText : {
        fontSize: 12,
        color: "black",
        fontWeight: "bold"
    }
});

export default styles