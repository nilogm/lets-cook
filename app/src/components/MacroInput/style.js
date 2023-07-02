import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        paddingBottom: 10
    },
    tagBox: {
        flexDirection: 'column',
        width: '80%',
        gap: 10,
        marginBottom: 10,
    },
    autocompleteBox: {
        width: "100%", 
        backgroundColor: "#FFFFFF", 
        padding: 10 
    },
    autocompleteText: { 
        fontWeight: 300
    },
    secondContainer: {
        alignSelf: "center",
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between"
    },
    valueContainer: {
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        gap: 6
    },
    valueBox: {
        height: 40,
        width: 50,
        paddingLeft: 0,
        textAlign: "center",
        fontSize: 12,
    },
    valuesText: {
        fontSize: 16,
        fontWeight: 300
    },
    sendButton: {
        aspectRatio: 1,
        height: 40,
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: "orange"
    }
});

export default styles