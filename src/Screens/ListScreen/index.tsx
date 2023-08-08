import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import axios from 'axios';

import {useNavigation} from '@react-navigation/native';

import {addNewList} from '../../Services/Redux/github';
import {CustomTextInput} from './Components/TextInput';
import WebView from 'src/Screens/Webview/index';

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

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CustomTextInput />

        <TouchableOpacity onPress={() => getList()}>
          <Text>getList</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('WebView')}>
          <Text>Go to WebView</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ListScreen;
