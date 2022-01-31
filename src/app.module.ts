import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReadController } from './read/read.controller';
import { UpsertController } from './upsert/upsert.controller';
import { DeleteController } from './delete/delete.controller';

@Module({
  imports: [],
  controllers: [AppController, ReadController, UpsertController, DeleteController],
  providers: [AppService],
})
export class AppModule {}
