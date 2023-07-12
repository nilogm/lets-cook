import { StyleSheet } from "react-native";
import { highlight_color } from "../../design";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        paddingBottom: 10,
        backgroundColor: highlight_color,
        alignContent: "center",
    },
    gradient: {
        height: 10,
        zIndex: 10
    },
    list: {
        height: "90%",
        paddingTop: 20,
        marginVertical: -10
    },
    loadMorePressable: {
        alignContent: "center",
        padding: 10,
        marginTop: 10,
        marginBottom: 40,
        borderRadius: 50,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 20,
        color: "gray",
        alignSelf: "center"
    }
});

export default styles