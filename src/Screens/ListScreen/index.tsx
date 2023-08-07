import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function ListScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const test = useSelector(state => state.github);

  console.log(test, 'teste eu');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>ListScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListScreen;
