import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne
} from "typeorm";
import Instituicao from "./instituicao";

@Entity({ name: "telefoneInstituicao" })
export default class TelefoneInstituicao extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idTelefone" })
  public idTelefone: number;

  @Column({ name: "descricao" })
  public descricao: string;

  @Column({ name: "valor" })
  public valor: string;

  @ManyToOne((type) => Instituicao, { eager: false, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idInstituicao", referencedColumnName: "idInstituicao" })
  public instituicao: Instituicao;
}
