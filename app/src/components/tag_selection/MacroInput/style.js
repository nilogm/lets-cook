import { StyleSheet } from "react-native";
import { error_color } from "../../../design";

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        paddingBottom: 10
    },
    tagBox: {
        flexDirection: 'column',
        width: '80%',
    },
    autocompleteBox: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: 10
    },
    secondContainer: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    valueContainer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    valueBox: {
        height: 30,
        width: 50,
        paddingLeft: 0,
        textAlign: "center",
        fontSize: 12,
    },
    valuesText: {
        fontSize: 16,
    },
    button: {
        height: 40,
    },
    icons: {
        alignSelf: "center",
        color: "white",
    }
});

export default styles