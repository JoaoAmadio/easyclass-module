import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable, ManyToOne, JoinColumn
} from "typeorm";
import Usuario from "./usuario";

@Entity({ name: "disciplina" })
class Disciplina extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idDisciplina" })
  public idDisciplina: number;

  @Column({ name: "nomeDisciplina" })
  public nomeDisciplina: string;

  @ManyToOne((type) => Usuario, { eager: true, nullable: true, onDelete: "SET NULL" })
  @JoinColumn({ name: "idProfessor", referencedColumnName: "idUsuario" })
  public professor: Usuario;

  @ManyToMany(() => Usuario, { eager: true })
  @JoinTable({name: "disciplinaAlunosUsuario"})
  public alunos: Usuario[];
}

export default Disciplina;
