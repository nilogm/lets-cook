import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    popup: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupView: {
        alignContent: "center",
        elevation: 5,
        padding: 20,
        gap: 10,
        backgroundColor: "white",
    },
    container: {
        backgroundColor: "white",
        alignItems: 'center',
        elevation: 3,
        padding: 20,
    },
    button: {
        padding: 10,
        marginTop: 20,
    },
    text: {
        textAlign: 'center',
        fontWeight: 300,
    },
});

export default styles