import { BaseEntity } from "typeorm";
import { GeneroEnum } from "../enums/genero-enum";
import Grupo from "./grupo";
import TelefoneUsuario from "./telefoneUsuario";
export default class Usuario extends BaseEntity {
    idUsuario: number;
    nomeUsuario: string;
    ultimoNome: string;
    email: string;
    senha: string;
    dataNascimento: Date;
    dataCadastro: Date;
    cpf: string;
    ra: string;
    ultimoLogin: Date;
    genero: GeneroEnum;
    grupo: Grupo;
    telefones: TelefoneUsuario[];
    criptografaSenha(): void;
    verificaSenha(senhaDescriptografada: string): boolean;
    temPermissao(permissao: any): boolean;
    estaNoGrupo(grupo: Grupo): boolean;
}
//# sourceMappingURL=usuario.d.ts.map