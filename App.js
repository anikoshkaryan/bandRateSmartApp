import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import DashboardComponent from './components/auth/dashboard';
import SignInComponent from './components/sign_in/sign_in';
import SignUpComponent from './components/sign_up/sign_up';
import RecoveryAccountEmailComponent from './components/recovery_account_email/recovery_account_email';
import RecoveryAccountCodeComponent from './components/recovery_account_code/recovery_account_code';
import NewPasswordComponent from './components/new_password/new_password';
import CatalogComponent from './components/catalog/catalog';
import CardProductComponent from './components/card_product/card_product';

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

function SignUpScreen({ navigation }) {
    return (
        <SignUpComponent navigation={navigation}  />
    );
}
function RecoveryAccountEmailScreen({ navigation }) {
    return (
        <RecoveryAccountEmailComponent navigation={navigation}  />
    );
}


function RecoveryAccountCodeScreen({ navigation }) {
    return (
        <RecoveryAccountCodeComponent navigation={navigation}  />
    );
}

function NewPasswordScreen({ navigation }) {
    return (
        <NewPasswordComponent navigation={navigation}  />
    );
}

function CatalogScreen({ navigation }) {
    return (
        <CatalogComponent navigation={navigation}  />
    );
}

function CardProductScreen({ navigation }) {
    return (
        <CardProductComponent navigation={navigation}  />
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

            <Stack.Screen name="SignUp" component={SignUpScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="RecoveryAccountEmail" component={RecoveryAccountEmailScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="RecoveryAccountCode" component={RecoveryAccountCodeScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="NewPassword" component={NewPasswordScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />


            <Stack.Screen name="Catalog" component={CatalogScreen}
                          options={({route}) => ({
                              tabBarButton: () => null,
                              tabBarStyle: {display: 'none'},
                          })}
            />

            <Stack.Screen name="CardProduct" component={CardProductScreen}
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