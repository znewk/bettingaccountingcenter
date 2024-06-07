import { BaseApi } from './BaseApi';

class UserApi extends BaseApi {
  login(user: string) {
    return this.axios.post<string>('/api/auth/login', user);
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
