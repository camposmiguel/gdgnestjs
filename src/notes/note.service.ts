import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NoteService {

    constructor(
        @Inject('NoteRepositoryToken')
        private readonly noteRepository: Repository<Note>,
    ) { }

    async findAll(): Promise<Note[]> {
        return await this.noteRepository.find();
    }

    async findOne(idNota: number): Promise<Note> {
        return await this.noteRepository.findOne(idNota);
    }

    async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
        const newNote = new Note();
        newNote.titulo = createNoteDto.titulo;
        newNote.favorita = createNoteDto.favorita;
        return await this.noteRepository.save(newNote);
    }

    async updateNote(id: string, updateNoteDto: CreateNoteDto): Promise<Note> {
        const noteToUpdate = await this.noteRepository.findOne(id);
        noteToUpdate.titulo = updateNoteDto.titulo;
        noteToUpdate.favorita = updateNoteDto.favorita;
        return await this.noteRepository.save(noteToUpdate);
    }

}
