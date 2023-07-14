import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from "react-native";

/**
 * Returns KeyboardAvoiding screen (cancels keyboard input when clicked).
 * @param {*} children content to be displayed inside KeyboardAvoiding screen.
 * @returns 
 */
export default function KeyboardAvoid({ children }) {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}