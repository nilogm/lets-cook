import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 10,
        backgroundColor: "white",
        alignContent: "center",
    },
    gradient: {
        height: 10,
        zIndex: 10
    },
    list: {
        height: "100%",
        paddingTop: 20,
        marginTop: -10
    },
    loadMorePressable: {
        alignContent: "center",
        padding: 10,
        marginTop: 10, 
        marginBottom: 40,
        borderRadius: 50,
        paddingHorizontal: 20,
    },
    loadMoreText: {
        color: "#777777",
        fontSize: 20,
    }

});

export default styles