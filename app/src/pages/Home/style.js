import { StyleSheet } from "react-native";
import { highlight_color } from "../../design";

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        height: "100%",
        backgroundColor: "#0000000A"
    },
    title: {
        width: "80%",
        alignSelf: "center",
        fontSize: 56,
        fontWeight: 300,
        marginBottom: 20,
    },
    button: {
        aspectRatio: 1,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: highlight_color,
        alignSelf: "center",
    },
    icons: {
        alignSelf: "center",
        color: "white",
    }
});

export default styles