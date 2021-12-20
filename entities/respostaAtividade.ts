import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import Atividade from "./atividade";
import RespostaAtividadeItem from "./respostaAtividadeItem";
import Usuario from "./usuario";

@Entity({ name: "respostaAtividade" })
export default class RespostaAtividade extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idRespostaAtividade" })
  public idRespostaAtividade: number;

  @Column({ name: "tempoInicio", type: 'timestamp', nullable: true})
  public tempoInicio: Date;

  @Column({ name: "observacao", nullable: true, type: 'text'})
  public observacao: string;

  @Column({ name: "tempoFim", type: 'timestamp', nullable: true})
  public tempoFim: Date;

  @Column({ name: "pesoTotal", nullable: true, type: 'decimal', precision: 10, scale: 2})
  public pesoTotal: number;

  @Column({ name: "emAtraso", nullable: true, default: false})
  public emAtraso: boolean;

  @ManyToOne((type) => Usuario, { eager: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idUsuario", referencedColumnName: "idUsuario" })
  public aluno: Usuario;

  @ManyToOne((type) => Atividade, { eager: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idAtividade", referencedColumnName: "idAtividade" })
  public atividade: Atividade;

  @OneToMany((type) => RespostaAtividadeItem, rai => rai.respostaAtividade, {eager: true, cascade: ["update", "insert"]})
  public respostaAtividadeItens: RespostaAtividadeItem[];
}
