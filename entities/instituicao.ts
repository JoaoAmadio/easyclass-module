import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique,
  OneToMany
} from "typeorm";
import TelefoneInstituicao from "./telefoneInstituicao";

@Unique(["email", "cpfCnpj"])
@Entity({ name: "instituicao" })
export default class Instituicao extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idInstituicao" })
  public idInstituicao: number;

  @Column({ name: "razaoSocial" })
  public razaoSocial: string;

  @Column({ name: "nomeFantasia" })
  public nomeFantasia: string;

  @Column({ name: "cpfCnpj" })
  public cpfCnpj: string;

  @Column({ name: "email" })
  public email: string;
  
  @OneToMany(() => TelefoneInstituicao, telefoneUsuario => telefoneUsuario.instituicao, {
    eager: true,
    cascade: ["update", "insert"],
  })
  public telefones: TelefoneInstituicao[];
}
