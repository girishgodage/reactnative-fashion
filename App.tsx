import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from './src/Authentication/Onboarding';
import { LoadAssets } from './src/components';


const fonts = {
  "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
  "SFProDisplay-Semibold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
};

const AuthenticationStack = createStackNavigator();


const AuthenticationNavigator = () => {
  return (    
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      </AuthenticationStack.Navigator>
    
  );
}


export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <AuthenticationNavigator />
    </LoadAssets>
  );
}