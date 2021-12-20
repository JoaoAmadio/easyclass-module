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
const atividade_1 = require("./atividade");
const usuario_1 = require("./usuario");
let AtividadeUsuario = class AtividadeUsuario extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AtividadeUsuario.prototype, "atividadeIdAtividade", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AtividadeUsuario.prototype, "usuarioIdUsuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => atividade_1.default, { eager: true, cascade: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: "atividadeIdAtividade", referencedColumnName: "idAtividade" }),
    __metadata("design:type", atividade_1.default)
], AtividadeUsuario.prototype, "atividade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => usuario_1.default, { eager: true, cascade: true, onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: "usuarioIdUsuario", referencedColumnName: "idUsuario" }),
    __metadata("design:type", usuario_1.default)
], AtividadeUsuario.prototype, "usuario", void 0);
AtividadeUsuario = __decorate([
    (0, typeorm_1.Unique)(["atividadeIdAtividade", "usuarioIdUsuario"]),
    (0, typeorm_1.Entity)({ name: "atividadeAlunosUsuario" })
], AtividadeUsuario);
exports.default = AtividadeUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRpdmlkYWRlQWx1bm9zVXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0aXZpZGFkZUFsdW5vc1VzdWFyaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkY7QUFDM0YsMkNBQW9DO0FBQ3BDLHVDQUFnQztBQUloQyxJQUFxQixnQkFBZ0IsR0FBckMsTUFBcUIsZ0JBQWlCLFNBQVEsb0JBQVU7Q0FldkQsQ0FBQTtBQVpHO0lBREMsSUFBQSx1QkFBYSxHQUFFOzs4REFDb0I7QUFHcEM7SUFEQyxJQUFBLHVCQUFhLEdBQUU7OzBEQUNnQjtBQUloQztJQUZDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsbUJBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDbkYsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLGFBQWEsRUFBRSxDQUFDOzhCQUNoRSxtQkFBUzttREFBQztBQUk1QjtJQUZDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsaUJBQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDakYsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxDQUFDOzhCQUM1RCxpQkFBTztpREFBQztBQWRQLGdCQUFnQjtJQUZwQyxJQUFBLGdCQUFNLEVBQUMsQ0FBQyxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3BELElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSx3QkFBd0IsRUFBRSxDQUFDO0dBQ3RCLGdCQUFnQixDQWVwQztrQkFmb0IsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUVudGl0eSwgRW50aXR5LCBKb2luQ29sdW1uLCBNYW55VG9PbmUsIFByaW1hcnlDb2x1bW4sIFVuaXF1ZSB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgQXRpdmlkYWRlIGZyb20gXCIuL2F0aXZpZGFkZVwiO1xuaW1wb3J0IFVzdWFyaW8gZnJvbSBcIi4vdXN1YXJpb1wiO1xuXG5AVW5pcXVlKFtcImF0aXZpZGFkZUlkQXRpdmlkYWRlXCIsIFwidXN1YXJpb0lkVXN1YXJpb1wiXSlcbkBFbnRpdHkoeyBuYW1lOiBcImF0aXZpZGFkZUFsdW5vc1VzdWFyaW9cIiB9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXRpdmlkYWRlVXN1YXJpbyBleHRlbmRzIEJhc2VFbnRpdHkge1xuXG4gICAgQFByaW1hcnlDb2x1bW4oKVxuICAgIHB1YmxpYyBhdGl2aWRhZGVJZEF0aXZpZGFkZTogbnVtYmVyO1xuXG4gICAgQFByaW1hcnlDb2x1bW4oKVxuICAgIHB1YmxpYyB1c3VhcmlvSWRVc3VhcmlvOiBudW1iZXI7XG5cbiAgICBATWFueVRvT25lKCh0eXBlKSA9PiBBdGl2aWRhZGUsIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IHRydWUsIG9uRGVsZXRlOiAnQ0FTQ0FERScgfSlcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6IFwiYXRpdmlkYWRlSWRBdGl2aWRhZGVcIiwgcmVmZXJlbmNlZENvbHVtbk5hbWU6IFwiaWRBdGl2aWRhZGVcIiB9KVxuICAgIHB1YmxpYyBhdGl2aWRhZGU6IEF0aXZpZGFkZTtcblxuICAgIEBNYW55VG9PbmUoKHR5cGUpID0+IFVzdWFyaW8sIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IHRydWUsIG9uRGVsZXRlOiAnQ0FTQ0FERScgfSlcbiAgICBASm9pbkNvbHVtbih7IG5hbWU6IFwidXN1YXJpb0lkVXN1YXJpb1wiLCByZWZlcmVuY2VkQ29sdW1uTmFtZTogXCJpZFVzdWFyaW9cIiB9KVxuICAgIHB1YmxpYyB1c3VhcmlvOiBVc3VhcmlvO1xufSJdfQ==