import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "white",
        alignItems: 'center',
        elevation: 3,
        padding: 20,
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
    confirmButton: {
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontWeight: 300,
    },
    messageText:{
        marginBottom: 10,
    },
    selectedText:{
        color: 'orange',
        fontWeight: 'bold',
    },
    titleText: {
        fontWeight: 'bold',
    },
});

export default styles