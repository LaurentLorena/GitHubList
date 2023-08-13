import React, {useEffect} from 'react';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import {addNewList, selectRepo} from '../../Services/Redux/github';
import {CustomTextInput} from './Components/TextInput';
import WebView from 'src/Screens/Webview/index';
import useGetList from '../../Services/Hook/useGetList';
import {Container, TitleStyled} from './style';
import Card from './Components/Card';

function ListScreen(): JSX.Element {
  const test = useSelector(state => state.github);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  console.log(test, 'teste eu listScreen');
  const apiUrl =
    'https://api.github.com/search/repositories?q=TERMO_DA_BUSCA&per_page=10';
  const {data, error, loading} = useGetList(apiUrl);

  useEffect(() => {
    // console.log('data ' + JSON.stringify(data?.items));
    console.log('data ' + error);
    console.log('data ' + loading);
  }, [data, error, loading]);

  const selectRepoHandle = url => {
    console.log(url);
    dispatch(selectRepo(url));
    navigation.navigate('WebView');
  };

  const renderItem = ({item}: {item: any}) => {
    // selectRepoHandle(item.html_url);
    return <Card data={item} onPress={() => selectRepoHandle(item.html_url)} />;
  };

  const loadMoreData = () => {
    // Fetch and append more data to your existing data array
    // Update the state with the new data
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <Container contentInsetAdjustmentBehavior="automatic">
        <TitleStyled>Repositórios</TitleStyled>
        <CustomTextInput />
        <TouchableOpacity onPress={() => navigation.navigate('WebView')} />
        {data && (
          <FlatList
            data={data.items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.1}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}

export default ListScreen;
