import { View, Button } from 'react-native';
import styles from './style.js';
import TagInput from '../../components/TagInput';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <TagInput inputText="Ingredient"></TagInput>
            <TagInput inputText="Macros"></TagInput>
            <Button title='Search' onPress={() => { navigation.navigate('Search') }}></Button>
        </View>
    )
}