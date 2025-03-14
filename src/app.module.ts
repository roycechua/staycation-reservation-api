import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TypeOrmModule from 'db/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
