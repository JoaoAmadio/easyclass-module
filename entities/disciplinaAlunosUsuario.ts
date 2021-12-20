import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from "typeorm";
import Disciplina from "./disciplina";
import Usuario from "./usuario";

@Unique(["disciplinaIdDisciplina", "usuarioIdUsuario"])
@Entity({ name: "disciplinaAlunosUsuario" })
export default class DisciplinaUsuario extends BaseEntity {

    @PrimaryColumn()
    public disciplinaIdDisciplina: number;

    @PrimaryColumn()
    public usuarioIdUsuario: number;

    @ManyToOne(() => Disciplina, disciplina => disciplina.idDisciplina, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "disciplinaIdDisciplina" })
    public disciplina: Disciplina;

    @ManyToOne(() => Usuario, usuario => usuario.idUsuario, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "usuarioIdUsuario" })
    public usuario: Usuario;
}