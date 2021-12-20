import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable
} from "typeorm";
import Usuario from "./usuario";
import Disciplina from "./disciplina";

@Entity({ name: "curso" })
export default class Curso extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idCurso" })
  public idCurso: number;

  @Column({ name: "nomeCurso"})
  public nomeCurso: string;

  @ManyToMany(() => Disciplina, { eager: true, nullable: true })
  @JoinTable({name: 'disciplinasCurso'})
  public disciplinas: Disciplina[];

  @ManyToMany(() => Usuario, { eager: true, nullable: true })
  @JoinTable({name: "cursoAlunosUsuario"})
  public alunos: Usuario[];
}
