import {createSlice} from '@reduxjs/toolkit';

const github = createSlice({
  name: 'github',
  initialState: {
    gitHubList: [],
    selectedRepo: {},
  },
  reducers: {
    addToList: (state, action) => {
      const newGitHubList = [...state.gitHubList, ...action.payload.list];
      return {
        ...state,
        gitHubList: newGitHubList,
      };
    },
    addNewList: (state, action) => {
      const newGitHubList = action.payload.list;
      return {...state, gitHubList: newGitHubList};
    },
    selectRepo: (state, action) => {
      return {...state, selectedRepo: action.payload.selectRepo};
    },
  },
});

export const {addToList, addNewList, selectRepo} = github.actions;
export default github.reducer;
