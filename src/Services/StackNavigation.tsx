import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ParamListBase} from '@react-navigation/native';

import WebView from '../Webview';
import ListScreen from '../ListScreen';

export type RootStackParamList = {
  WebView: ParamListBase;
  ListScreen: ParamListBase;
};

const Stack = createNativeStackNavigator();

const GitHubStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="WebView" component={WebView} />
      <Stack.Screen name="ListScreen" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default GitHubStackNavigation;
