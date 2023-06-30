import { FlatList, View, Text } from 'react-native';
import TagIcon from '../TagIcon';
import styles from './style.js'
import { useState } from 'react';


export default function TagContainer({ tagList, cancelHandler = null, enableCancelButton = false } : {tagList : Array, cancelHandler : function}) {

    var longTagList = [...tagList.slice(0, 4), {name: "..."}];

    return (
        <FlatList
            key={longTagList.length}
            columnWrapperStyle={
                longTagList.length > 1 && styles.items
            }
            style={styles.container}
            numColumns={longTagList.length}
            data={longTagList}
            renderItem={({ item }) => (
                <TagIcon tag={item} cancelHandler={cancelHandler} enableCancelButton={enableCancelButton} />
            )
            }
        />
    )
}