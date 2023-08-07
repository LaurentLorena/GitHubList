import React, {useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import axios from 'axios';

import {useNavigation} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {addNewList} from '../../Services/Redux/github';

function ListScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const test = useSelector(state => state.github);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log(test, 'teste eu listScreen');

  const getList = async () => {
    const {data} = await axios.get(
      'https://api.github.com/search/repositories?q=TERMO_DA_BUSCA&per_page=10',
    );
    if (data) {
      dispatch(addNewList(data.items));
    }
  };

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
        <View style={{borderWidth: 1, margin: 8, borderRadius: 8, padding: 8}}>
          <TextInput />
        </View>

        <TouchableOpacity onPress={() => getList()}>
          <Text>getList</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListScreen;
