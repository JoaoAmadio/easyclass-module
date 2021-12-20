import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  JoinColumn,
  Unique,
  CreateDateColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { GeneroEnum } from "../enums/genero-enum";
import Grupo from "./grupo";
import Permissao from "./permissao";
import TelefoneUsuario from "./telefoneUsuario";

@Unique(["email", "cpf", "ra"])
@Entity({ name: "usuario" })
export default class Usuario extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idUsuario" })
  public idUsuario: number;

  @Column({ name: "nomeUsuario" })
  public nomeUsuario: string;

  @Column({ name: "ultimoNomeUsuario" })
  public ultimoNome: string;

  @Column({ name: "email" })
  public email: string;

  @Column({ name: "senha", nullable: true })
  public senha: string;

  @Column({ name: "dataNascimento", nullable: true })
  public dataNascimento: Date;

  @CreateDateColumn({ name: "dataCadastro", nullable: false })
  public dataCadastro: Date;

  @Column({ name: "cpf", nullable: true })
  public cpf: string;

  @Column({ name: "ra" })
  public ra: string;

  @Column({ name: "ultimoLogin", nullable: true })
  public ultimoLogin: Date;

  @Column({ name: "genero", default: GeneroEnum.FEMININO, nullable: true })
  public genero: GeneroEnum;

  @ManyToOne((type) => Grupo, { eager: true, cascade: true, onDelete: "SET NULL" })
  @JoinColumn({ name: "idGrupo", referencedColumnName: "idGrupo" })
  public grupo: Grupo;

  @OneToMany(() => TelefoneUsuario, telefoneUsuario => telefoneUsuario.usuario, {
    eager: true,
    cascade: ["update", "insert"]
  })
  public telefones: TelefoneUsuario[];

  criptografaSenha() {
    this.senha = bcrypt.hashSync(this.senha, 8);
  }

  verificaSenha(senhaDescriptografada: string) {
    return bcrypt.compareSync(senhaDescriptografada, this.senha);
  }

  temPermissao(permissao: any) {

    if (permissao instanceof Permissao) {
      return !!this.grupo.permissoes.find(
        (item) => item.idPermissao === permissao.idPermissao && item.ativo
      );
    } else {
      return !!this.grupo.permissoes.find(
        (item) => item.valor == permissao && item.ativo
      );
    }
    
  }

  estaNoGrupo(grupo: Grupo) {
    return this.grupo.idGrupo === grupo.idGrupo;
  }
}
