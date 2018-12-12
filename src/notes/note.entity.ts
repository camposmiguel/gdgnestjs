import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Note {
  @PrimaryGeneratedColumn('increment') id: number;
  @Column() titulo: string;
  @Column() favorita: boolean;
}