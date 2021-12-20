import { BaseEntity } from "typeorm";
import { TipoItemAtividadeEnum } from "../enums/genero-enum copy";
export default class ItemAtividade extends BaseEntity {
    idItemAtividade: number;
    sequencia: number;
    tituloItem: string;
    proposta: string;
    codigoItem: string;
    tipo: TipoItemAtividadeEnum;
    peso: number;
    isSubitem: boolean;
    autoCorrecao: boolean;
    dataEntrega: Date;
    min: number;
    max: number;
    icone: string;
    valor: string;
    itemAtividadeOrigem: ItemAtividade;
    subitensItemAtividade: ItemAtividade[];
}
//# sourceMappingURL=itemAtividade.d.ts.map