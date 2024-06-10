import { LoginPayload, UserResponse } from '@/schemas/user';
import { BaseApi } from './BaseApi';

class UserApi extends BaseApi {
  login(creds: LoginPayload) {
    return this.axios.post<UserResponse>('/api/auth/login', creds);
  }
}

export default new UserApi();
