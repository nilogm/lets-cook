import { StyleSheet } from "react-native";
import { highlight_color } from "../../design";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 140,
        padding: 20,
        flexDirection: "row",
        gap: 15
    },
    headerContainer: {
        flex: 1,
        justifyContent: "center",
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 20
    },
    headerInformation: {
        fontStyle: "italic",
        fontSize: 16,
    },
    image: {
        aspectRatio: 1,
        height: "100%",
    },
    buttonsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 30,
    },
    buttonContainer: {
        gap: 6,
        alignItems: "center",
    },
    button: {
        justifyContent: 'center',
        aspectRatio: 1,
        height: 60,
        borderRadius: 50,
        backgroundColor: highlight_color,
    },
    icons: {
        alignSelf: "center",
        color: "white",
    },
    similarHeader: {
        fontSize: 24,
        marginBottom: 10,
    }
});

export default styles