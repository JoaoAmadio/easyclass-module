import { BaseEntity } from "typeorm";
import Curso from "./curso";
import Disciplina from "./disciplina";
export default class DisciplinasCurso extends BaseEntity {
    disciplinaIdDisciplina: number;
    cursoIdCurso: number;
    disciplina: Disciplina;
    curso: Curso;
}
//# sourceMappingURL=disciplinasCurso.d.ts.map