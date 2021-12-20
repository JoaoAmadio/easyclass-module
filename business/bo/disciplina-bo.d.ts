import Usuario from "../../entities/usuario";
import { DefaultDAO } from "../core/dao/defaultDAO";
import Curso from "../../entities/curso";
import Disciplina from "../../entities/disciplina";
export declare class DisciplinaBo extends DefaultDAO {
    constructor();
    disciplinaRepositorio: import("typeorm").Repository<Disciplina>;
    listaPorUsuarioECurso(usuario: Usuario, curso: Curso): Disciplina[];
    buscaPorID(idDisciplina: number): Promise<Disciplina | null>;
    buscaPorProfessor(professor: Usuario): Promise<Disciplina[] | null>;
    listarTodas(): Promise<Disciplina[] | null>;
    buscaPorProfessorOuAluno(professor: Usuario): Promise<Disciplina[] | null>;
    removerDisicplina(disicplina: Disciplina): Promise<import("typeorm").DeleteResult>;
}
//# sourceMappingURL=disciplina-bo.d.ts.map