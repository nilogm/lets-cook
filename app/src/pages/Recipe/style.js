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
        fontWeight: 300,
        fontSize: 16,
    },
    image: {
        aspectRatio: 1,
        height: "100%",
    },
    summaryContainer: {
        marginBottom: 20,
        marginTop: 0,
    },
    buttonsContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: 10,
    },
    buttonContainer: {
        gap: 6,
        alignItems: "center",
    },
    button: {
        aspectRatio: 1,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: "center",
    },
    icons: {
        alignSelf: "center",
        color: "white",
    },
});

export default styles