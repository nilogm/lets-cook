import { FlatList, View, Text } from 'react-native';
import TagIcon from '../TagIcon';
import styles from './style.js'
import { useState } from 'react';


export default function TagContainer({ tagList, cancelHandler = null, enableCancelButton = false }) {

    return (
        <FlatList
            key={tagList.length}
            columnWrapperStyle={
                tagList.length > 1 && styles.items
            }
            style={styles.container}
            numColumns={tagList.length}
            data={tagList}
            renderItem={({ item }) => (
                <TagIcon tag={item} cancelHandler={cancelHandler} enableCancelButton={enableCancelButton} />
            )
            }
        />
    )
}