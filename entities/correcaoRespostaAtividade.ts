import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import CorrecaoRespostaAtividadeItem from "./correcaoRespostaAtividadeItem";
import RespostaAtividade from "./respostaAtividade";
import Usuario from "./usuario";

@Entity({ name: "correcaoRespostaAtividade" })
export default class CorrecaoRespostaAtividade extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idCorrecaoRespostaAtividade" })
  public idCorrecaoRespostaAtividade: number;

  @Column({ name: "pesoTotal", nullable: true, type: 'decimal', precision: 10, scale: 2})
  public pesoTotal: number;

  @Column({ name: "observacao", nullable: true, type: 'text'})
  public observacao: string;

  @Column({ name: "dataCorrecaoAtividade", type: 'timestamp', nullable: true})
  public dataCorrecaoAtividade: Date;

  @Column({ name: "dataEntregaCorrecao", type: 'timestamp', nullable: true})
  public dataEntregaCorrecao: Date;

  @ManyToOne((type) => RespostaAtividade, { eager: true, onDelete: "CASCADE"})
  @JoinColumn({ name: "idRespostaAtividade", referencedColumnName: "idRespostaAtividade" })
  public respostaAtividade: RespostaAtividade;

  @ManyToOne((type) => Usuario, { eager: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idAutor", referencedColumnName: "idUsuario" })
  public autor: Usuario;

  @OneToMany((type) => CorrecaoRespostaAtividadeItem, obj => obj.correcaoRespostaAtividade, {eager: true, cascade: true })
  public correcaoAtividadeItens: CorrecaoRespostaAtividadeItem[];
}
