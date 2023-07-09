import { StyleSheet } from "react-native";
import { highlight_color } from "../../design";

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        gap: 10
    },
    image: {
        height: 60,
        borderRadius: 50,
        aspectRatio: 1,
        marginBottom: 10,
    },
    unitContainer: {
        flexDirection: "row",
        alignSelf: "center",
        gap: 10,
    },
    button: {
        padding: 10,
    },
    text: {
        textAlign: 'center',
        fontWeight: 300,
    },
    messageText: {
        marginBottom: 10,
    },
    selectedText: {
        color: highlight_color,
        fontWeight: "bold"
    }
});

export default styles