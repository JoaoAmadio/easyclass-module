import { BaseEntity } from "typeorm";
import Curso from "./curso";
import Usuario from "./usuario";
export default class CursoUsuario extends BaseEntity {
    cursoIdCurso: number;
    usuarioIdUsuario: number;
    curso: Curso;
    usuario: Usuario;
}
//# sourceMappingURL=cursoAlunosUsuario.d.ts.map