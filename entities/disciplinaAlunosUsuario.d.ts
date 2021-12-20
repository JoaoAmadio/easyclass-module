import { BaseEntity } from "typeorm";
import Disciplina from "./disciplina";
import Usuario from "./usuario";
export default class DisciplinaUsuario extends BaseEntity {
    disciplinaIdDisciplina: number;
    usuarioIdUsuario: number;
    disciplina: Disciplina;
    usuario: Usuario;
}
//# sourceMappingURL=disciplinaAlunosUsuario.d.ts.map