import { Controller, Get, Param, Put, Body, Post, Delete } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {

    @Get('/all')
    findAll() {
        return 'Devuelve JSON con listado de notas';
    }

    @Get(':id')
    findOne(@Param('id') idNota) {
        return 'Devuelve JSON de una nota seleccionada por ID';
    }

    @Post()
    create(@Body() createNotaDto: CreateNoteDto) {
        return 'Crea una nota con los datos del Body';
    }

    @Put(':id')
    update(@Param('id') idNota, @Body() updateNotaDto: CreateNoteDto) {
        return 'Actualiza los datos recibidos del Body de la nota con ID';
    }

    @Delete(':id')
    remove(@Param('id') idNota) {
        return 'Eliminada la nota con idNota';
    }

}