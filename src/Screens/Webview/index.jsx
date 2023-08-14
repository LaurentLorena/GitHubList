import React from 'react';

import {useSelector} from 'react-redux';

import {Container, StyledWebView} from './style';
import {useNavigation} from '@react-navigation/native';

function WebViewScreen() {
  const {url, name} = useSelector(state => state.github.selectedRepo);
  const navigation = useNavigation();

  navigation.setOptions({headerTitle: name});
  return (
    <Container>
      <StyledWebView source={{url}} />
    </Container>
  );
}

export default WebViewScreen;
