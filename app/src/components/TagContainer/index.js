import { FlatList, View, Text } from 'react-native';
import TagIcon from '../TagIcon';
import styles from './style.js'
import { useState } from 'react';


export default function TagContainer({ tagList, enableCancelButton = false }) {

    const [tagList_, setList] = useState(
        [
            { name: "min cals: 247 kcal" },
            { name: "min prot: 10 g" },
            { name: "min prot: 10 g" },
            { name: "min prot: 10 g" },
            { name: "min prot: 10 g" },
        ]
    )

    const deleteItemByTag = (tag) => {
        // const filteredData = tagList.filter(item => item.tag !== tag)
        // setList(filteredData)
    }

    return (
        <FlatList
            columnWrapperStyle={{
                flexWrap: "wrap"
            }}
            numColumns={tagList_.length}
            data={tagList_}
            renderItem={({ item }) => (
                <TagIcon name={item.name} handler={deleteItemByTag} enableCancelButton={enableCancelButton} />
            )}
        />
    )
}