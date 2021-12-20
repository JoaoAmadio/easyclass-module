"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoBo = void 0;
const typeorm_1 = require("typeorm");
const defaultDAO_1 = require("../core/dao/defaultDAO");
const curso_1 = require("../../entities/curso");
const cursoAlunosUsuario_1 = require("../../entities/cursoAlunosUsuario");
class CursoBo extends defaultDAO_1.DefaultDAO {
    constructor() {
        super();
        this.cursoRepositorio = (0, typeorm_1.getRepository)(curso_1.default);
    }
    async listaPorUsuario(usuario) {
        const { idUsuario } = usuario;
        return this.cursoRepositorio.createQueryBuilder("curso")
            .innerJoin(cursoAlunosUsuario_1.default, "cu", "cu.cursoIdCurso = curso.idCurso")
            .leftJoinAndSelect("curso.alunos", "alunos")
            .leftJoinAndSelect("curso.disciplinas", "disciplinas")
            .leftJoinAndSelect("disciplinas.professor", "professor")
            .leftJoinAndSelect("disciplinas.alunos", "disciplinas_alunos")
            .where("cu.usuarioIdUsuario = :idUsuario", { idUsuario })
            .getMany();
    }
    async buscaPorID(idCurso) {
        return this.cursoRepositorio.findOne({ where: { idCurso } });
    }
}
exports.CursoBo = CursoBo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Vyc28tYm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJzby1iby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBc0M7QUFFdEMsdURBQWtEO0FBQ2xELGdEQUF5QztBQUV6QywwRUFBNkQ7QUFFN0QsTUFBYSxPQUFRLFNBQVEsdUJBQVU7SUFFbkM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUdMLHFCQUFnQixHQUFHLElBQUEsdUJBQWEsRUFBQyxlQUFLLENBQUMsQ0FBQztJQUYvQyxDQUFDO0lBSU0sS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFnQjtRQUN6QyxNQUFNLEVBQUMsU0FBUyxFQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzVCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQzthQUNuRCxTQUFTLENBQUMsNEJBQVksRUFBRSxJQUFJLEVBQUUsaUNBQWlDLENBQUM7YUFDaEUsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQzthQUMzQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUM7YUFDckQsaUJBQWlCLENBQUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDO2FBQ3ZELGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDO2FBQzdELEtBQUssQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDO2FBQ3hELE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQWU7UUFDbkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEVBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDSjtBQXZCRCwwQkF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFJlcG9zaXRvcnl9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBVc3VhcmlvIGZyb20gXCIuLi8uLi9lbnRpdGllcy91c3VhcmlvXCI7XHJcbmltcG9ydCB7RGVmYXVsdERBT30gZnJvbSBcIi4uL2NvcmUvZGFvL2RlZmF1bHREQU9cIjtcclxuaW1wb3J0IEN1cnNvIGZyb20gXCIuLi8uLi9lbnRpdGllcy9jdXJzb1wiO1xyXG5pbXBvcnQgRGlzY2lwbGluYSBmcm9tIFwiLi4vLi4vZW50aXRpZXMvZGlzY2lwbGluYVwiO1xyXG5pbXBvcnQgQ3Vyc29Vc3VhcmlvIGZyb20gXCIuLi8uLi9lbnRpdGllcy9jdXJzb0FsdW5vc1VzdWFyaW9cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXJzb0JvIGV4dGVuZHMgRGVmYXVsdERBT3tcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjdXJzb1JlcG9zaXRvcmlvID0gZ2V0UmVwb3NpdG9yeShDdXJzbyk7XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGxpc3RhUG9yVXN1YXJpbyh1c3VhcmlvOiBVc3VhcmlvKTogUHJvbWlzZTxDdXJzb1tdIHwgbnVsbD4ge1xyXG4gICAgICAgIGNvbnN0IHtpZFVzdWFyaW99ID0gdXN1YXJpbztcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJzb1JlcG9zaXRvcmlvLmNyZWF0ZVF1ZXJ5QnVpbGRlcihcImN1cnNvXCIpXHJcbiAgICAgICAgICAgIC5pbm5lckpvaW4oQ3Vyc29Vc3VhcmlvLCBcImN1XCIsIFwiY3UuY3Vyc29JZEN1cnNvID0gY3Vyc28uaWRDdXJzb1wiKVxyXG4gICAgICAgICAgICAubGVmdEpvaW5BbmRTZWxlY3QoXCJjdXJzby5hbHVub3NcIiwgXCJhbHVub3NcIilcclxuICAgICAgICAgICAgLmxlZnRKb2luQW5kU2VsZWN0KFwiY3Vyc28uZGlzY2lwbGluYXNcIiwgXCJkaXNjaXBsaW5hc1wiKVxyXG4gICAgICAgICAgICAubGVmdEpvaW5BbmRTZWxlY3QoXCJkaXNjaXBsaW5hcy5wcm9mZXNzb3JcIiwgXCJwcm9mZXNzb3JcIilcclxuICAgICAgICAgICAgLmxlZnRKb2luQW5kU2VsZWN0KFwiZGlzY2lwbGluYXMuYWx1bm9zXCIsIFwiZGlzY2lwbGluYXNfYWx1bm9zXCIpXHJcbiAgICAgICAgICAgIC53aGVyZShcImN1LnVzdWFyaW9JZFVzdWFyaW8gPSA6aWRVc3VhcmlvXCIsIHsgaWRVc3VhcmlvIH0pXHJcbiAgICAgICAgICAgIC5nZXRNYW55KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGJ1c2NhUG9ySUQoaWRDdXJzbzogbnVtYmVyKTogUHJvbWlzZTxDdXJzbyB8IG51bGw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJzb1JlcG9zaXRvcmlvLmZpbmRPbmUoe3doZXJlOiB7IGlkQ3Vyc28gfX0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==