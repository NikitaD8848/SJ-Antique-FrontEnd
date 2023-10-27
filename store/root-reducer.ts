import { combineReducers } from '@reduxjs/toolkit';
import GetAccessTokenScreen from '../store/slices/auth/login-slice';
const appReducer = combineReducers({
  GetAccessTokenScreen: GetAccessTokenScreen,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'Login/LogoutSuccess') {
    state = undefined;

    state = {} as RootState;
  }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
