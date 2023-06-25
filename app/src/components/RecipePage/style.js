import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 40,
        marginLeft: 20,
        marginTop: -70
    },
    image: {
        width: "100%",
        height: 250
    },
    gradient: {
        flex: 1,
    },
    opt: {
        marginTop:310,
        flexDirection: "row",        
    },
    recipeOpt: {
        paddingTop: 10,
        marginHorizontal:15,
        width:200,
        alignItems: "center",       
        borderWidth: 0,
        backgroundColor: "#DFDFDFAA",
        height: 175,
        opacity:0.8
       
    },   
    campoText: {
        fontSize: 20,
        fontWeight: "bold",
        width:150
        
    },
    viewOpt: {        
        paddingLeft: 40,
        paddingRight: 20
    },
    image_container: {
        height: 200,
        paddingLeft: 20,
        paddingRight: 30
    },
    info_container: {
        height: "20%"
    },
    gradient2: {
        height: 10,
        width:200,
        marginLeft:15
    }

});

export default styles