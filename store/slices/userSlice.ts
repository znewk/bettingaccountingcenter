import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, LoginPayload } from '@/schemas/user';

const initialState: User = {
  token: null,
  name: null,
  roles: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    login(state, action: PayloadAction<LoginPayload>) {
      state.token = action.payload.login;
      state.name = action.payload.password;
    },
    logout(state) {
      state.token = null;
      state.name = null;
    },
  },
});

export const { setToken, setName, logout } = userSlice.actions;
export default userSlice.reducer;
