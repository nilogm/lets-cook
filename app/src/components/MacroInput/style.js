import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        paddingBottom: 10
    },
    tagBox: {
        justifyContent: "space-between",
        flexDirection: 'row',
        width: '80%',
        height: 50,
    },
    macroBox: {
        width: '75%',
    },
    valueBox: {
        flex: 1,
        marginLeft: 10,
    },
    parameterContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    parameterText:{
        fontSize: 16,
        fontWeight: 300,
    },
    parameterTextFocus:{
        fontWeight: "bold",
        color: "orange"
    }
});

export default styles