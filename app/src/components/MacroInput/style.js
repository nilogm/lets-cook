import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        paddingBottom: 20
    },
    tagBox: {
        justifyContent: "space-between",
        flexDirection: 'row',
        width: '80%',
        height: 50,
        marginVertical: 10,
    },
    inputBox: {
        backgroundColor: "#eeeeee",
        flexDirection: 'row',
        width: '75%',
        height: 50,
        paddingLeft: 20,
        fontSize: 20,
    },
    valueBox: {
        backgroundColor: "#aaaaee",
        flexDirection: 'row',
        width: '20%',
        height: 50,
        paddingLeft: 20,
        fontSize: 20,
    }
});

export default styles