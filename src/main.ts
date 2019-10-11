import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  app.setGlobalPrefix(config.get('CONTEXT_PATH'));
  await app.listen(8080);
}
bootstrap();
