import { Text, View, Modal, ActivityIndicator } from "react-native";
import styles from "./style";

/**
 * Displays a modal that says "Loading...", with a loading animation.
 * @param {boolean} isVisible toggles modal visibility.
 * @returns 
 */
export default function LoadingModal({ isVisible }: { isVisible: boolean }) {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <View style={styles.popup}>
                <View style={styles.popupView}>
                    <Text style={styles.text}>Loading recipe...</Text>
                    <ActivityIndicator size="large" color="gray" />
                </View>
            </View>
        </Modal>
    );
}