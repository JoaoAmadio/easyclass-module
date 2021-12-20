"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startMysqlConnection = void 0;
const grupo_1 = require("./entities/grupo");
const permissao_1 = require("./entities/permissao");
const usuario_1 = require("./entities/usuario");
const curso_1 = require("./entities/curso");
const disciplina_1 = require("./entities/disciplina");
const instituicao_1 = require("./entities/instituicao");
const telefoneInstituicao_1 = require("./entities/telefoneInstituicao");
const telefoneUsuario_1 = require("./entities/telefoneUsuario");
const atividade_1 = require("./entities/atividade");
const itemAtividade_1 = require("./entities/itemAtividade");
const cursoAlunosUsuario_1 = require("./entities/cursoAlunosUsuario");
const disciplinaAlunosUsuario_1 = require("./entities/disciplinaAlunosUsuario");
const atividadeAlunosUsuario_1 = require("./entities/atividadeAlunosUsuario");
const respostaAtividade_1 = require("./entities/respostaAtividade");
const respostaAtividadeItem_1 = require("./entities/respostaAtividadeItem");
const correcaoRespostaAtividade_1 = require("./entities/correcaoRespostaAtividade");
const correcaoRespostaAtividadeItem_1 = require("./entities/correcaoRespostaAtividadeItem");
const disciplinasCurso_1 = require("./entities/disciplinasCurso");
const typeorm_1 = require("typeorm");
function startMysqlConnection() {
    return new Promise((resolve, reject) => {
        try {
            (0, typeorm_1.createConnection)({
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
                    atividade_1.default,
                    curso_1.default,
                    disciplina_1.default,
                    grupo_1.default,
                    instituicao_1.default,
                    itemAtividade_1.default,
                    permissao_1.default,
                    telefoneInstituicao_1.default,
                    telefoneUsuario_1.default,
                    usuario_1.default,
                    cursoAlunosUsuario_1.default,
                    disciplinasCurso_1.default,
                    disciplinaAlunosUsuario_1.default,
                    atividadeAlunosUsuario_1.default,
                    respostaAtividade_1.default,
                    respostaAtividadeItem_1.default,
                    correcaoRespostaAtividade_1.default,
                    correcaoRespostaAtividadeItem_1.default
                ],
            }).then(() => {
                resolve(true);
            });
        }
        catch (e) {
            reject(e);
        }
    });
}
exports.startMysqlConnection = startMysqlConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw0Q0FBcUM7QUFDckMsb0RBQTZDO0FBQzdDLGdEQUF5QztBQUN6Qyw0Q0FBcUM7QUFDckMsc0RBQStDO0FBQy9DLHdEQUFpRDtBQUNqRCx3RUFBaUU7QUFDakUsZ0VBQXlEO0FBQ3pELG9EQUE2QztBQUM3Qyw0REFBcUQ7QUFDckQsc0VBQXlEO0FBQ3pELGdGQUFtRTtBQUNuRSw4RUFBaUU7QUFDakUsb0VBQTZEO0FBQzdELDRFQUFxRTtBQUNyRSxvRkFBNkU7QUFDN0UsNEZBQXFGO0FBQ3JGLGtFQUEyRDtBQUMzRCxxQ0FBMkM7QUFFM0MsU0FBZ0Isb0JBQW9CO0lBQ2hDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDbkMsSUFBSTtZQUNBLElBQUEsMEJBQWdCLEVBQUM7Z0JBQ2IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtnQkFDNUIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtnQkFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVTtnQkFDaEMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYztnQkFDcEMsV0FBVyxFQUFFLElBQUk7Z0JBQ2pCLE9BQU8sRUFBRSxvQkFBb0I7Z0JBQzdCLE9BQU8sRUFBRSxLQUFLO2dCQUNkLFFBQVEsRUFBRTtvQkFDTixtQkFBUztvQkFDVCxlQUFLO29CQUNMLG9CQUFVO29CQUNWLGVBQUs7b0JBQ0wscUJBQVc7b0JBQ1gsdUJBQWE7b0JBQ2IsbUJBQVM7b0JBQ1QsNkJBQW1CO29CQUNuQix5QkFBZTtvQkFDZixpQkFBTztvQkFDUCw0QkFBWTtvQkFDWiwwQkFBZ0I7b0JBQ2hCLGlDQUFpQjtvQkFDakIsZ0NBQWdCO29CQUNoQiwyQkFBaUI7b0JBQ2pCLCtCQUFxQjtvQkFDckIsbUNBQXlCO29CQUN6Qix1Q0FBNkI7aUJBQ2hDO2FBQ0osQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBeENELG9EQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcnVwbyBmcm9tIFwiLi9lbnRpdGllcy9ncnVwb1wiO1xuaW1wb3J0IFBlcm1pc3NhbyBmcm9tIFwiLi9lbnRpdGllcy9wZXJtaXNzYW9cIjtcbmltcG9ydCBVc3VhcmlvIGZyb20gXCIuL2VudGl0aWVzL3VzdWFyaW9cIjtcbmltcG9ydCBDdXJzbyBmcm9tIFwiLi9lbnRpdGllcy9jdXJzb1wiO1xuaW1wb3J0IERpc2NpcGxpbmEgZnJvbSBcIi4vZW50aXRpZXMvZGlzY2lwbGluYVwiO1xuaW1wb3J0IEluc3RpdHVpY2FvIGZyb20gXCIuL2VudGl0aWVzL2luc3RpdHVpY2FvXCI7XG5pbXBvcnQgVGVsZWZvbmVJbnN0aXR1aWNhbyBmcm9tIFwiLi9lbnRpdGllcy90ZWxlZm9uZUluc3RpdHVpY2FvXCI7XG5pbXBvcnQgVGVsZWZvbmVVc3VhcmlvIGZyb20gXCIuL2VudGl0aWVzL3RlbGVmb25lVXN1YXJpb1wiO1xuaW1wb3J0IEF0aXZpZGFkZSBmcm9tIFwiLi9lbnRpdGllcy9hdGl2aWRhZGVcIjtcbmltcG9ydCBJdGVtQXRpdmlkYWRlIGZyb20gXCIuL2VudGl0aWVzL2l0ZW1BdGl2aWRhZGVcIjtcbmltcG9ydCBDdXJzb1VzdWFyaW8gZnJvbSBcIi4vZW50aXRpZXMvY3Vyc29BbHVub3NVc3VhcmlvXCI7XG5pbXBvcnQgRGlzY2lwbGluYVVzdWFyaW8gZnJvbSBcIi4vZW50aXRpZXMvZGlzY2lwbGluYUFsdW5vc1VzdWFyaW9cIjtcbmltcG9ydCBBdGl2aWRhZGVVc3VhcmlvIGZyb20gXCIuL2VudGl0aWVzL2F0aXZpZGFkZUFsdW5vc1VzdWFyaW9cIjtcbmltcG9ydCBSZXNwb3N0YUF0aXZpZGFkZSBmcm9tIFwiLi9lbnRpdGllcy9yZXNwb3N0YUF0aXZpZGFkZVwiO1xuaW1wb3J0IFJlc3Bvc3RhQXRpdmlkYWRlSXRlbSBmcm9tIFwiLi9lbnRpdGllcy9yZXNwb3N0YUF0aXZpZGFkZUl0ZW1cIjtcbmltcG9ydCBDb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlIGZyb20gXCIuL2VudGl0aWVzL2NvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGVcIjtcbmltcG9ydCBDb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlSXRlbSBmcm9tIFwiLi9lbnRpdGllcy9jb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlSXRlbVwiO1xuaW1wb3J0IERpc2NpcGxpbmFzQ3Vyc28gZnJvbSBcIi4vZW50aXRpZXMvZGlzY2lwbGluYXNDdXJzb1wiO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE15c3FsQ29ubmVjdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJteXNxbFwiLFxuICAgICAgICAgICAgICAgIGhvc3Q6IHByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QsXG4gICAgICAgICAgICAgICAgcG9ydDogMzMwNixcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuTVlTUUxfVVNFUixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTVlTUUxfUEFTUyxcbiAgICAgICAgICAgICAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTVlTUUxfREFUQUJBU0UsXG4gICAgICAgICAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hhcnNldDogXCJ1dGY4bWI0X3VuaWNvZGVfY2lcIixcbiAgICAgICAgICAgICAgICBsb2dnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbnRpdGllczogW1xuICAgICAgICAgICAgICAgICAgICBBdGl2aWRhZGUsXG4gICAgICAgICAgICAgICAgICAgIEN1cnNvLFxuICAgICAgICAgICAgICAgICAgICBEaXNjaXBsaW5hLFxuICAgICAgICAgICAgICAgICAgICBHcnVwbyxcbiAgICAgICAgICAgICAgICAgICAgSW5zdGl0dWljYW8sXG4gICAgICAgICAgICAgICAgICAgIEl0ZW1BdGl2aWRhZGUsXG4gICAgICAgICAgICAgICAgICAgIFBlcm1pc3NhbyxcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbmVJbnN0aXR1aWNhbyxcbiAgICAgICAgICAgICAgICAgICAgVGVsZWZvbmVVc3VhcmlvLFxuICAgICAgICAgICAgICAgICAgICBVc3VhcmlvLFxuICAgICAgICAgICAgICAgICAgICBDdXJzb1VzdWFyaW8sXG4gICAgICAgICAgICAgICAgICAgIERpc2NpcGxpbmFzQ3Vyc28sXG4gICAgICAgICAgICAgICAgICAgIERpc2NpcGxpbmFVc3VhcmlvLFxuICAgICAgICAgICAgICAgICAgICBBdGl2aWRhZGVVc3VhcmlvLFxuICAgICAgICAgICAgICAgICAgICBSZXNwb3N0YUF0aXZpZGFkZSxcbiAgICAgICAgICAgICAgICAgICAgUmVzcG9zdGFBdGl2aWRhZGVJdGVtLFxuICAgICAgICAgICAgICAgICAgICBDb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlLFxuICAgICAgICAgICAgICAgICAgICBDb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlSXRlbVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSJdfQ==