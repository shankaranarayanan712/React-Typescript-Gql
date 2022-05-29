import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { searchReducer } from './search/reducers';

export const rootReducer = combineReducers({
  data: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);
