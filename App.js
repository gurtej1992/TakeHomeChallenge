import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        
      }} initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'Picture of the day' }} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style="dark" />
    <NavigationContainer>
      <MyStack></MyStack>
    </NavigationContainer>
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
