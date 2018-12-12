import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './notes/notes.controller';
import { NoteService } from './notes/note.service';
import { DatabaseModule } from './database/database.module';
import { noteProviders } from 'notes/note.providers';

@Module({
  imports: [DatabaseModule, DatabaseModule],
  controllers: [AppController, NotesController],
  providers: [AppService, NoteService, ...noteProviders],
})
export class AppModule {}
