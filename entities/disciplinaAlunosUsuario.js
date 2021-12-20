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
const usuario_1 = require("./usuario");
let DisciplinaUsuario = class DisciplinaUsuario extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], DisciplinaUsuario.prototype, "disciplinaIdDisciplina", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], DisciplinaUsuario.prototype, "usuarioIdUsuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => disciplina_1.default, disciplina => disciplina.idDisciplina, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "disciplinaIdDisciplina" }),
    __metadata("design:type", disciplina_1.default)
], DisciplinaUsuario.prototype, "disciplina", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.default, usuario => usuario.idUsuario, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "usuarioIdUsuario" }),
    __metadata("design:type", usuario_1.default)
], DisciplinaUsuario.prototype, "usuario", void 0);
DisciplinaUsuario = __decorate([
    (0, typeorm_1.Unique)(["disciplinaIdDisciplina", "usuarioIdUsuario"]),
    (0, typeorm_1.Entity)({ name: "disciplinaAlunosUsuario" })
], DisciplinaUsuario);
exports.default = DisciplinaUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzY2lwbGluYUFsdW5vc1VzdWFyaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNjaXBsaW5hQWx1bm9zVXN1YXJpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUEyRjtBQUMzRiw2Q0FBc0M7QUFDdEMsdUNBQWdDO0FBSWhDLElBQXFCLGlCQUFpQixHQUF0QyxNQUFxQixpQkFBa0IsU0FBUSxvQkFBVTtDQWV4RCxDQUFBO0FBWkc7SUFEQyxJQUFBLHVCQUFhLEdBQUU7O2lFQUNzQjtBQUd0QztJQURDLElBQUEsdUJBQWEsR0FBRTs7MkRBQ2dCO0FBSWhDO0lBRkMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUN2SCxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsQ0FBQzs4QkFDNUIsb0JBQVU7cURBQUM7QUFJOUI7SUFGQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQzNHLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxDQUFDOzhCQUN6QixpQkFBTztrREFBQztBQWRQLGlCQUFpQjtJQUZyQyxJQUFBLGdCQUFNLEVBQUMsQ0FBQyx3QkFBd0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxDQUFDO0dBQ3ZCLGlCQUFpQixDQWVyQztrQkFmb0IsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSwgRW50aXR5LCBKb2luQ29sdW1uLCBNYW55VG9PbmUsIFByaW1hcnlDb2x1bW4sIFVuaXF1ZSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgRGlzY2lwbGluYSBmcm9tIFwiLi9kaXNjaXBsaW5hXCI7XG5pbXBvcnQgVXN1YXJpbyBmcm9tIFwiLi91c3VhcmlvXCI7XG5cbkBVbmlxdWUoW1wiZGlzY2lwbGluYUlkRGlzY2lwbGluYVwiLCBcInVzdWFyaW9JZFVzdWFyaW9cIl0pXG5ARW50aXR5KHsgbmFtZTogXCJkaXNjaXBsaW5hQWx1bm9zVXN1YXJpb1wiIH0pXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjaXBsaW5hVXN1YXJpbyBleHRlbmRzIEJhc2VFbnRpdHkge1xuXG4gICAgQFByaW1hcnlDb2x1bW4oKVxuICAgIHB1YmxpYyBkaXNjaXBsaW5hSWREaXNjaXBsaW5hOiBudW1iZXI7XG5cbiAgICBAUHJpbWFyeUNvbHVtbigpXG4gICAgcHVibGljIHVzdWFyaW9JZFVzdWFyaW86IG51bWJlcjtcblxuICAgIEBNYW55VG9PbmUoKCkgPT4gRGlzY2lwbGluYSwgZGlzY2lwbGluYSA9PiBkaXNjaXBsaW5hLmlkRGlzY2lwbGluYSwgeyBlYWdlcjogdHJ1ZSwgY2FzY2FkZTogdHJ1ZSwgb25EZWxldGU6IFwiQ0FTQ0FERVwiIH0pXG4gICAgQEpvaW5Db2x1bW4oeyBuYW1lOiBcImRpc2NpcGxpbmFJZERpc2NpcGxpbmFcIiB9KVxuICAgIHB1YmxpYyBkaXNjaXBsaW5hOiBEaXNjaXBsaW5hO1xuXG4gICAgQE1hbnlUb09uZSgoKSA9PiBVc3VhcmlvLCB1c3VhcmlvID0+IHVzdWFyaW8uaWRVc3VhcmlvLCB7IGVhZ2VyOiB0cnVlLCBjYXNjYWRlOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6IFwidXN1YXJpb0lkVXN1YXJpb1wiIH0pXG4gICAgcHVibGljIHVzdWFyaW86IFVzdWFyaW87XG59Il19