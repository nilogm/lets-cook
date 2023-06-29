import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxContainer: {
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingVertical: 5,
        paddingRight: 5,
        backgroundColor: "#ffdf00",
        borderRadius: 20,
        flexDirection: "row",
        margin: 3,
    },
    text: {
        color: "black",
        marginEnd: 5,
    },
    textFocus: {
        fontSize: 16,
    },
    textLesser: {
        fontSize: 12,
    },
    textLesserContent: {
        fontWeight: 300,
    }

});

export default styles