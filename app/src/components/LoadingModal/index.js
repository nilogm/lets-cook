import { Text, View, Modal, ActivityIndicator, Pressable } from "react-native";
import styles from "./style";

/**
 * Displays a modal that says "Loading...", with a loading animation.
 * @param {boolean} isVisible toggles modal visibility.
 * @returns 
 */
export default function LoadingModal({ isVisible, isLoading, toggleVisibility = null, content, style }: {
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
                            <Text style={styles.text}>Loading...</Text>
                            <ActivityIndicator size="large" color="gray" />
                        </View>
                        :
                        <View style={styles.container}>
                            {content}
                            <Pressable
                                style={styles.button}
                                onPress={() => toggleVisibility(false)}>
                                <Text style={styles.text}>OK</Text>
                            </Pressable>
                        </View>
                }
            </View>

        </Modal>
    );
}