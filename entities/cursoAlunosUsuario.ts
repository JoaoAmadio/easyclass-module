import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn, Unique } from "typeorm";
import Curso from "./curso";
import Usuario from "./usuario";

@Unique(["cursoIdCurso", "usuarioIdUsuario"])
@Entity({ name: "cursoAlunosUsuario" })
export default class CursoUsuario extends BaseEntity {
    
    @PrimaryColumn()
    public cursoIdCurso: number;

    @PrimaryColumn()
    public usuarioIdUsuario: number;

    @ManyToOne(() => Curso, curso => curso.idCurso, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "cursoIdCurso" })
    public curso: Curso;

    @ManyToOne(() => Usuario, usuario => usuario.idUsuario, { eager: true, cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: "usuarioIdUsuario" })
    public usuario: Usuario;
}