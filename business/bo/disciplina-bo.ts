import {getRepository} from "typeorm";
import Usuario from "../../entities/usuario";
import {DefaultDAO} from "../core/dao/defaultDAO";
import Curso from "../../entities/curso";
import Disciplina from "../../entities/disciplina";
import DisciplinaUsuario from "../../entities/disciplinaAlunosUsuario";

export class DisciplinaBo extends DefaultDAO{

    constructor() {
        super();
    }

    public disciplinaRepositorio = getRepository(Disciplina);

    public listaPorUsuarioECurso(usuario: Usuario, curso: Curso): Disciplina[] {
        let listaAux = [];
        for (const disicplina of curso.disciplinas) {
            const isProfessor = disicplina.professor && disicplina.professor.ra == usuario.ra;
            const isAluno     = disicplina.alunos    && !!disicplina.alunos.find(item => item.ra == usuario.ra);
            if (isProfessor || isAluno) {
                listaAux.push(disicplina);
            }
        }
        return listaAux;
    }

    public async buscaPorID(idDisciplina: number): Promise<Disciplina | null> {
        return this.disciplinaRepositorio.findOne({where: { idDisciplina }});
    }

    public async buscaPorProfessor(professor: Usuario): Promise<Disciplina[] | null> {
        return this.disciplinaRepositorio.find({where: {professor}});
    }

    public async listarTodas(): Promise<Disciplina[] | null> {
        return this.disciplinaRepositorio.createQueryBuilder("disciplina")
            .leftJoinAndSelect("disciplina.professor", "professor")
            .leftJoinAndSelect("disciplina.alunos", "alunos")
            .getMany();
    }

    public async buscaPorProfessorOuAluno(professor: Usuario): Promise<Disciplina[] | null> {
        const {ra} = professor;
        return this.disciplinaRepositorio.createQueryBuilder("disciplina")
            .innerJoinAndSelect("disciplina.professor", "professor")
            .leftJoinAndSelect("disciplina.alunos", "alunos")
            .where("professor.ra = :ra OR alunos.ra = :ra", {ra})
            .distinct().getMany();
    }

    public async removerDisicplina(disicplina: Disciplina) {
        disicplina.alunos = [];
        return this.disciplinaRepositorio.delete(disicplina.idDisciplina);
    }
}
