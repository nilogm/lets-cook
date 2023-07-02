import React from "react";
import { View, Text, Pressable, FlatList, Image } from "react-native";
import styles from "./style";




export default function Instructions({ route}) {

	const steps = route.params.recipe.analyzedInstructions[0].steps

	return (
		<View>
			<FlatList
				contentContainerStyle={styles.container}
				data={steps}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					return (
						<View style={styles.textContainer}>
							<Text>
								<Text style={styles.number}>{item.number}. </Text>
								<Text style={styles.text}> {item.step}
								</Text>
							</Text>
						</View>
					)
				}}
				ItemSeparatorComponent={<View style={{ height: 30, width: "100%" }} />}
			>			
			</FlatList>
		</View>
	);

}