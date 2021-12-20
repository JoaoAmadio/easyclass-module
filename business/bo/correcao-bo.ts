import { getRepository } from "typeorm";
import Usuario from "../../entities/usuario";
import { DefaultDAO } from "../core/dao/defaultDAO";
import Curso from "../../entities/curso";
import Disciplina from "../../entities/disciplina";
import Atividade from "../../entities/atividade";
import AtividadeUsuario from "../../entities/atividadeAlunosUsuario";
import DisciplinaUsuario from "../../entities/disciplinaAlunosUsuario";
import RespostaAtividade from "../../entities/respostaAtividade";
import CorrecaoRespostaAtividade from "../../entities/correcaoRespostaAtividade";

export class CorrecaoAtividadeBO extends DefaultDAO {

    constructor() {
        super();
    }

    public correcaoAtividadeRepositorio = getRepository(CorrecaoRespostaAtividade);

    public async buscaPorRespostaAtividade(respostaAtividade: RespostaAtividade): Promise<CorrecaoRespostaAtividade | null> {
        const { idRespostaAtividade } = respostaAtividade;
        return this.correcaoAtividadeRepositorio.createQueryBuilder("correcaoRespostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.respostaAtividade", "respostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.autor", "autor")

            // Resposta Atividade
            .innerJoinAndSelect("respostaAtividade.atividade", "atividade")
            .innerJoinAndSelect("respostaAtividade.aluno", "aluno")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "atividade_autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("respostaAtividade.respostaAtividadeItens", "respostaAtividadeItens")
            .leftJoinAndSelect("respostaAtividadeItens.itemAtividade", "itemAtividade")
            .leftJoinAndSelect("itemAtividade.subitensItemAtividade", "itemAtividade_subitensItemAtividade")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")

            // Itens
            .leftJoinAndSelect("correcaoRespostaAtividade.correcaoAtividadeItens", "correcaoAtividadeItens")
            .leftJoinAndSelect("correcaoAtividadeItens.respostaAtividadeItem", "correcaoAtividadeItens_respostaAtividadeItem")
            .leftJoinAndSelect("correcaoAtividadeItens_respostaAtividadeItem.itemAtividade", "respostaAtividadeItem_itemAtividade")
            .leftJoinAndSelect("respostaAtividadeItem_itemAtividade.subitensItemAtividade", "respostaAtividadeItem_itemAtividade_subitensItemAtividade")
            .where("respostaAtividade.idRespostaAtividade = :idRespostaAtividade", { idRespostaAtividade })
            .getOne();
    }

    public async buscaPorID(idCorrecaoRespostaAtividade: number): Promise<CorrecaoRespostaAtividade | null> {
        return this.correcaoAtividadeRepositorio.createQueryBuilder("correcaoRespostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.respostaAtividade", "respostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.autor", "autor")

            // Resposta Atividade
            .innerJoinAndSelect("respostaAtividade.atividade", "atividade")
            .innerJoinAndSelect("respostaAtividade.aluno", "aluno")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "atividade_autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("respostaAtividade.respostaAtividadeItens", "respostaAtividadeItens")
            .leftJoinAndSelect("respostaAtividadeItens.itemAtividade", "itemAtividade")
            .leftJoinAndSelect("itemAtividade.subitensItemAtividade", "itemAtividade_subitensItemAtividade")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")

            // Itens
            .leftJoinAndSelect("correcaoRespostaAtividade.correcaoAtividadeItens", "correcaoAtividadeItens")
            .leftJoinAndSelect("correcaoAtividadeItens.respostaAtividadeItem", "correcaoAtividadeItens_respostaAtividadeItem")
            .leftJoinAndSelect("correcaoAtividadeItens_respostaAtividadeItem.itemAtividade", "respostaAtividadeItem_itemAtividade")
            .leftJoinAndSelect("respostaAtividadeItem_itemAtividade.subitensItemAtividade", "respostaAtividadeItem_itemAtividade_subitensItemAtividade")
            .where("correcaoRespostaAtividade.idCorrecaoRespostaAtividade = :idCorrecaoRespostaAtividade", { idCorrecaoRespostaAtividade })
            .getOne();
    }

