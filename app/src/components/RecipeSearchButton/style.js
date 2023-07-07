import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10,
        alignContent: "center",
        backgroundColor: "#FAFAFA",
    },
    headerContainer: {
        width: "80%",
        height: 100,
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        gap: 10,
    },
    image: {
        width: "30%",
        aspectRatio: 1,
    },
    infoContainer: {
        width: "100%",
    },
    text: {
        fontWeight: 300,
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