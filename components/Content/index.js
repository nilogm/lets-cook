import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./style";
import GroupBox from "./GroupBox";

export default function Content(){

    const initialList = [
        {tag: "Grupo 1"}
    ]
    const [groupList, setGroups] = useState(initialList)

    return(
        <View style={styles.mainContainer}>
            <ScrollView style={styles.scrollContainer}
                contentContainerStyle={styles.containerStyle}
                data={groupList}
                renderItem={({item}) => (
                    <GroupBox name={item.tag}/>
                )}
            />
        </View>
    );
}