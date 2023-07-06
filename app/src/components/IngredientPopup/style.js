import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: "100%",
    },
    headerContainer: {
        alignItems: "center",
        flexDirection: "row",
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
        justifyContent: "space-between",
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
        color: 'orange',
        fontWeight: 'bold',
    },
    titleText: {
        fontWeight: 'bold',
    },
    line: {
        height: 1,
        margin: 10,
        width: "80%",
        backgroundColor: "#CCCCCC"
    }
});

export default styles