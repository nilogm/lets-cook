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
    inputBox: {
        flexDirection: 'row',
        height: 50,
        paddingLeft: 20,
        fontSize: 20
    },
    macroBox: {
        backgroundColor: "#FaFaFa",
        width: '75%',
    },
    valueBox: {
        backgroundColor: "#FAFAFA",
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