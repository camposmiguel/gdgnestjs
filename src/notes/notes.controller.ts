import { Controller, Get, Param, Put, Body, Post, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NoteService } from './note.service';

@Controller('notes')
export class NotesController {

    constructor(private noteService: NoteService) { }

    @Get('/all')
    findAll(@Res() res) {
        this.noteService.findAll().then(listadoNotas => {
            res.status(HttpStatus.OK).json(listadoNotas);
        }).catch(error => {
            res.status(HttpStatus.FORBIDDEN).json(error);
        });
    }

    @Get(':id')
    findOne(@Param('id') idNota, @Res() res) {
        this.noteService.findOne(idNota).then(nota => {
            res.status(HttpStatus.OK).json(nota);
        }).catch(error => {
            res.status(HttpStatus.FORBIDDEN).json(error);
        });
    }

    @Post('/add')
    create(@Body() createNotaDto: CreateNoteDto, @Res() res) {
        this.noteService.createNote(createNotaDto).then(note => {
            res.status(HttpStatus.CREATED).json(note);
        }).catch(error => {
            res.status(HttpStatus.FORBIDDEN).json(error);
        });
    }

    @Put(':id')
    update(@Param('id') idNota, @Body() updateNotaDto: CreateNoteDto, @Res() res) {
        this.noteService.updateNote(idNota, updateNotaDto).then(nota => {
            res.status(HttpStatus.ACCEPTED).json(nota);
        }).catch(error => {
            res.status(HttpStatus.FORBIDDEN).json(error);
        });
    }

    @Delete(':id')
    remove(@Param('id') idNota) {
        return 'Eliminada la nota con idNota';
    }

}