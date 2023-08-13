import React from 'react';

import {SafeAreaView, useColorScheme} from 'react-native';

import {useSelector} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Container, StyledWebView} from './style';

function WebViewScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const test = useSelector(state => state.github.selectedRepo);

  console.log(test, 'test webview');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Container>
        <StyledWebView source={{uri: test}} />
      </Container>
    </SafeAreaView>
  );
}

export default WebViewScreen;
