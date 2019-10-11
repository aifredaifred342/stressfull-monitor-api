import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as httpContext from 'express-http-context';
import { APP_GUARD } from '@nestjs/core';
import { TokenGuard } from './api/guards/token.guard';
import { ContextService } from './domain/services/context.service';
import { ConfigService } from './config/config.service';
import { VideoController } from './api/controllers/video.controller';
import { AccessTokenController } from './api/controllers/access-token.controller';
import { VideoService } from './domain/services/video.service';
import { HttpClient } from './data/httpClient/http-client';
import { AccessToken } from './data/httpClient/access-token';

const PROVIDERS = [HttpClient, ContextService, ConfigService, VideoService, AccessToken];

@Module({
  imports: [],
  controllers: [VideoController, AccessTokenController],
  providers: [...PROVIDERS,
    {
      provide: APP_GUARD,
      useClass: TokenGuard,
    }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
        .apply(httpContext.middleware)
        .forRoutes(VideoController);
  }
}
