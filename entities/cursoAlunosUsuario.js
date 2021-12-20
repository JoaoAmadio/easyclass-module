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
const usuario_1 = require("./usuario");
let CursoUsuario = class CursoUsuario extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CursoUsuario.prototype, "cursoIdCurso", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], CursoUsuario.prototype, "usuarioIdUsuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_1.default, curso => curso.idCurso, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "cursoIdCurso" }),
    __metadata("design:type", curso_1.default)
], CursoUsuario.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_1.default, usuario => usuario.idUsuario, { eager: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "usuarioIdUsuario" }),
    __metadata("design:type", usuario_1.default)
], CursoUsuario.prototype, "usuario", void 0);
CursoUsuario = __decorate([
    (0, typeorm_1.Unique)(["cursoIdCurso", "usuarioIdUsuario"]),
    (0, typeorm_1.Entity)({ name: "cursoAlunosUsuario" })
], CursoUsuario);
exports.default = CursoUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Vyc29BbHVub3NVc3VhcmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3Vyc29BbHVub3NVc3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQTJGO0FBQzNGLG1DQUE0QjtBQUM1Qix1Q0FBZ0M7QUFJaEMsSUFBcUIsWUFBWSxHQUFqQyxNQUFxQixZQUFhLFNBQVEsb0JBQVU7Q0FlbkQsQ0FBQTtBQVpHO0lBREMsSUFBQSx1QkFBYSxHQUFFOztrREFDWTtBQUc1QjtJQURDLElBQUEsdUJBQWEsR0FBRTs7c0RBQ2dCO0FBSWhDO0lBRkMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGVBQUssRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ25HLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsQ0FBQzs4QkFDdkIsZUFBSzsyQ0FBQztBQUlwQjtJQUZDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxpQkFBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDM0csSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUM7OEJBQ3pCLGlCQUFPOzZDQUFDO0FBZFAsWUFBWTtJQUZoQyxJQUFBLGdCQUFNLEVBQUMsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUM1QyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQztHQUNsQixZQUFZLENBZWhDO2tCQWZvQixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSwgRW50aXR5LCBKb2luQ29sdW1uLCBNYW55VG9PbmUsIFByaW1hcnlDb2x1bW4sIFVuaXF1ZSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgQ3Vyc28gZnJvbSBcIi4vY3Vyc29cIjtcbmltcG9ydCBVc3VhcmlvIGZyb20gXCIuL3VzdWFyaW9cIjtcblxuQFVuaXF1ZShbXCJjdXJzb0lkQ3Vyc29cIiwgXCJ1c3VhcmlvSWRVc3VhcmlvXCJdKVxuQEVudGl0eSh7IG5hbWU6IFwiY3Vyc29BbHVub3NVc3VhcmlvXCIgfSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnNvVXN1YXJpbyBleHRlbmRzIEJhc2VFbnRpdHkge1xuICAgIFxuICAgIEBQcmltYXJ5Q29sdW1uKClcbiAgICBwdWJsaWMgY3Vyc29JZEN1cnNvOiBudW1iZXI7XG5cbiAgICBAUHJpbWFyeUNvbHVtbigpXG4gICAgcHVibGljIHVzdWFyaW9JZFVzdWFyaW86IG51bWJlcjtcblxuICAgIEBNYW55VG9PbmUoKCkgPT4gQ3Vyc28sIGN1cnNvID0+IGN1cnNvLmlkQ3Vyc28sIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IHRydWUsIG9uRGVsZXRlOiBcIkNBU0NBREVcIiB9KVxuICAgIEBKb2luQ29sdW1uKHsgbmFtZTogXCJjdXJzb0lkQ3Vyc29cIiB9KVxuICAgIHB1YmxpYyBjdXJzbzogQ3Vyc287XG5cbiAgICBATWFueVRvT25lKCgpID0+IFVzdWFyaW8sIHVzdWFyaW8gPT4gdXN1YXJpby5pZFVzdWFyaW8sIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IHRydWUsIG9uRGVsZXRlOiBcIkNBU0NBREVcIiB9KVxuICAgIEBKb2luQ29sdW1uKHsgbmFtZTogXCJ1c3VhcmlvSWRVc3VhcmlvXCIgfSlcbiAgICBwdWJsaWMgdXN1YXJpbzogVXN1YXJpbztcbn0iXX0=