import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApisModule } from './apis/apis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './config/database';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ApisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
