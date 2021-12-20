import Usuario from "../../entities/usuario";
import { DefaultDAO } from "../core/dao/defaultDAO";
import Curso from "../../entities/curso";
export declare class CursoBo extends DefaultDAO {
    constructor();
    cursoRepositorio: import("typeorm").Repository<Curso>;
    listaPorUsuario(usuario: Usuario): Promise<Curso[] | null>;
    buscaPorID(idCurso: number): Promise<Curso | null>;
}
//# sourceMappingURL=curso-bo.d.ts.map