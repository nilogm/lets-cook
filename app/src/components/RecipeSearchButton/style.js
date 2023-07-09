import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        paddingBottom: 0,
        alignContent: "center",
        backgroundColor: "#FAFAFA",
    },
    headerContainer: {
        width: "100%",
        paddingBottom: 10,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    image: {
        width: "25%",
        aspectRatio: 1,
    },
    infoContainer: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
    },
    information_text: {
        fontSize: 16,
        color: "gray",
        fontStyle: "italic",
    },
    tagContainer: {
        alignItems: "center",
        paddingBottom: 20,
    },
    gradient: {
        height: 10
    }
});

export default styles