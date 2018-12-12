import { ApiModelProperty } from '@nestjs/swagger';

export class CreateNoteDto {
    @ApiModelProperty()
    titulo: string;

    @ApiModelProperty()
    favorita: boolean;
}