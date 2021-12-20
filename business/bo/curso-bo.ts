import {getRepository} from "typeorm";
import Usuario from "../../entities/usuario";
import {DefaultDAO} from "../core/dao/defaultDAO";
import Curso from "../../entities/curso";
import Disciplina from "../../entities/disciplina";
import CursoUsuario from "../../entities/cursoAlunosUsuario";

export class CursoBo extends DefaultDAO{

    constructor() {
        super();
    }

    public cursoRepositorio = getRepository(Curso);

    public async listaPorUsuario(usuario: Usuario): Promise<Curso[] | null> {
        const {idUsuario} = usuario;
        return this.cursoRepositorio.createQueryBuilder("curso")
            .innerJoin(CursoUsuario, "cu", "cu.cursoIdCurso = curso.idCurso")
            .leftJoinAndSelect("curso.alunos", "alunos")
            .leftJoinAndSelect("curso.disciplinas", "disciplinas")
            .leftJoinAndSelect("disciplinas.professor", "professor")
            .leftJoinAndSelect("disciplinas.alunos", "disciplinas_alunos")
            .where("cu.usuarioIdUsuario = :idUsuario", { idUsuario })
            .getMany();
    }

    public async buscaPorID(idCurso: number): Promise<Curso | null> {
        return this.cursoRepositorio.findOne({where: { idCurso }});
    }
}
