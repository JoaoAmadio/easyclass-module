import { BaseEntity } from "typeorm";
import Usuario from "./usuario";
export default class TelefoneUsuario extends BaseEntity {
    idTelefone: number;
    descricao: string;
    valor: string;
    usuario: Usuario;
}
//# sourceMappingURL=telefoneUsuario.d.ts.map