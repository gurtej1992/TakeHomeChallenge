import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import { GlobalStyles } from './constants/style';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Picture of the day' }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/SF-Pro.ttf'),
  });
  return (
    <View style={styles.container}>
    <StatusBar style="dark" />
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.Primary,
  },
});
