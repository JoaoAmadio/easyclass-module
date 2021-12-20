import Usuario from "../../entities/usuario";
import { DefaultDAO } from "../core/dao/defaultDAO";
import Curso from "../../entities/curso";
import Disciplina from "../../entities/disciplina";
import Atividade from "../../entities/atividade";
import RespostaAtividade from "../../entities/respostaAtividade";
export declare class AtividadeBO extends DefaultDAO {
    constructor();
    atividadeRepositorio: import("typeorm").Repository<Atividade>;
    buscaPorCodigo2(codigoAtividade: string): Promise<Atividade | null>;
    buscaPorCodigo(codigoAtividade: string): Promise<Atividade | null>;
    listaRespostaAtividadeUsuarioDisciplina(idUsuario: any, idCurso: any, idDisciplina: any): Promise<RespostaAtividade[] | null>;
    listaAtividadeDisciplinaUsuario(idUsuario: number, idDisciplina: number): Promise<Atividade[] | null>;
    buscaRespostaPorAtividadeEAluno(aluno: Usuario, atividade: Atividade): Promise<RespostaAtividade | null>;
    buscaRespostaAtividadePorID(idRespostaAtividade: number): Promise<RespostaAtividade | null>;
    listaSimplesAtividadesPorCursoEDisciplina(curso: Curso, disciplina: Disciplina, autor: Usuario): Promise<Atividade[]>;
}
//# sourceMappingURL=atividade-bo.d.ts.map