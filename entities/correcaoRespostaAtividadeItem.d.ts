import { BaseEntity } from "typeorm";
import CorrecaoRespostaAtividade from "./correcaoRespostaAtividade";
import RespostaAtividadeItem from "./respostaAtividadeItem";
export default class CorrecaoRespostaAtividadeItem extends BaseEntity {
    idCorrecaoRespostaAtividadeItem: number;
    peso: number;
    valor: string;
    observacaoItem: string;
    dataCorrecaoItem: Date;
    respostaAtividadeItem: RespostaAtividadeItem;
    correcaoRespostaAtividade: CorrecaoRespostaAtividade;
}
//# sourceMappingURL=correcaoRespostaAtividadeItem.d.ts.map