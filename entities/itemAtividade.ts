import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { TipoItemAtividadeEnum } from "../enums/genero-enum copy";

@Entity({ name: "itemAtividade" })
export default class ItemAtividade extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idItemAtividade" })
  public idItemAtividade: number;

  @Column({ name: "sequencia"})
  public sequencia: number;

  @Column({ name: "tituloItem"})
  public tituloItem: string;

  @Column({ name: "proposta", nullable: true})
  public proposta: string;

  @Column({ name: "codigoItem"})
  public codigoItem: string;

  @Column({ name: "tipo", default: TipoItemAtividadeEnum.UNICA_ESCOLHA})
  public tipo: TipoItemAtividadeEnum;

  @Column({ name: "peso", type: "double", precision: 10, scale: 2, nullable: true})
  public peso: number;

  @Column({ name: "isSubitem", default: false})
  public isSubitem: boolean;

  @Column({ name: "autoCorrecao", default: false})
  public autoCorrecao: boolean;

  @Column({ name: "dataEntrega", nullable: true, type:'date'})
  public dataEntrega: Date;

  @Column({ name: "min", type: "double", precision: 10, scale: 2, nullable: true})
  public min: number;

  @Column({ name: "max", type: "double", precision: 10, scale: 2, nullable: true})
  public max: number;

  @Column({ name: "icone", nullable: true})
  public icone: string;

  @Column({ name: "valor", type: 'longtext', nullable: true})
  public valor: string;

  @ManyToOne(() => ItemAtividade, { eager: false, nullable: true, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idItemAtividadeOrigem", referencedColumnName: "idItemAtividade" })
  public itemAtividadeOrigem: ItemAtividade;

  @OneToMany(() => ItemAtividade, type => type.itemAtividadeOrigem, { eager: true, cascade: ["update", "insert"]})
  public subitensItemAtividade: ItemAtividade[];
}
