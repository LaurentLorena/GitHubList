import React, {useEffect, useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import {selectRepo, setPage} from '../../Services/Redux/github';
import {CustomTextInput} from './Components/TextInput';
import {Container, TitleStyled} from './style';
import {Card} from './Components/Card/card';
import axios from 'axios';

function ListScreen() {
  const [requestData, setRequestData] = useState(null);
  const {termToSearch, page} = useSelector(state => state.github);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const title = 'Repositórios';

  const getRepos = async (toSearch = '', pg = 1) => {
    const url = `https://api.github.com/search/repositories?q=${toSearch}&per_page=10&page=${pg}`;
    const {data} = await axios.get(url);
    if (data) {
      return data;
    } else {
      console.log('show alert with error');
    }
  };

  const newRequest = async toSearch => {
    const data = await getRepos(toSearch);
    setRequestData(data.items);
  };

  const selectRepoHandle = url => {
    dispatch(selectRepo(url));
    navigation.navigate('WebView');
  };

  useEffect(() => {
    if (termToSearch !== '') {
      newRequest(termToSearch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termToSearch]);

  const renderItem = ({item}) => {
    return <Card data={item} onPress={() => selectRepoHandle(item.html_url)} />;
  };

  const loadMoreData = async () => {
    if (requestData) {
      const {items} = await getRepos(termToSearch, page + 1);
      setRequestData([...requestData, ...items]);
      dispatch(setPage(page + 1));
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <Container contentInsetAdjustmentBehavior="automatic">
        <TitleStyled>{title}</TitleStyled>
        <CustomTextInput />
        <TouchableOpacity onPress={() => navigation.navigate('WebView')} />
        {requestData && (
          <FlatList
            data={requestData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={loadMoreData}
            onEndReachedThreshold={0.3}
          />
        )}
      </Container>
    </SafeAreaView>
  );
}

export default ListScreen;
