import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  gitHubList: [],
  selectedRepo: {},
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
      return {...state, selectedRepo: action.payload.selectRepo};
    },
  },
});

export const {addToList, addNewList, selectRepo} = github.actions;
export default github.reducer;
