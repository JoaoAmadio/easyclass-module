import { BaseEntity } from "typeorm";
import Atividade from "./atividade";
import RespostaAtividadeItem from "./respostaAtividadeItem";
import Usuario from "./usuario";
export default class RespostaAtividade extends BaseEntity {
    idRespostaAtividade: number;
    tempoInicio: Date;
    observacao: string;
    tempoFim: Date;
    pesoTotal: number;
    emAtraso: boolean;
    aluno: Usuario;
    atividade: Atividade;
    respostaAtividadeItens: RespostaAtividadeItem[];
}
//# sourceMappingURL=respostaAtividade.d.ts.map