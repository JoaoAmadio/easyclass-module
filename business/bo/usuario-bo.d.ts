import Usuario from "../../entities/usuario";
import { DefaultDAO } from "../core/dao/defaultDAO";
export declare class UsuarioBO extends DefaultDAO {
    constructor();
    usuarioRepositorio: import("typeorm").Repository<Usuario>;
    buscaPorRA(ra: string): Promise<Usuario | null>;
    buscaPorCPF(cpf: string): Promise<Usuario | null>;
    buscaPorEmail(email: string): Promise<Usuario | null>;
    listar(): Promise<Usuario[] | null>;
}
//# sourceMappingURL=usuario-bo.d.ts.map