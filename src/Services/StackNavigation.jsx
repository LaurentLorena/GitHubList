import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WebView from '../Screens/Webview';
import ListScreen from '../Screens/ListScreen';

const Stack = createNativeStackNavigator();

const GitHubStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListScreen" component={ListScreen} />
      <Stack.Screen name="WebView" component={WebView} />
    </Stack.Navigator>
  );
};

export default GitHubStackNavigation;
