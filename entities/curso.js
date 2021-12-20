"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const usuario_1 = require("./usuario");
const disciplina_1 = require("./disciplina");
let Curso = class Curso extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idCurso" }),
    __metadata("design:type", Number)
], Curso.prototype, "idCurso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nomeCurso" }),
    __metadata("design:type", String)
], Curso.prototype, "nomeCurso", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => disciplina_1.default, { eager: true, nullable: true }),
    (0, typeorm_1.JoinTable)({ name: 'disciplinasCurso' }),
    __metadata("design:type", Array)
], Curso.prototype, "disciplinas", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_1.default, { eager: true, nullable: true }),
    (0, typeorm_1.JoinTable)({ name: "cursoAlunosUsuario" }),
    __metadata("design:type", Array)
], Curso.prototype, "alunos", void 0);
Curso = __decorate([
    (0, typeorm_1.Entity)({ name: "curso" })
], Curso);
exports.default = Curso;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Vyc28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdXJzby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQU9pQjtBQUNqQix1Q0FBZ0M7QUFDaEMsNkNBQXNDO0FBR3RDLElBQXFCLEtBQUssR0FBMUIsTUFBcUIsS0FBTSxTQUFRLG9CQUFVO0NBYzVDLENBQUE7QUFaQztJQURDLElBQUEsZ0NBQXNCLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O3NDQUNyQjtBQUd2QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQzs7d0NBQ0o7QUFJekI7SUFGQyxJQUFBLG9CQUFVLEVBQUMsR0FBRyxFQUFFLENBQUMsb0JBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQzdELElBQUEsbUJBQVMsRUFBQyxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBQyxDQUFDOzswQ0FDTDtBQUlqQztJQUZDLElBQUEsb0JBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDMUQsSUFBQSxtQkFBUyxFQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLENBQUM7O3FDQUNmO0FBYk4sS0FBSztJQUR6QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7R0FDTCxLQUFLLENBY3pCO2tCQWRvQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBFbnRpdHksXHJcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcclxuICBDb2x1bW4sXHJcbiAgQmFzZUVudGl0eSxcclxuICBNYW55VG9NYW55LFxyXG4gIEpvaW5UYWJsZVxyXG59IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBVc3VhcmlvIGZyb20gXCIuL3VzdWFyaW9cIjtcclxuaW1wb3J0IERpc2NpcGxpbmEgZnJvbSBcIi4vZGlzY2lwbGluYVwiO1xyXG5cclxuQEVudGl0eSh7IG5hbWU6IFwiY3Vyc29cIiB9KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJzbyBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKHsgbmFtZTogXCJpZEN1cnNvXCIgfSlcclxuICBwdWJsaWMgaWRDdXJzbzogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJub21lQ3Vyc29cIn0pXHJcbiAgcHVibGljIG5vbWVDdXJzbzogc3RyaW5nO1xyXG5cclxuICBATWFueVRvTWFueSgoKSA9PiBEaXNjaXBsaW5hLCB7IGVhZ2VyOiB0cnVlLCBudWxsYWJsZTogdHJ1ZSB9KVxyXG4gIEBKb2luVGFibGUoe25hbWU6ICdkaXNjaXBsaW5hc0N1cnNvJ30pXHJcbiAgcHVibGljIGRpc2NpcGxpbmFzOiBEaXNjaXBsaW5hW107XHJcblxyXG4gIEBNYW55VG9NYW55KCgpID0+IFVzdWFyaW8sIHsgZWFnZXI6IHRydWUsIG51bGxhYmxlOiB0cnVlIH0pXHJcbiAgQEpvaW5UYWJsZSh7bmFtZTogXCJjdXJzb0FsdW5vc1VzdWFyaW9cIn0pXHJcbiAgcHVibGljIGFsdW5vczogVXN1YXJpb1tdO1xyXG59XHJcbiJdfQ==