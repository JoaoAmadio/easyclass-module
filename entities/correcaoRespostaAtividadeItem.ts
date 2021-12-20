import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import CorrecaoRespostaAtividade from "./correcaoRespostaAtividade";
import RespostaAtividadeItem from "./respostaAtividadeItem";

@Entity({ name: "correcaoRespostaAtividadeItem" })
export default class CorrecaoRespostaAtividadeItem extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idCorrecaoRespostaAtividadeItem" })
  public idCorrecaoRespostaAtividadeItem: number;

  @Column({ name: "peso", nullable: true, type: 'decimal', precision: 10, scale: 2})
  public peso: number;

  @Column({ name: "valor", nullable: true, type: 'longtext'})
  public valor: string;

  @Column({ name: "observacao", nullable: true, type: 'text'})
  public observacaoItem: string;

  @Column({ name: "dataCorrecaoItem", type: 'timestamp', nullable: true})
  public dataCorrecaoItem: Date;

  @ManyToOne((type) => RespostaAtividadeItem, { eager: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idRespostaAtividadeItem", referencedColumnName: "idRespostaAtividadeItem" })
  public respostaAtividadeItem: RespostaAtividadeItem;

  @ManyToOne((type) => CorrecaoRespostaAtividade, { eager: false, onDelete: "CASCADE" })
  @JoinColumn({ name: "idCorrecaoRespostaAtividade", referencedColumnName: "idCorrecaoRespostaAtividade" })
  public correcaoRespostaAtividade: CorrecaoRespostaAtividade;
}
