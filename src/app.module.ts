import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as path from 'path'
import * as ormOptions from './config/orm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
      ,envFilePath: [path.resolve(__dirname, '..', '.env')]
    }),
    TypeOrmModule.forRoot(ormOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
