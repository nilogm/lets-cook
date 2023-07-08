import React, { useState } from "react";
import { View, Text, FlatList, Modal, Pressable, Image } from "react-native";
import { makeSearch, get_name, get_image } from "../../utils";
import IngredientPopup from "../../components/IngredientPopup";
import LoadingModal from "../../components/LoadingModal";
import styles from "./style";
import { popup_style } from "../../design";


export default function Instructions({ route }) {

	const [showModal, toggleModal] = useState(false);

	const [step, setStep] = useState("");
	const [stepIngredients, setStepIngredients] = useState([]);

	const loadPopup = (item) => {
		var filtered_list = item.ingredients.filter(item => item.image !== "")
		setStepIngredients(filtered_list)
		setStep(item.step);
		toggleModal(true);
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

			<LoadingModal
				isVisible={showModal}
				toggleVisibility={toggleModal}
				isLoading={false}
				content={(
					<FlatList
						data={stepIngredients}
						style={popup_style}
						scrollEnabled={true}
						renderItem={({ item }) => (
							<View style={styles.headerContainer}>
								<Image source={{ uri: get_image(item.image) }} style={styles.image} />
								<Text style={styles.text}>{get_name(item.name)}</Text>
							</View>
						)}
						ItemSeparatorComponent={<View style={styles.line} />}
						ListHeaderComponent={
							<Text style={[styles.text, { marginBottom: 20 }]}>{step}</Text>
						}
					/>
				)}
				style={{ width: "100%", alignSelf: "center" }}
			/>
		</View>
	);

}