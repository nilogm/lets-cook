import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#AFAFAFA0',
        height: 180,
        padding: 20,
        flexDirection: "row"
    },
    headerContainer:{
        marginLeft: 20,
        flex: 1,
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 24
    },
    headerInformation: {
        fontStyle: "italic",
        fontSize: 16,
    },
    image: {
        aspectRatio: 1,
        height: "100%",
    },
    gradient: {
        flex: 1,
    },
    blocks: {
        padding: 20,
        flexDirection: "row",
    },
});

export default styles