import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import GitHubStackNavigation from './Services/StackNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <GitHubStackNavigation />
    </NavigationContainer>
  );
}

export default App;
