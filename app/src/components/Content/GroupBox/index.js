import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./style";

export default function GroupBox({name}){

    return(
        <View style={styles.mainContainer}>
            <Image style={styles.imageStyle}></Image>
            <View>
                <Text>{name}</Text>
                <Text>0 receitas</Text>
            </View>
        </View>
    );
}