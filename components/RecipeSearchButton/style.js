import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        alignContent: "center",
        
    },
    containerSimilar: {
        paddingHorizontal: 10,
        alignContent: "center",
        width: "60%"        
    },
    image_container: {
        height: 100,
        flexDirection: "row",
    },
    info_container: {
        height: "100%",
        width: "70%",
        backgroundColor: "white",
    },
    tag_container: {
        width: "100%",
        backgroundColor: "#DDDDDD88",
    },
    taglist_container: {
        paddingTop: 2,
        paddingBottom: 7,
    },
    image: {
        height: "100%",
        width: "30%",
    },
    text: {
        paddingLeft: 15,
        paddingRight: 10,
    },
    title: {
        paddingTop: 10,
        fontSize: 20,
        color: "black",
    },
    information_text: {
        fontSize: 16,
        color: "gray",
        fontStyle: "italic",
    },
    tag_title:{
        paddingLeft: 10,
        fontSize: 16,
        color: "black",
    },
    gradient: {
        height: 10
    }
});

export default styles