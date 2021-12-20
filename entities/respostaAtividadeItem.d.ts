import { BaseEntity } from "typeorm";
import ItemAtividade from "./itemAtividade";
import RespostaAtividade from "./respostaAtividade";
export default class RespostaAtividadeItem extends BaseEntity {
    idRespostaAtividadeItem: number;
    valor: string;
    observacaoItem: string;
    peso: number;
    dataRespostaItem: Date;
    itemAtividade: ItemAtividade;
    respostaAtividade: RespostaAtividade;
}
//# sourceMappingURL=respostaAtividadeItem.d.ts.map