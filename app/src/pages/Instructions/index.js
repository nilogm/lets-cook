import React from "react";
import { View, Text, Pressable, FlatList, Image } from "react-native";
import styles from "./style";

function getIngredientsTotal(steps) {
    for (i=0; i<steps.length; i++) {
        let ingredientsArray = steps[i].ingredients
        for (j=0; j<ingredientsArray.length; j++) {      
             
            if (ingredientsPrint.includes({"name": ingredientsArray[j].name }, 0))        
                ingredientsPrint.push({"name": ingredientsArray[j].name}) 
        }                
    }     
}


export default function Instructions({ route, navigation }) {

	const steps = route.params.analyzedInstructions[0].steps
	
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
								<Text style={styles.text}>
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