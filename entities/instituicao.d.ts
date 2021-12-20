import { BaseEntity } from "typeorm";
import TelefoneInstituicao from "./telefoneInstituicao";
export default class Instituicao extends BaseEntity {
    idInstituicao: number;
    razaoSocial: string;
    nomeFantasia: string;
    cpfCnpj: string;
    email: string;
    telefones: TelefoneInstituicao[];
}
//# sourceMappingURL=instituicao.d.ts.map