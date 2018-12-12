import { Connection, Repository } from 'typeorm';
import { Note } from './note.entity';

export const noteProviders = [
  {
    provide: 'NoteRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Note),
    inject: ['DbConnectionToken'],
  },
];
