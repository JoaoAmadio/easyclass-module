import Grupo from "./entities/grupo";
import Permissao from "./entities/permissao";
import Usuario from "./entities/usuario";
import Curso from "./entities/curso";
import Disciplina from "./entities/disciplina";
import Instituicao from "./entities/instituicao";
import TelefoneInstituicao from "./entities/telefoneInstituicao";
import TelefoneUsuario from "./entities/telefoneUsuario";
import Atividade from "./entities/atividade";
import ItemAtividade from "./entities/itemAtividade";
import CursoUsuario from "./entities/cursoAlunosUsuario";
import DisciplinaUsuario from "./entities/disciplinaAlunosUsuario";
import AtividadeUsuario from "./entities/atividadeAlunosUsuario";
import RespostaAtividade from "./entities/respostaAtividade";
import RespostaAtividadeItem from "./entities/respostaAtividadeItem";
import CorrecaoRespostaAtividade from "./entities/correcaoRespostaAtividade";
import CorrecaoRespostaAtividadeItem from "./entities/correcaoRespostaAtividadeItem";
import DisciplinasCurso from "./entities/disciplinasCurso";
import { createConnection } from "typeorm";

export function startMysqlConnection() {
    return new Promise((resolve, reject) => {
        try {
            createConnection({
                type: "mysql",
                host: process.env.MYSQL_HOST,
                port: 3306,
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASS,
                database: process.env.MYSQL_DATABASE,
                synchronize: true,
                charset: "utf8mb4_unicode_ci",
                logging: false,
                entities: [
                    Atividade,
                    Curso,
                    Disciplina,
                    Grupo,
                    Instituicao,
                    ItemAtividade,
                    Permissao,
                    TelefoneInstituicao,
                    TelefoneUsuario,
                    Usuario,
                    CursoUsuario,
                    DisciplinasCurso,
                    DisciplinaUsuario,
                    AtividadeUsuario,
                    RespostaAtividade,
                    RespostaAtividadeItem,
                    CorrecaoRespostaAtividade,
                    CorrecaoRespostaAtividadeItem
                ],
            }).then(() => {
                resolve(true);
            });
        } catch (e) {
            reject(e);
        }
    });
}