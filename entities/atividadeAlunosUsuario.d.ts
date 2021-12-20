import { BaseEntity } from "typeorm";
import Atividade from "./atividade";
import Usuario from "./usuario";
export default class AtividadeUsuario extends BaseEntity {
    atividadeIdAtividade: number;
    usuarioIdUsuario: number;
    atividade: Atividade;
    usuario: Usuario;
}
//# sourceMappingURL=atividadeAlunosUsuario.d.ts.map