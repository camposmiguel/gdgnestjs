import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceService } from './service.service';
import { NotesController } from './notes/notes.controller';
import { NotesController } from './notes/notes.controller';

@Module({
  imports: [],
  controllers: [AppController, NotesController],
  providers: [AppService, ServiceService],
})
export class AppModule {}
