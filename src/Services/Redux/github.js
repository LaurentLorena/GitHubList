import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  gitHubList: [],
  selectedRepo: '',
  termToSearch: '',
  page: 1,
};

const github = createSlice({
  name: 'github',
  initialState,
  reducers: {
    addToList: (state, action) => {
      const newGitHubList = [...state.gitHubList, ...action.payload];
      return {
        ...state,
        gitHubList: newGitHubList,
      };
    },
    addNewList: (state, action) => {
      return {...state, gitHubList: action.payload};
    },
    selectRepo: (state, action) => {
      return {...state, selectedRepo: action.payload};
    },
    setTermToSearch: (state, action) => {
      console.log('chamou com ==' + action.payload);
      return {...state, termToSearch: action.payload};
    },
    setPage: (state, action) => {
      return {...state, page: action.payload};
    },
  },
});

export const {addToList, addNewList, selectRepo, setTermToSearch, setPage} =
  github.actions;
export default github.reducer;
