import { FlatList, View, Text } from 'react-native';
import { useState } from 'react';
import { tag } from '../../../types';
import { tag_args } from "../TagIcon"
import { set_params } from '../../../utils';
import TagIcon from '../TagIcon';
import styles from './style.js'

type container_args = {
    small: boolean,
    iconArgs: tag_args,
}

/**
 * Container for tag display. Different displays available by changing "args" parameter.
 * @param {Array<tag>} tagList list of tags to be displayed.
 * @param {container_args} args arguments that change component behaviour or style.
 * @returns 
 */
export default function TagContainer({ tagList, args }: {
    tagList: Array<tag>,
    args: container_args
}) {

    var default_args = {
        "small": false,
        "iconArgs" : null,
    };
    args = set_params(default_args, args);

    if (args.small && tagList.length > 4) {
        tagList.splice(4);
        tagList.push({ name: "..." });
    }

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
                <TagIcon tag={item} args={args.iconArgs} />
            )
            }
        />
    )
}