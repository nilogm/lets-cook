import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
    },
    textNumber: {
        color: "orange"
    },
    textContainer: {
        width: "100%",
        flexDirection: "row",
    },
    headerContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10
    },
    image: {
        height: 40,
        borderRadius: 50,
        aspectRatio: 1,
        marginBottom: 10,
    },
});

export default styles