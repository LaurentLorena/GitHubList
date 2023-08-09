import {ParamListBase} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {useSelector} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Container, StyledWebView} from './style';

type RootStackParamList = {
  ListScreen: ParamListBase;
};

type Props = StackScreenProps<RootStackParamList>;

function WebViewScreen({navigation}: Props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const test = useSelector(state => state.github);

  console.log(test, 'test webview');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Container>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Navegar para ListScreen</Text>
        </TouchableOpacity>
        <StyledWebView
          source={{uri: 'https://github.com/pu2nvu/svxlink-automake'}}
        />
      </Container>
    </SafeAreaView>
  );
}

export default WebViewScreen;
