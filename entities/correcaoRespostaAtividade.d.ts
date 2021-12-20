import { BaseEntity } from "typeorm";
import CorrecaoRespostaAtividadeItem from "./correcaoRespostaAtividadeItem";
import RespostaAtividade from "./respostaAtividade";
import Usuario from "./usuario";
export default class CorrecaoRespostaAtividade extends BaseEntity {
    idCorrecaoRespostaAtividade: number;
    pesoTotal: number;
    observacao: string;
    dataCorrecaoAtividade: Date;
    dataEntregaCorrecao: Date;
    respostaAtividade: RespostaAtividade;
    autor: Usuario;
    correcaoAtividadeItens: CorrecaoRespostaAtividadeItem[];
}
//# sourceMappingURL=correcaoRespostaAtividade.d.ts.map