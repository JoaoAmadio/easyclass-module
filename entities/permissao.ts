import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity
} from "typeorm";

@Entity({ name: "permissao" })
class Permissao extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "idPermissao" })
  public idPermissao: number;

  @Column({ name: "valor" })
  public valor: string;

  @Column({ name: "ativo", default: true })
  public ativo: boolean;
}

export default Permissao;
