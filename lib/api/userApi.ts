import { LoginPayload, UserResponse } from '@/schemas/user';
import { BaseApi } from './BaseApi';

class UserApi extends BaseApi {
  login(creds: LoginPayload) {
    return this.axios.post<UserResponse>('/api/auth/login', creds);
  }

//   async getUsers() {
//     try {
//       const response = await this.axios.get('/users');
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   }
}

export default new UserApi();
