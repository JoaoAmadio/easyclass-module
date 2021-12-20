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
const curso_1 = require("./curso");
const disciplina_1 = require("./disciplina");
let DisciplinasCurso = class DisciplinasCurso extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], DisciplinasCurso.prototype, "disciplinaIdDisciplina", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], DisciplinasCurso.prototype, "cursoIdCurso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => disciplina_1.default, disciplina => disciplina.idDisciplina, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "disciplinaIdDisciplina" }),
    __metadata("design:type", disciplina_1.default)
], DisciplinasCurso.prototype, "disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_1.default, curso => curso.idCurso, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "cursoIdCurso" }),
    __metadata("design:type", curso_1.default)
], DisciplinasCurso.prototype, "curso", void 0);
DisciplinasCurso = __decorate([
    (0, typeorm_1.Unique)(["disciplinaIdDisciplina", "cursoIdCurso"]),
    (0, typeorm_1.Entity)({ name: "disciplinasCurso" })
], DisciplinasCurso);
exports.default = DisciplinasCurso;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY2lwbGluYXNDdXJzby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc2NpcGxpbmFzQ3Vyc28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkY7QUFDM0YsbUNBQTRCO0FBQzVCLDZDQUFzQztBQUl0QyxJQUFxQixnQkFBZ0IsR0FBckMsTUFBcUIsZ0JBQWlCLFNBQVEsb0JBQVU7Q0FldkQsQ0FBQTtBQVpHO0lBREMsSUFBQSx1QkFBYSxHQUFFOztnRUFDc0I7QUFHdEM7SUFEQyxJQUFBLHVCQUFhLEdBQUU7O3NEQUNZO0FBSTVCO0lBRkMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUN2SCxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQzs4QkFDNUIsb0JBQVU7b0RBQUM7QUFJOUI7SUFGQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsZUFBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDbkcsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDOzhCQUN2QixlQUFLOytDQUFDO0FBZEgsZ0JBQWdCO0lBRnBDLElBQUEsZ0JBQU0sRUFBQyxDQUFDLHdCQUF3QixFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQ2xELElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0dBQ2hCLGdCQUFnQixDQWVwQztrQkFmb0IsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSwgRW50aXR5LCBKb2luQ29sdW1uLCBNYW55VG9PbmUsIFByaW1hcnlDb2x1bW4sIFVuaXF1ZSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgQ3Vyc28gZnJvbSBcIi4vY3Vyc29cIjtcbmltcG9ydCBEaXNjaXBsaW5hIGZyb20gXCIuL2Rpc2NpcGxpbmFcIjtcblxuQFVuaXF1ZShbXCJkaXNjaXBsaW5hSWREaXNjaXBsaW5hXCIsIFwiY3Vyc29JZEN1cnNvXCJdKVxuQEVudGl0eSh7IG5hbWU6IFwiZGlzY2lwbGluYXNDdXJzb1wiIH0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjaXBsaW5hc0N1cnNvIGV4dGVuZHMgQmFzZUVudGl0eSB7XG4gICAgXG4gICAgQFByaW1hcnlDb2x1bW4oKVxuICAgIHB1YmxpYyBkaXNjaXBsaW5hSWREaXNjaXBsaW5hOiBudW1iZXI7XG5cbiAgICBAUHJpbWFyeUNvbHVtbigpXG4gICAgcHVibGljIGN1cnNvSWRDdXJzbzogbnVtYmVyO1xuXG4gICAgQE1hbnlUb09uZSgoKSA9PiBEaXNjaXBsaW5hLCBkaXNjaXBsaW5hID0+IGRpc2NpcGxpbmEuaWREaXNjaXBsaW5hLCB7IGVhZ2VyOiB0cnVlLCBjYXNjYWRlOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6IFwiZGlzY2lwbGluYUlkRGlzY2lwbGluYVwiIH0pXG4gICAgcHVibGljIGRpc2NpcGxpbmE6IERpc2NpcGxpbmE7XG5cbiAgICBATWFueVRvT25lKCgpID0+IEN1cnNvLCBjdXJzbyA9PiBjdXJzby5pZEN1cnNvLCB7IGVhZ2VyOiB0cnVlLCBjYXNjYWRlOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6IFwiY3Vyc29JZEN1cnNvXCIgfSlcbiAgICBwdWJsaWMgY3Vyc286IEN1cnNvO1xufSJdfQ==