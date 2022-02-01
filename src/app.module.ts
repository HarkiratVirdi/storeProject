import { Module, MiddlewareConsumer,NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadController } from './read/read.controller';
import { UpsertController } from './upsert/upsert.controller';
import { DeleteController } from './delete/delete.controller';
import LoggerMiddleware  from './middlewares/checkIfUserLogged';

@Module({
  imports: [],
  controllers: [AppController, ReadController, UpsertController, DeleteController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/');
  }
}