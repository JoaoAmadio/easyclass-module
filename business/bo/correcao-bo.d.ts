import Usuario from "../../entities/usuario";
import { DefaultDAO } from "../core/dao/defaultDAO";
import Disciplina from "../../entities/disciplina";
import Atividade from "../../entities/atividade";
import RespostaAtividade from "../../entities/respostaAtividade";
import CorrecaoRespostaAtividade from "../../entities/correcaoRespostaAtividade";
export declare class CorrecaoAtividadeBO extends DefaultDAO {
    constructor();
    correcaoAtividadeRepositorio: import("typeorm").Repository<CorrecaoRespostaAtividade>;
    buscaPorRespostaAtividade(respostaAtividade: RespostaAtividade): Promise<CorrecaoRespostaAtividade | null>;
    buscaPorID(idCorrecaoRespostaAtividade: number): Promise<CorrecaoRespostaAtividade | null>;
    buscaPorRespostaAtividadeSimples(respostaAtividade: RespostaAtividade): Promise<CorrecaoRespostaAtividade | null>;
    buscaPorRespostaAtividadeRelatorio(atividade: Atividade): Promise<CorrecaoRespostaAtividade[] | null>;
    listaRespostaAtividadeDisponivel(disciplina: Disciplina, autor: Usuario): Promise<RespostaAtividade[] | null>;
}
//# sourceMappingURL=correcao-bo.d.ts.map