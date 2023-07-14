import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    popup: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupView: {
        backgroundColor: "white",
        alignContent: "center",
        elevation: 5,
        padding: 20,
        gap: 10,
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
    },
});

export default styles