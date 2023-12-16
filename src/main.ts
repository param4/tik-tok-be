import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Config } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: Config.isProd(),
      whitelist: true,
      forbidNonWhitelisted: Config.ERROR_ON_NON_ALLOWED_KEYS,
    }),
  );
  await app.listen(3000);
}
bootstrap();
