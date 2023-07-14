import { StyleSheet } from "react-native";
import { highlight_color } from "../../design";


const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        height: "100%",
    },
    title: {
        width: "80%",
        alignSelf: "center",
        fontSize: 56,
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