import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WebView from './Webview';
import ListScreen from './ListScreen';

const Stack = createNativeStackNavigator();

const GitHubStackNavigation = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="WebView" component={WebView} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
      </Stack.Navigator>
    )
}