import React, { useState } from 'react';
import { View, Pressable, FlatList, Modal } from "react-native";
import { get_key, round_ml } from '../../utils';
import { substitute, ingredient } from '../../types';
import IngredientDisplay from '../../components/IngredientDisplay';
import IngredientPopup from '../../components/IngredientPopup';
import styles from "./style";


async function searchSubstitutes(id) {
    try {
        url = 'https://api.spoonacular.com/food/ingredients/' + id + '/substitutes' + get_key();

        const response = await fetch(url);
        const json = await response.json();

        return json;
    } catch (error) {
        console.error(error);
    }

    return null;
}

const makeSearch = async (id) => {
    const result = await searchSubstitutes(id);
    return result;
}


export default function Ingredients({ route }) {
    const recipe = route.params.recipe;
    const usPreference = route.params.isUS_measure
    var ingredients_ = recipe.extendedIngredients;

    const [modalVisible, setModalVisible] = useState(false);

    const [currentItem, setItem] = useState(null);

    const [substitutes, setSubstitutes] = useState([]);
    const [message, setMessage] = useState("");

    const [usUnitEnabled, toggleUnit] = useState(usPreference);

    ingredients_.forEach((element : ingredient) => {
        var found_usPreference = Object.keys(element).filter(item => item === "usPreference").length == 1;
        if (!found_usPreference)
            element.usPreference = usPreference
        element.measures.metric.amount = round_ml(element);
    })
    const [ingredients, setIngredients] = useState(ingredients_);

    const loadPopup = (item) => {
        (async () => {
            var subs = await makeSearch(item.id)

            setSubstitutes([]);
            if (subs.status == 'success') {
                let substituteList : Array<substitute> = [];
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
            setModalVisible(true);
        })()
    }

    const togglePreference = (state) => {
        toggleUnit(state);
        if (currentItem)
            currentItem.usPreference = state;
    }

    return (
        <View>
            <FlatList
                style={styles.container}
                contentContainerStyle={{paddingBottom: 50,}}
                data={ingredients}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable onPress={() => { loadPopup(item) }}>
                        <IngredientDisplay item={item} />
                    </Pressable>
                )}
                ItemSeparatorComponent={<View style={{ height: 1, margin: 10, width: "100%", backgroundColor: "#CCCCCC" }} />}
            />

            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(!modalVisible); }}>

                <View style={styles.centeredView}>
                    <IngredientPopup
                        ingredient={currentItem}
                        substitutes={substitutes}
                        message={message}
                        togglePreference={togglePreference}
                        setModalVisible={setModalVisible} />
                </View>

            </Modal>
        </View>

    );

}