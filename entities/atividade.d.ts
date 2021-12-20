import { BaseEntity } from "typeorm";
import Disciplina from "./disciplina";
import ItemAtividade from "./itemAtividade";
import Usuario from "./usuario";
import Curso from "./curso";
export default class Atividade extends BaseEntity {
    idAtividade: number;
    tituloAtividade: string;
    subtituloAtividade: string;
    descricaoAtividade: string;
    dataInicio: Date;
    dataEntrega: Date;
    tempoLimite: number;
    codigoAtividade: string;
    peso: number;
    disponivel: boolean;
    permiteEdicao: boolean;
    autor: Usuario;
    alunos: Usuario[];
    disciplina: Disciplina;
    itensAtividade: ItemAtividade[];
    curso: Curso;
}
//# sourceMappingURL=atividade.d.ts.map