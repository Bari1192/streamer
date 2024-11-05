import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrationController } from './registration.controller';
import { DatabaseService } from './turso.service';


@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, RegistrationController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
