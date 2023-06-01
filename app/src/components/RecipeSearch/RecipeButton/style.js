import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    image_container: {
        height: 120,
    },
    info_container: {
        backgroundColor: "white",
        paddingBottom: 10,
    },
    tag_container: {
        paddingHorizontal: 10,
        paddingVertical: 2,
    },
    image: {
        height: "100%",
        width: 150,
    },
    filter: {
        backgroundColor: "#00000040",
        height: "100%",
        width: "100%",
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
        color: "white",
        padding: 10,
        paddingLeft: 15,
        position: 'absolute',
    },
    information_title: {
        fontWeight: "bold",
        fontSize: 16,
        color: "white",
        padding: 10,
        position: 'absolute',
    },
    information_text: {
        fontSize: 16,
        position: 'absolute',
        bottom: 0,
        paddingLeft: 15,
        padding: 10,
        color: "white",
    },
    text: {
        paddingLeft: 15,
    },
    gradient: {
        height: 10
    }
});

export default styles