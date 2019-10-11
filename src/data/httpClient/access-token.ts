import { Injectable } from '@nestjs/common';
import { HttpClient } from './http-client';

const API_ACCESS_TOKEN = 'https://api.videoindexer.ai/auth/trial/Accounts/f943b067-d120-4028-8f60-58ff6e6edc5b/AccessToken?allowEdit=true';

@Injectable()
export class AccessToken {

  constructor(private readonly httpClient: HttpClient) {}

  public async get() {
    return await this.httpClient.get(API_ACCESS_TOKEN);
  }

}
