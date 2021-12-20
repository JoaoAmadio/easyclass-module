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
let Disciplina = class Disciplina extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idDisciplina" }),
    __metadata("design:type", Number)
], Disciplina.prototype, "idDisciplina", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nomeDisciplina" }),
    __metadata("design:type", String)
], Disciplina.prototype, "nomeDisciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => usuario_1.default, { eager: true, nullable: true, onDelete: "SET NULL" }),
    (0, typeorm_1.JoinColumn)({ name: "idProfessor", referencedColumnName: "idUsuario" }),
    __metadata("design:type", usuario_1.default)
], Disciplina.prototype, "professor", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => usuario_1.default, { eager: true }),
    (0, typeorm_1.JoinTable)({ name: "disciplinaAlunosUsuario" }),
    __metadata("design:type", Array)
], Disciplina.prototype, "alunos", void 0);
Disciplina = __decorate([
    (0, typeorm_1.Entity)({ name: "disciplina" })
], Disciplina);
exports.default = Disciplina;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY2lwbGluYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpc2NpcGxpbmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FPaUI7QUFDakIsdUNBQWdDO0FBR2hDLElBQU0sVUFBVSxHQUFoQixNQUFNLFVBQVcsU0FBUSxvQkFBVTtDQWNsQyxDQUFBO0FBWkM7SUFEQyxJQUFBLGdDQUFzQixFQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDOztnREFDckI7QUFHNUI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzs7a0RBQ0w7QUFJOUI7SUFGQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGlCQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxDQUFDO0lBQ25GLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLENBQUM7OEJBQ3JELGlCQUFPOzZDQUFDO0FBSTFCO0lBRkMsSUFBQSxvQkFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDMUMsSUFBQSxtQkFBUyxFQUFDLEVBQUMsSUFBSSxFQUFFLHlCQUF5QixFQUFDLENBQUM7OzBDQUNwQjtBQWJyQixVQUFVO0lBRGYsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDO0dBQ3pCLFVBQVUsQ0FjZjtBQUVELGtCQUFlLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRW50aXR5LFxyXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXHJcbiAgQ29sdW1uLFxyXG4gIEJhc2VFbnRpdHksXHJcbiAgTWFueVRvTWFueSxcclxuICBKb2luVGFibGUsIE1hbnlUb09uZSwgSm9pbkNvbHVtblxyXG59IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBVc3VhcmlvIGZyb20gXCIuL3VzdWFyaW9cIjtcclxuXHJcbkBFbnRpdHkoeyBuYW1lOiBcImRpc2NpcGxpbmFcIiB9KVxyXG5jbGFzcyBEaXNjaXBsaW5hIGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oeyBuYW1lOiBcImlkRGlzY2lwbGluYVwiIH0pXHJcbiAgcHVibGljIGlkRGlzY2lwbGluYTogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJub21lRGlzY2lwbGluYVwiIH0pXHJcbiAgcHVibGljIG5vbWVEaXNjaXBsaW5hOiBzdHJpbmc7XHJcblxyXG4gIEBNYW55VG9PbmUoKHR5cGUpID0+IFVzdWFyaW8sIHsgZWFnZXI6IHRydWUsIG51bGxhYmxlOiB0cnVlLCBvbkRlbGV0ZTogXCJTRVQgTlVMTFwiIH0pXHJcbiAgQEpvaW5Db2x1bW4oeyBuYW1lOiBcImlkUHJvZmVzc29yXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkVXN1YXJpb1wiIH0pXHJcbiAgcHVibGljIHByb2Zlc3NvcjogVXN1YXJpbztcclxuXHJcbiAgQE1hbnlUb01hbnkoKCkgPT4gVXN1YXJpbywgeyBlYWdlcjogdHJ1ZSB9KVxyXG4gIEBKb2luVGFibGUoe25hbWU6IFwiZGlzY2lwbGluYUFsdW5vc1VzdWFyaW9cIn0pXHJcbiAgcHVibGljIGFsdW5vczogVXN1YXJpb1tdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNjaXBsaW5hO1xyXG4iXX0=