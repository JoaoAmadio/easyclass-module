import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn
} from "typeorm";
import Disciplina from "./disciplina";
import ItemAtividade from "./itemAtividade";
import Usuario from "./usuario";
import Curso from "./curso";

@Entity({ name: "atividade" })
export default class Atividade extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idAtividade" })
  public idAtividade: number;

  @Column({ name: "tituloAtividade"})
  public tituloAtividade: string;

  @Column({ name: "subtituloAtividade", nullable: true})
  public subtituloAtividade: string;

  @Column({ name: "descricaoAtividade"})
  public descricaoAtividade: string;

  @Column({ name: "dataInicio", type: 'date'})
  public dataInicio: Date;

  @Column({ name: "dataEntrega", type: 'timestamp', nullable: true})
  public dataEntrega: Date;

  @Column({ name: "tempoLimite", type: "double", nullable: true})
  public tempoLimite: number;

  @Column({ name: "codigoAtividade"})
  public codigoAtividade: string;

  @Column({ name: "peso", type: "double", precision: 10, scale: 2})
  public peso: number;

  @Column({ name: "disponivel", default: false})
  public disponivel: boolean;

  @Column({ name: "permiteEdicao", default: true})
  public permiteEdicao: boolean;

  @ManyToOne((type) => Usuario, { eager: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idAutor", referencedColumnName: "idUsuario" })
  public autor: Usuario;

  @ManyToMany(() => Usuario, { eager: true, cascade: true })
  @JoinTable({name: "atividadeAlunosUsuario"})
  public alunos: Usuario[];

  @ManyToOne((type) => Disciplina, { eager: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idDisciplina", referencedColumnName: "idDisciplina" })
  public disciplina: Disciplina;
  
  @ManyToMany(() => ItemAtividade, { eager: true, cascade: true })
  @JoinTable({name: "atividadeItensAtividadeItemAtividade"})
  public itensAtividade: ItemAtividade[];

  @ManyToOne((type) => Curso, { eager: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idCurso", referencedColumnName: "idCurso" })
  public curso: Curso;
}
