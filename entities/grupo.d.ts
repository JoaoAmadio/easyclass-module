import { BaseEntity } from "typeorm";
import Permissao from "./permissao";
declare class Grupo extends BaseEntity {
    idGrupo: number;
    nomeGrupo: string;
    descricao: string;
    ativo: boolean;
    permissoes: Permissao[];
}
export default Grupo;
//# sourceMappingURL=grupo.d.ts.map