    public async buscaPorRespostaAtividadeSimples(respostaAtividade: RespostaAtividade): Promise<CorrecaoRespostaAtividade | null> {
        const { idRespostaAtividade } = respostaAtividade;
        return this.correcaoAtividadeRepositorio.createQueryBuilder("correcaoRespostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.respostaAtividade", "respostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.autor", "autor")

            // Resposta Atividade
            .innerJoinAndSelect("respostaAtividade.atividade", "atividade")
            .innerJoinAndSelect("respostaAtividade.aluno", "aluno")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "atividade_autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("respostaAtividade.respostaAtividadeItens", "respostaAtividadeItens")
            .leftJoinAndSelect("respostaAtividadeItens.itemAtividade", "itemAtividade")
            .leftJoinAndSelect("itemAtividade.subitensItemAtividade", "itemAtividade_subitensItemAtividade")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")

            .where("respostaAtividade.idRespostaAtividade = :idRespostaAtividade AND respostaAtividade.tempoFim IS NOT NULL AND NOW() >= correcaoRespostaAtividade.dataEntregaCorrecao", { idRespostaAtividade })
            .getOne();
    }

    public async buscaPorRespostaAtividadeRelatorio(atividade: Atividade): Promise<CorrecaoRespostaAtividade[] | null> {
        const { idAtividade } = atividade;
        return this.correcaoAtividadeRepositorio.createQueryBuilder("correcaoRespostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.respostaAtividade", "respostaAtividade")
            .innerJoinAndSelect("correcaoRespostaAtividade.autor", "autor")

            // Resposta Atividade
            .innerJoinAndSelect("respostaAtividade.atividade", "atividade")
            .innerJoinAndSelect("respostaAtividade.aluno", "aluno")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "atividade_autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("respostaAtividade.respostaAtividadeItens", "respostaAtividadeItens")
            .leftJoinAndSelect("respostaAtividadeItens.itemAtividade", "itemAtividade")
            .leftJoinAndSelect("itemAtividade.subitensItemAtividade", "itemAtividade_subitensItemAtividade")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")

            // Itens
            .leftJoinAndSelect("correcaoRespostaAtividade.correcaoAtividadeItens", "correcaoAtividadeItens")
            .leftJoinAndSelect("correcaoAtividadeItens.respostaAtividadeItem", "correcaoAtividadeItens_respostaAtividadeItem")
            .leftJoinAndSelect("correcaoAtividadeItens_respostaAtividadeItem.itemAtividade", "respostaAtividadeItem_itemAtividade")
            .leftJoinAndSelect("respostaAtividadeItem_itemAtividade.subitensItemAtividade", "respostaAtividadeItem_itemAtividade_subitensItemAtividade")
            .where("atividade.idAtividade = :idAtividade AND correcaoRespostaAtividade.dataEntregaCorrecao IS NOT NULL", { idAtividade })
            .getMany();
    }

    public async listaRespostaAtividadeDisponivel(disciplina: Disciplina, autor: Usuario):  Promise<RespostaAtividade[] | null>  {
        const { ra } = autor;
        const { idDisciplina } = disciplina;
        return getRepository(RespostaAtividade).createQueryBuilder("respostaAtividade")
            .innerJoinAndSelect("respostaAtividade.atividade", "atividade")
            .innerJoinAndSelect("respostaAtividade.aluno", "aluno")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("respostaAtividade.respostaAtividadeItens", "respostaAtividadeItens")
            .leftJoinAndSelect("respostaAtividadeItens.itemAtividade", "itemAtividade")
            .leftJoinAndSelect("itemAtividade.subitensItemAtividade", "itemAtividade_subitensItemAtividade")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")
            .where("disciplina.idDisciplina = :idDisciplina AND autor.ra = :ra AND respostaAtividade.tempoFim", { idDisciplina, ra })
            .getMany();
    }
}
