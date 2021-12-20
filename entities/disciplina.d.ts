import { BaseEntity } from "typeorm";
import Usuario from "./usuario";
declare class Disciplina extends BaseEntity {
    idDisciplina: number;
    nomeDisciplina: string;
    professor: Usuario;
    alunos: Usuario[];
}
export default Disciplina;
//# sourceMappingURL=disciplina.d.ts.map