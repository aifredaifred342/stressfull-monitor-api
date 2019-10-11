import { Injectable } from '@nestjs/common';
import { HttpClient } from '../../data/httpClient/http-client';

@Injectable()
export class VideoService {

  constructor(
      private readonly httpClient: HttpClient,
  ) {
  }

  public async uploadVideo(file) {
    const formData = new FormData();
    formData.append('file', file);
    return await this.httpClient.post(`Accounts/f943b067-d120-4028-8f60-58ff6e6edc5b/Videos?name=prueba nestjs&privacy=Private&language=es-ES&indexingPreset=Default&streamingPreset=Default&sendSuccessEmail=true`, formData, {'content-type': 'multipart/form-data'});
  }

}
