import { Injectable } from '@nestjs/common';
import * as httpContext from 'express-http-context';

@Injectable()
export class ContextService {

  get(key: string) {
    return httpContext.get(key);
  }

  set(key: string, value: any) {
    httpContext.set(key, value);
  }
}
