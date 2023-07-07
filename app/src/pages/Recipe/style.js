import { StyleSheet } from "react-native";

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
    blocks: {
        padding: 20,
    },
    itemsContainer: {
        justifyContent: "center",
        gap: 20,
        width: "100%",
    },
    popup: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles