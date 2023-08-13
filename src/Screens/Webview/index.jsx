import React from 'react';

import {useSelector} from 'react-redux';

import {Container, StyledWebView} from './style';

function WebViewScreen() {
  const repo = useSelector(state => state.github.selectedRepo);

  console.log(repo, 'test webview');

  return (
    <Container>
      <StyledWebView source={{url: repo}} />
    </Container>
  );
}

export default WebViewScreen;
