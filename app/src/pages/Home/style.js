import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#0000000A"
    },
    titleBox: {
        alignSelf: "center",
        width: "80%",
        marginBottom: 20,
    },
    title: {
        fontSize: 56,
        fontWeight: 300
    },
    inputBox: {
        backgroundColor: "#FaFaFa",
        flexDirection: 'row',
        height: 50,
        paddingLeft: 20,
        fontSize: 16
    },
    popup: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    popupText : {
        textAlign: "center",
        fontWeight: 300
    },
});

export default styles