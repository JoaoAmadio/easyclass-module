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
const disciplina_1 = require("./disciplina");
const itemAtividade_1 = require("./itemAtividade");
const usuario_1 = require("./usuario");
const curso_1 = require("./curso");
let Atividade = class Atividade extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idAtividade" }),
    __metadata("design:type", Number)
], Atividade.prototype, "idAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tituloAtividade" }),
    __metadata("design:type", String)
], Atividade.prototype, "tituloAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "subtituloAtividade", nullable: true }),
    __metadata("design:type", String)
], Atividade.prototype, "subtituloAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "descricaoAtividade" }),
    __metadata("design:type", String)
], Atividade.prototype, "descricaoAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataInicio", type: 'date' }),
    __metadata("design:type", Date)
], Atividade.prototype, "dataInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataEntrega", type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Atividade.prototype, "dataEntrega", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tempoLimite", type: "double", nullable: true }),
    __metadata("design:type", Number)
], Atividade.prototype, "tempoLimite", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "codigoAtividade" }),
    __metadata("design:type", String)
], Atividade.prototype, "codigoAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "peso", type: "double", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Atividade.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "disponivel", default: false }),
    __metadata("design:type", Boolean)
], Atividade.prototype, "disponivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "permiteEdicao", default: true }),
    __metadata("design:type", Boolean)
], Atividade.prototype, "permiteEdicao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => usuario_1.default, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idAutor", referencedColumnName: "idUsuario" }),
    __metadata("design:type", usuario_1.default)
], Atividade.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_1.default, { eager: true, cascade: true }),
    (0, typeorm_1.JoinTable)({ name: "atividadeAlunosUsuario" }),
    __metadata("design:type", Array)
], Atividade.prototype, "alunos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => disciplina_1.default, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idDisciplina", referencedColumnName: "idDisciplina" }),
    __metadata("design:type", disciplina_1.default)
], Atividade.prototype, "disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => itemAtividade_1.default, { eager: true, cascade: true }),
    (0, typeorm_1.JoinTable)({ name: "atividadeItensAtividadeItemAtividade" }),
    __metadata("design:type", Array)
], Atividade.prototype, "itensAtividade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => curso_1.default, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idCurso", referencedColumnName: "idCurso" }),
    __metadata("design:type", curso_1.default)
], Atividade.prototype, "curso", void 0);
Atividade = __decorate([
    (0, typeorm_1.Entity)({ name: "atividade" })
], Atividade);
exports.default = Atividade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRpdmlkYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRpdmlkYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBU2lCO0FBQ2pCLDZDQUFzQztBQUN0QyxtREFBNEM7QUFDNUMsdUNBQWdDO0FBQ2hDLG1DQUE0QjtBQUc1QixJQUFxQixTQUFTLEdBQTlCLE1BQXFCLFNBQVUsU0FBUSxvQkFBVTtDQXFEaEQsQ0FBQTtBQW5EQztJQURDLElBQUEsZ0NBQXNCLEVBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7OzhDQUNyQjtBQUczQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBQyxDQUFDOztrREFDSjtBQUcvQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7O3FEQUNwQjtBQUdsQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBQyxDQUFDOztxREFDSjtBQUdsQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhCQUN6QixJQUFJOzZDQUFDO0FBR3hCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQzs4QkFDOUMsSUFBSTs4Q0FBQztBQUd6QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7OzhDQUNwQztBQUczQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBQyxDQUFDOztrREFDSjtBQUcvQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQzs7dUNBQzdDO0FBR3BCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUM7OzZDQUNuQjtBQUczQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDOztnREFDbEI7QUFJOUI7SUFGQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGlCQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ2pGLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLENBQUM7OEJBQ3JELGlCQUFPO3dDQUFDO0FBSXRCO0lBRkMsSUFBQSxvQkFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6RCxJQUFBLG1CQUFTLEVBQUMsRUFBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQzs7eUNBQ25CO0FBSXpCO0lBRkMsSUFBQSxtQkFBUyxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxvQkFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUNwRixJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxDQUFDOzhCQUN4RCxvQkFBVTs2Q0FBQztBQUk5QjtJQUZDLElBQUEsb0JBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDL0QsSUFBQSxtQkFBUyxFQUFDLEVBQUMsSUFBSSxFQUFFLHNDQUFzQyxFQUFDLENBQUM7O2lEQUNuQjtBQUl2QztJQUZDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsZUFBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUMvRSxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxDQUFDOzhCQUNuRCxlQUFLO3dDQUFDO0FBcERELFNBQVM7SUFEN0IsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO0dBQ1QsU0FBUyxDQXFEN0I7a0JBckRvQixTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBFbnRpdHksXHJcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcclxuICBDb2x1bW4sXHJcbiAgQmFzZUVudGl0eSxcclxuICBNYW55VG9NYW55LFxyXG4gIEpvaW5UYWJsZSxcclxuICBNYW55VG9PbmUsXHJcbiAgSm9pbkNvbHVtblxyXG59IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBEaXNjaXBsaW5hIGZyb20gXCIuL2Rpc2NpcGxpbmFcIjtcclxuaW1wb3J0IEl0ZW1BdGl2aWRhZGUgZnJvbSBcIi4vaXRlbUF0aXZpZGFkZVwiO1xyXG5pbXBvcnQgVXN1YXJpbyBmcm9tIFwiLi91c3VhcmlvXCI7XHJcbmltcG9ydCBDdXJzbyBmcm9tIFwiLi9jdXJzb1wiO1xyXG5cclxuQEVudGl0eSh7IG5hbWU6IFwiYXRpdmlkYWRlXCIgfSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXRpdmlkYWRlIGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oeyBuYW1lOiBcImlkQXRpdmlkYWRlXCIgfSlcclxuICBwdWJsaWMgaWRBdGl2aWRhZGU6IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwidGl0dWxvQXRpdmlkYWRlXCJ9KVxyXG4gIHB1YmxpYyB0aXR1bG9BdGl2aWRhZGU6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwic3VidGl0dWxvQXRpdmlkYWRlXCIsIG51bGxhYmxlOiB0cnVlfSlcclxuICBwdWJsaWMgc3VidGl0dWxvQXRpdmlkYWRlOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcImRlc2NyaWNhb0F0aXZpZGFkZVwifSlcclxuICBwdWJsaWMgZGVzY3JpY2FvQXRpdmlkYWRlOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcImRhdGFJbmljaW9cIiwgdHlwZTogJ2RhdGUnfSlcclxuICBwdWJsaWMgZGF0YUluaWNpbzogRGF0ZTtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiZGF0YUVudHJlZ2FcIiwgdHlwZTogJ3RpbWVzdGFtcCcsIG51bGxhYmxlOiB0cnVlfSlcclxuICBwdWJsaWMgZGF0YUVudHJlZ2E6IERhdGU7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcInRlbXBvTGltaXRlXCIsIHR5cGU6IFwiZG91YmxlXCIsIG51bGxhYmxlOiB0cnVlfSlcclxuICBwdWJsaWMgdGVtcG9MaW1pdGU6IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiY29kaWdvQXRpdmlkYWRlXCJ9KVxyXG4gIHB1YmxpYyBjb2RpZ29BdGl2aWRhZGU6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwicGVzb1wiLCB0eXBlOiBcImRvdWJsZVwiLCBwcmVjaXNpb246IDEwLCBzY2FsZTogMn0pXHJcbiAgcHVibGljIHBlc286IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiZGlzcG9uaXZlbFwiLCBkZWZhdWx0OiBmYWxzZX0pXHJcbiAgcHVibGljIGRpc3Bvbml2ZWw6IGJvb2xlYW47XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcInBlcm1pdGVFZGljYW9cIiwgZGVmYXVsdDogdHJ1ZX0pXHJcbiAgcHVibGljIHBlcm1pdGVFZGljYW86IGJvb2xlYW47XHJcblxyXG4gIEBNYW55VG9PbmUoKHR5cGUpID0+IFVzdWFyaW8sIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IHRydWUsIG9uRGVsZXRlOiBcIkNBU0NBREVcIiB9KVxyXG4gIEBKb2luQ29sdW1uKHsgbmFtZTogXCJpZEF1dG9yXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkVXN1YXJpb1wiIH0pXHJcbiAgcHVibGljIGF1dG9yOiBVc3VhcmlvO1xyXG5cclxuICBATWFueVRvTWFueSgoKSA9PiBVc3VhcmlvLCB7IGVhZ2VyOiB0cnVlLCBjYXNjYWRlOiB0cnVlIH0pXHJcbiAgQEpvaW5UYWJsZSh7bmFtZTogXCJhdGl2aWRhZGVBbHVub3NVc3VhcmlvXCJ9KVxyXG4gIHB1YmxpYyBhbHVub3M6IFVzdWFyaW9bXTtcclxuXHJcbiAgQE1hbnlUb09uZSgodHlwZSkgPT4gRGlzY2lwbGluYSwgeyBlYWdlcjogdHJ1ZSwgY2FzY2FkZTogdHJ1ZSwgb25EZWxldGU6IFwiQ0FTQ0FERVwiIH0pXHJcbiAgQEpvaW5Db2x1bW4oeyBuYW1lOiBcImlkRGlzY2lwbGluYVwiLCByZWZlcmVuY2VkQ29sdW1uTmFtZTogXCJpZERpc2NpcGxpbmFcIiB9KVxyXG4gIHB1YmxpYyBkaXNjaXBsaW5hOiBEaXNjaXBsaW5hO1xyXG4gIFxyXG4gIEBNYW55VG9NYW55KCgpID0+IEl0ZW1BdGl2aWRhZGUsIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IHRydWUgfSlcclxuICBASm9pblRhYmxlKHtuYW1lOiBcImF0aXZpZGFkZUl0ZW5zQXRpdmlkYWRlSXRlbUF0aXZpZGFkZVwifSlcclxuICBwdWJsaWMgaXRlbnNBdGl2aWRhZGU6IEl0ZW1BdGl2aWRhZGVbXTtcclxuXHJcbiAgQE1hbnlUb09uZSgodHlwZSkgPT4gQ3Vyc28sIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IHRydWUsIG9uRGVsZXRlOiBcIkNBU0NBREVcIiB9KVxyXG4gIEBKb2luQ29sdW1uKHsgbmFtZTogXCJpZEN1cnNvXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkQ3Vyc29cIiB9KVxyXG4gIHB1YmxpYyBjdXJzbzogQ3Vyc287XHJcbn1cclxuIl19