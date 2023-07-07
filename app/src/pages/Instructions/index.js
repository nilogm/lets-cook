import React, { useState } from "react";
import { View, Text, FlatList, Modal, Pressable, Image } from "react-native";
import { makeSearch, get_name, get_image } from "../../utils";
import Popup from "../../components/Popup";
import IngredientPopup from "../../components/IngredientPopup";
import styles from "./style";


export default function Instructions({ route }) {

	const [modalMessage, setModalMessage] = useState("");
	const [stepIngredients, setStepIngredients] = useState([]);

	const loadPopup = (item) => {
		var filtered_list = item.ingredients.filter(item => item.image !== "")
		setStepIngredients(filtered_list)
		setModalMessage(item.step);
	}

	const steps = route.params.recipe.analyzedInstructions[0].steps

	return (
		<View>
			<FlatList
				contentContainerStyle={styles.container}
				data={steps}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Pressable onPress={() => loadPopup(item)}>
						<Text style={styles.text}>
							<Text style={styles.textNumber}>{item.number}. </Text>
							<Text>{item.step}</Text>
						</Text>
					</Pressable>
				)}
				ItemSeparatorComponent={<View style={styles.line} />}
			/>

			<Modal
				animationType='slide'
				transparent={true}
				visible={modalMessage != ""}
				onRequestClose={() => { setModalMessage("") }}>

				<View style={styles.popup}>
					<Popup content={(
						<FlatList
							data={stepIngredients}
							style={{maxHeight: 300}}
							scrollEnabled={true}
							renderItem={({ item }) => (
								<View style={styles.headerContainer}>
									<Image source={{ uri: get_image(item.image) }} style={styles.image} />
									<Text style={styles.text}>{get_name(item.name)}</Text>
								</View>
							)}
							ItemSeparatorComponent={<View style={styles.line} />}
							ListHeaderComponent={
								<Text style={[styles.text, { marginBottom: 20 }]}>{modalMessage}</Text>
							}
						/>
					)} setPopupMessage={setModalMessage} />
				</View>

			</Modal>
		</View>
	);

}