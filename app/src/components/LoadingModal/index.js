import { Text, View, Modal, ActivityIndicator, Pressable } from "react-native";
import styles from "./style";
import { text_style } from "../../design";

/**
 * Displays a modal that says "Loading...", with a loading animation. 
 * If isVisible == isLoading, modal loads and disappears, else, content is displayed.
 * @param {boolean} isVisible should modal be visible?
 * @param {boolean} isLoading is data is loading?
 * @param {function} toggleVisibility function handler that toggles modal visibility.
 * @param {*} content content to be displayed inside loading modal view when it finishes loading.
 * @param {Object} style custom style of the modal view. Optional.
 * @returns 
 */
export default function LoadingModal({ isVisible, isLoading, toggleVisibility = null, content, style = null }: {
    isVisible: boolean,
    isLoading: boolean,
    toggleVisibility: function,
}) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => { toggleVisibility(false) }}>

            <View style={[styles.popup, style]}>
                {
                    isLoading ?
                        <View style={styles.popupView}>
                            <Text style={[text_style, styles.text]}>Loading...</Text>
                            <ActivityIndicator size="large" color="gray" />
                        </View>
                        :
                        <View style={styles.container}>
                            {content}
                            <Pressable
                                style={styles.button}
                                onPress={() => toggleVisibility(false)}>
                                <Text style={[text_style, styles.text]}>OK</Text>
                            </Pressable>
                        </View>
                }
            </View>

        </Modal>
    );
}