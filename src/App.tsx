import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import GitHubStackNavigation from './Services/StackNavigation';
import store from './Services/Redux/store';

function App(): JSX.Element {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <NavigationContainer>
          <GitHubStackNavigation />
        </NavigationContainer>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
