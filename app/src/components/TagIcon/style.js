import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    boxContainer: {
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        paddingVertical: 5,
        paddingRight: 6,
        backgroundColor: "#ffdf00",
        borderRadius: 20,
        flexDirection: "row",
        margin: 3,
    },
    textTitle: {
        fontSize: 10,
        color: "black",
        marginEnd: 5,
    },
    cancelButton: {
        backgroundColor: "#ffffffaa",
        paddingHorizontal: 4,
        paddingVertical: 1,
        borderRadius: 10,
    },
});

export default styles