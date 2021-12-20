import {getRepository} from "typeorm";
import Usuario from "../../entities/usuario";
import {DefaultDAO} from "../core/dao/defaultDAO";
import Curso from "../../entities/curso";
import Disciplina from "../../entities/disciplina";
import Atividade from "../../entities/atividade";
import AtividadeUsuario from "../../entities/atividadeAlunosUsuario";
import DisciplinaUsuario from "../../entities/disciplinaAlunosUsuario";
import RespostaAtividade from "../../entities/respostaAtividade";

export class AtividadeBO extends DefaultDAO{

    constructor() {
        super();
    }

    public atividadeRepositorio = getRepository(Atividade);

    public async buscaPorCodigo2(codigoAtividade: string): Promise<Atividade | null> {
        return this.atividadeRepositorio.findOne({
            where: { codigoAtividade }
        });
    }
    public async buscaPorCodigo(codigoAtividade: string): Promise<Atividade | null> {
        return this.atividadeRepositorio.createQueryBuilder("atividade")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("disciplina.alunos", "disciplina_alunos")
            .leftJoinAndSelect("curso.alunos", "curso_alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")
            .where("atividade.codigoAtividade = :codigoAtividade", { codigoAtividade }).getOne();
    }

    public async listaRespostaAtividadeUsuarioDisciplina(idUsuario, idCurso, idDisciplina): Promise<RespostaAtividade[] | null> {
        return getRepository(RespostaAtividade).createQueryBuilder("respostaAtividade")
            .innerJoinAndSelect("respostaAtividade.atividade", "atividade")
            .innerJoinAndSelect("respostaAtividade.aluno", "aluno")
            .innerJoinAndSelect("atividade.curso", "curso")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "autor")
            .where("autor.idUsuario = :idUsuario AND curso.idCurso = :idCurso AND disciplina = :idDisciplina", {idUsuario, idCurso, idDisciplina})
            .getMany();
    }

    public async listaAtividadeDisciplinaUsuario(idUsuario: number, idDisciplina: number): Promise<Atividade[] | null> {
        return this.atividadeRepositorio.createQueryBuilder("atividade")
            .innerJoin(AtividadeUsuario, "au", "au.atividadeIdAtividade = atividade.idAtividade")
            .innerJoin(DisciplinaUsuario, "du", "du.usuarioIdUsuario = au.usuarioIdUsuario")
            .innerJoinAndSelect("au.usuario", "u")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("atividade.autor", "autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")
            .where("(autor.idUsuario = :idUsuario OR (atividade.disponivel = '1' AND u.idUsuario = :idUsuario)) AND disciplina.idDisciplina = :idDisciplina", { idUsuario, idDisciplina }).getMany();
    }

    public async buscaRespostaPorAtividadeEAluno(aluno: Usuario, atividade: Atividade):  Promise<RespostaAtividade | null>  {
        const { ra } = aluno;
        const { idAtividade } = atividade;
        return getRepository(RespostaAtividade).createQueryBuilder("respostaAtividade")
            .innerJoinAndSelect("respostaAtividade.atividade", "atividade")
            .innerJoinAndSelect("respostaAtividade.aluno", "aluno")
            .innerJoinAndSelect("atividade.disciplina", "disciplina")
            .innerJoinAndSelect("disciplina.professor", "professor")
            .innerJoinAndSelect("atividade.autor", "autor")
            .innerJoinAndSelect("atividade.curso", "curso")
            .leftJoinAndSelect("respostaAtividade.respostaAtividadeItens", "respostaAtividadeItens")
            .leftJoinAndSelect("respostaAtividadeItens.itemAtividade", "itemAtividade")
            .leftJoinAndSelect("itemAtividade.subitensItemAtividade", "itemAtividade_subitensItemAtividade")
            .leftJoinAndSelect("atividade.alunos", "alunos")
            .leftJoinAndSelect("atividade.itensAtividade", "itensAtividade")
            .leftJoinAndSelect("itensAtividade.subitensItemAtividade", "subitensItemAtividade")
            .where("(aluno.ra = :ra) AND atividade.idAtividade = :idAtividade", { ra, idAtividade }).getOne();
    }

    public async buscaRespostaAtividadePorID(idRespostaAtividade: number):  Promise<RespostaAtividade | null>  {
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
            .where("respostaAtividade.idRespostaAtividade = :idRespostaAtividade", { idRespostaAtividade }).getOne();
    }

    public async listaSimplesAtividadesPorCursoEDisciplina(curso: Curso, disciplina: Disciplina, autor: Usuario) {
        const {idCurso} = curso;
        const {idDisciplina} = disciplina;
        const {idUsuario} = autor;

        return this.atividadeRepositorio.createQueryBuilder("atividade")
        .innerJoinAndSelect("atividade.disciplina", "disciplina")
        .innerJoinAndSelect("atividade.autor", "autor")
        .innerJoinAndSelect("atividade.curso", "curso")
        .where("autor.idUsuario = :idUsuario AND disciplina.idDisciplina = :idDisciplina AND curso.idCurso = :idCurso", { idUsuario, idDisciplina, idCurso })
        .getMany();
    }
}
