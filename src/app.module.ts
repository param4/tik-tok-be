import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { Config } from '../config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Config.DB_HOST,
      port: Config.DB_PORT,
      username: Config.DB_USERNAME,
      password: Config.DB_PASSWORD,
      database: Config.DB_DATABASE,
      entities: [User],
      synchronize: !Config.isProd(),
      retryAttempts: 10,
      retryDelay: 3000,
      autoLoadEntities: true,
    }),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
