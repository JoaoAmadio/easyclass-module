import {getRepository} from "typeorm";
import Usuario from "../../entities/usuario";
import {DefaultDAO} from "../core/dao/defaultDAO";

export class UsuarioBO extends DefaultDAO{

    constructor() {
        super();
    }

    public usuarioRepositorio = getRepository(Usuario);

    public async buscaPorRA(ra: string): Promise<Usuario | null> {
        return this.usuarioRepositorio.findOne({where: { ra }});
    }
    public async buscaPorCPF(cpf: string): Promise<Usuario | null> {
        return this.usuarioRepositorio.findOne({where: { cpf }});
    }
    public async buscaPorEmail(email: string): Promise<Usuario | null> {
        return this.usuarioRepositorio.findOne({where: { email }});
    }

    public async listar(): Promise<Usuario[] | null> {
        return this.usuarioRepositorio.find();
    }
}
