import { BaseApi } from './BaseApi';
import { VerifyPayload } from '@/schemas/verification';

class VerificationApi extends BaseApi {
  verify(creds: VerifyPayload) {
    return this.axios.post<any>('/verification', creds);
  }
}

export default new VerificationApi();
