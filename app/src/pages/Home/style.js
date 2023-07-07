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
    searchPressableContainer: {
        alignItems: 'center', 
        justifyContent: "center", 
        flex: 1 
    },
    searchPressableLoad: {
        aspectRatio: 1, 
        backgroundColor: "#FFAA33CC", 
        height: 100, 
        borderRadius: 50,
        paddingTop:33,
        paddingLeft: 5
    },
});

export default styles