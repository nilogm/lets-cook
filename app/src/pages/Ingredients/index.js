import React, { useState } from 'react';
import { View, Pressable, FlatList } from "react-native";
import { round_amount } from '../../utils';
import { make_search } from '../../api';
import { substitute, ingredient } from '../../types';
import IngredientDisplay from '../../components/IngredientDisplay';
import IngredientPopup from '../../components/IngredientPopup';
import LoadingModal from '../../components/LoadingModal';
import styles from "./style";
import { Line } from '../../components/assets';


export default function Ingredients({ route }) {
    const recipe = route.params.recipe;
    var ingredients_ = recipe.extendedIngredients;

    const [showModal, toggleModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [currentItem, setItem] = useState(null);

    const [substitutes, setSubstitutes] = useState([]);
    const [message, setMessage] = useState("");

    ingredients_.forEach((element: ingredient) => {
        var found_usPreference = Object.keys(element).filter(item => item === "usPreference").length == 1;
        if (!found_usPreference)
            element.usPreference = false
        element.measures.metric.amount = round_amount(element.measures.metric.amount);
        element.measures.us.amount = round_amount(element.measures.us.amount);
        console.log(element.measures.us.amount);
    })
    const [ingredients, setIngredients] = useState(ingredients_);

    const loadPopup = (item) => {
        (async () => {
            toggleModal(true)
            setIsLoading(true)
            var subs = await make_search(item.id)

            setSubstitutes([]);
            if (subs.status == 'success') {
                let substituteList: Array<substitute> = [];
                subs.substitutes.forEach((element: string) => {
                    var split_str = (element.split(' = '));
                    substituteList = [...substituteList, {
                        comparison: split_str[0],
                        substitute: split_str[1]
                    }]
                })
                setSubstitutes(substituteList)
            }

            setItem(item);

            setMessage(subs.message);
            setIsLoading(false)
        })()
    }

    const togglePreference = (state) => {
        if (currentItem)
            currentItem.usPreference = state;
    }

    return (
        <View>
            <FlatList
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 50 }}
                data={ingredients}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable onPress={() => { loadPopup(item) }}>
                        <IngredientDisplay item={item} />
                    </Pressable>
                )}
                ItemSeparatorComponent={<Line/>}
            />

            <LoadingModal
                isVisible={showModal}
                toggleVisibility={toggleModal}
                isLoading={isLoading}
                content={(
                    <IngredientPopup
                        ingredient={currentItem}
                        substitutes={substitutes}
                        message={message}
                        togglePreference={togglePreference} />
                )}
                style={{ width: "100%", alignSelf: "center" }}
            />
        </View>

    );

}