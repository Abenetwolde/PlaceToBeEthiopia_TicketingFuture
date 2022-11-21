import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentScreen from './Screen/PaymentScreen';
import { Provider } from "react-redux";
import { store } from './redux/store';
import CheckoutScreen from './Screen/CheckoutScreen';
import Reward from './Screen/Reward';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <Provider store={store}>
  
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>{/* ... */}
   
   
          <Stack.Screen name="TicketScreen" component={PaymentScreen} options={{
          title: 'Ticket Screen',
          headerStyle: {
            backgroundColor: 'white',
            headerBackButtonMenuEnabled: 'true',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
           
           <Stack.Screen name="Checkout Screen" component={CheckoutScreen} options={{
          title: 'Checkout Screen',
          headerStyle: {
            backgroundColor: 'white',
            headerBackButtonMenuEnabled: 'true',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
             <Stack.Screen name="RewardScreen" component={Reward} options={{
          title: 'Reward Screen',
          headerStyle: {
            backgroundColor: 'white',
            headerBackButtonMenuEnabled: 'true',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
     
        {/*     <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings}  */}
      </Stack.Navigator>
    </NavigationContainer>

    </Provider>
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
