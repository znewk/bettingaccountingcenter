import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { User, LoginPayload, UserResponse } from '@/schemas/user';
import { api } from '../../lib/api/AppApi';

const initialState: User = {
  token: null,
  name: null,
  roles: null,
  isLogged: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserResponse>) {
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.roles = action.payload.roles;
      state.isLogged = true;

      console.log("state.roles", state.roles)
    },
    logout(state) {
      state.token = null;
      state.name = null;
      state.roles = null;
      state.isLogged = false;
    },
  },
});

export const { setUserData, logout } = userSlice.actions;
export const login = (creds: LoginPayload) => async (dispatch: Dispatch<any>) => {
  
  try {
    // const response = await api.userApi.login(creds);
    // const userData: UserResponse = response.data;

    // Simulate async login process
    await new Promise(resolve => setTimeout(resolve, 1000));
    const userData: UserResponse = {
      name: "Ryan Gosling",
      token: 'token',
      roles: ['admin']
    };
    dispatch(setUserData(userData));
  } catch (error) {
    console.error('Ошибка входа:', error);
    dispatch(logout());
  }
};

export default userSlice.reducer;
