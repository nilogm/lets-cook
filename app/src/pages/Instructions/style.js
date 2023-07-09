import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 300,
        textAlign: 'center',
    },
    textNumber: {
        fontWeight: 500,
        color: "orange"
    },
    textContainer: {
        width: "100%",
        flexDirection: "row",
    },
    popup: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    line: {
        height: 1,
        margin: 10,
        width: "80%",
        backgroundColor: "#CCCCCC",
        alignSelf: "center",
    }
});

export default styles