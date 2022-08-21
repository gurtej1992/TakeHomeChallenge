import { Text, View, StyleSheet } from "react-native";
import { TextInput } from 'react-native-paper';
import Button from "../componets/Button";
import { GlobalStyles } from "../constants/style";

function HomeScreen() {
    return (<View style={styles.container}>
        <Text style={styles.heading}>Picture of the day:</Text>
        <Text style={styles.subheading}>Search for Astronomy: Picture of the day by date.</Text>
        <TextInput style={styles.input}
        fontFamily = "Inter-Regular"
        underlineColor = {GlobalStyles.colors.moonDust50}
        label="Start Date"
      
      />
        <TextInput style={styles.input}
        underlineColor = {GlobalStyles.colors.moonDust50}
        fontFamily = "Inter-Regular"
        label="End Date"
      />
      <Button>Search</Button>
      <Text style={styles.result}>Results(0):</Text>
      <Text style={styles.resunoResultlt}>No results found. Enter a start and end date.</Text>
    </View>);
}
const styles = StyleSheet.create({

    container: {
        flex : 1,
        width: "100%",
        padding: 20,
        backgroundColor: GlobalStyles.colors.moonDust0,
    },
    heading: {
        fontFamily: 'Inter-Semi-Bold', 
        fontSize: 18,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
      },
      subheading: {
        fontFamily: 'SF-Pro-Regular', 
        fontSize: 14,
        fontWeight:400,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
      },
      result: {
        marginTop: 20,
        fontFamily: 'Inter-Regular', 
        fontSize: 16,
        fontWeight:600,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust700,
      },
      noResult: {
        marginTop: 10,
        fontFamily: 'Inter-Regular', 
        fontSize: 16,
        fontWeight:400,
        marginBottom: 10,
        color: GlobalStyles.colors.moonDust900,
      },
    input: {
        borderBottomWidth: 0,
        backgroundColor: GlobalStyles.colors.moonDust50,
        marginBottom: 10,
    },
  });
export default HomeScreen;