import { Controller, Get } from '@nestjs/common';
import { AccessToken } from '../../data/httpClient/access-token';

@Controller('token')
export class AccessTokenController {

  constructor(private accessToken: AccessToken) {}

  @Get()
  public getToken() {
    return this.accessToken.get();
  }
}
