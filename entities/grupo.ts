import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  Unique,
  ManyToMany,
  JoinTable
} from "typeorm";
import Permissao from "./permissao";

@Unique(["nomeGrupo"])
@Entity({ name: "grupo" })
class Grupo extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idGrupo" })
  public idGrupo: number;

  @Column({ name: "nomeGrupo" })
  public nomeGrupo: string;

  @Column({ name: "descricaoGrupo" })
  public descricao: string;

  @Column({ name: "ativo", default: true })
  public ativo: boolean;

  @ManyToMany((type) => Permissao, { eager: true, cascade: ["update", "insert"] })
  @JoinTable({ name: "grupoPermissoesPermissao"})
  public permissoes: Permissao[];
}

export default Grupo;
