import { BaseEntity } from "typeorm";
import Usuario from "./usuario";
import Disciplina from "./disciplina";
export default class Curso extends BaseEntity {
    idCurso: number;
    nomeCurso: string;
    disciplinas: Disciplina[];
    alunos: Usuario[];
}
//# sourceMappingURL=curso.d.ts.map