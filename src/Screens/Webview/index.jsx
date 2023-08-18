import React from 'react';

import {useSelector} from 'react-redux';

import {Container, StyledWebView} from './style';
import {useNavigation} from '@react-navigation/native';

function WebViewScreen() {
  const {url, name} = useSelector(state => state.github.selectedRepo);
  const navigation = useNavigation();

  navigation.setOptions({headerTitle: name});

  console.log(url);
  return (
    <Container>
      <StyledWebView source={{uri: url}} />
    </Container>
  );
}

export default WebViewScreen;
