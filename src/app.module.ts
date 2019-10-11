import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as httpContext from 'express-http-context';
import { APP_GUARD } from '@nestjs/core';
import { TokenGuard } from './api/guards/token.guard';
import { ContextService } from './domain/services/context.service';
import { ConfigService } from './config/config.service';
import { AppController } from './api/controllers/app.controller';

const PROVIDERS = [ContextService, ConfigService];

@Module({
  imports: [],
  controllers: [],
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
        .forRoutes(AppController);
  }
}
