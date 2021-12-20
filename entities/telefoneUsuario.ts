import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne
} from "typeorm";
import Usuario from "./usuario";

@Entity({ name: "telefoneUsuario" })
export default class TelefoneUsuario extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idTelefone" })
  public idTelefone: number;

  @Column({ name: "descricao" })
  public descricao: string;

  @Column({ name: "valor" })
  public valor: string;

  @ManyToOne((type) => Usuario, { eager: false, cascade: true, onDelete: "CASCADE" })
  @JoinColumn({ name: "idUsuario", referencedColumnName: "idUsuario" })
  public usuario: Usuario;
}
