import { Text, View, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';

function HomeScreen() {
    return (<View>
        <Text>Picture of the day:</Text>
        <Text>Search for Astronomy: Picture of the day by date.</Text>
        <TextInput
        label="Start Date"
      
      />
        <TextInput
        label="End Date"
        style={styles.input}
      />
    </View>);
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default HomeScreen;