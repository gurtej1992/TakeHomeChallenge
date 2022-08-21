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
      headerTitleAlign: 'center',
      headerShadowVisible: false, // applied here
      headerBackTitleVisible: false,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
       
      },
    }}initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Picture of the day' }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'SF-Pro-Regular': require('./assets/fonts/SFPRODISPLAYREGULAR.OTF'),
    'SF-Pro-Medium': require('./assets/fonts/SFPRODISPLAYMEDIUM.OTF'),
    'SF-Pro-Bold': require('./assets/fonts/SFPRODISPLAYBOLD.OTF'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.otf'),
    'Inter-Semi-Bold': require('./assets/fonts/Inter-SemiBold.otf'),
    'Inter-Bold': require('./assets/fonts/Inter-Bold.otf'),
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
    backgroundColor: GlobalStyles.colors.moonDust0,
  },
});
