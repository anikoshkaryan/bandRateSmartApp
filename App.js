import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import DashboardComponent from './components/auth/dashboard';
import SignInComponent from './components/sign_in/sign_in';

function DashboardScreen({ navigation }) {
  return (
      <DashboardComponent navigation={navigation}  />
  );
}

function SignInScreen({ navigation }) {
    return (
        <SignInComponent navigation={navigation}  />
    );
}



export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName='Dashboard'
            screenOptions={{
              headerShown: false
            }}

        >


          <Stack.Screen name="Dashboard" component={DashboardScreen}
                        options={({route}) => ({
                          tabBarButton: () => null,
                          tabBarStyle: {display: 'none'},
                        })}
          />

            <Stack.Screen name="SignIn" component={SignInScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />





        </Stack.Navigator>



      </NavigationContainer>

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