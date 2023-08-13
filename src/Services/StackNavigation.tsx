import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import type {ParamListBase} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

import WebView from '../Screens/Webview';
import ListScreen from '../Screens/ListScreen';

export type RootStackParamList = {
  ListScreen: ParamListBase;
  WebView: ParamListBase;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

const GitHubStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="ListScreen"
        component={ListScreen}
      />
      <Stack.Screen name="WebView" component={WebView} />
    </Stack.Navigator>
  );
};

export default GitHubStackNavigation;
