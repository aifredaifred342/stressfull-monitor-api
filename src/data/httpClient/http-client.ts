import { Injectable, Logger } from '@nestjs/common';
import Axios from 'axios';

import { BaseHttpClient } from './base.http-client';

import { ConfigService } from '../../config/config.service';
import { ContextService } from '../../domain/services/context.service';

@Injectable()
export class HttpClient extends BaseHttpClient {

  constructor(
      private readonly contextService: ContextService,
      private readonly configService: ConfigService,
  ) {
    super(
        Axios.create({
          baseURL: configService.get('VIDEO_API_PATH'),
        }),
        new Logger(HttpClient.name),
    );

    this.httpClient.interceptors.request.use(request => {
      const token = contextService.get('token');
      this.logger.log(token);
      if (token) {
        request.params.accessToken = token;
      }
      return request;
    });
  }
}
