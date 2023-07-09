import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from "react-native";

export default function KeyboardAvoid({ children }) {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}