import { BaseEntity } from "typeorm";
import Instituicao from "./instituicao";
export default class TelefoneInstituicao extends BaseEntity {
    idTelefone: number;
    descricao: string;
    valor: string;
    instituicao: Instituicao;
}
//# sourceMappingURL=telefoneInstituicao.d.ts.map