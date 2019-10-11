import { AxiosInstance } from 'axios';
import { Logger } from '@nestjs/common';

export class BaseHttpClient {
  protected readonly logger: Logger;
  protected httpClient: AxiosInstance;

  constructor(httpClient: AxiosInstance, logger: Logger) {
    this.httpClient = httpClient;
    this.logger = logger;
  }

  async post<T>(url: string, data?: any, headers?: any): Promise<T> {
      return (await this.httpClient.post<T>(url, data, headers ? {headers} : undefined)).data;
  }

  async get<T>(url: string, params?: any): Promise<T> {
      return (await this.httpClient.get<T>(url, {params})).data;
  }
}
