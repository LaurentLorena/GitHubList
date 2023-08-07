import {configureStore} from '@reduxjs/toolkit';
import github from './github';

export default configureStore({
  reducer: {
    github: github,
  },
});
