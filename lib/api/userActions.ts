import { fetchWrapper } from './fetchWrapper';
import { LoginPayload, UserResponse } from '@/schemas/user';

export async function login(creds: LoginPayload): Promise<UserResponse> {
  return await fetchWrapper.post('/api/auth/login', creds);
}
