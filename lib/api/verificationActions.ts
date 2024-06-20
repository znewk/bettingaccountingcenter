import { fetchWrapper } from './fetchWrapper';
import { VerifyPayload } from '@/schemas/verification';

export async function verify(creds: VerifyPayload): Promise<any> {
  return await fetchWrapper.post('/verification', creds);
}
