import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn
} from "typeorm";
import ItemAtividade from "./itemAtividade";
import RespostaAtividade from "./respostaAtividade";

@Entity({ name: "respostaAtividadeItem" })
export default class RespostaAtividadeItem extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idRespostaAtividadeItem" })
  public idRespostaAtividadeItem: number;

  @Column({ name: "valor", type: 'longtext', nullable: true})
  public valor: string;

  @Column({ name: "observacaoItem", nullable: true, type: 'text'})
  public observacaoItem: string;

  @Column({ name: "peso", nullable: true, type: 'decimal', precision: 10, scale: 2})
  public peso: number;

  @Column({ name: "dataRespostaItem", type: 'timestamp', nullable: true})
  public dataRespostaItem: Date;

  @ManyToOne((type) => ItemAtividade, { eager: true, onDelete: "CASCADE"})
  @JoinColumn({ name: "idItemAtividade", referencedColumnName: "idItemAtividade" })
  public itemAtividade: ItemAtividade;

  @ManyToOne((type) => RespostaAtividade, { eager: false, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idRespostaAtividade", referencedColumnName: "idRespostaAtividade" })
  public respostaAtividade: RespostaAtividade;
}
