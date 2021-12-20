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
const bcrypt = require("bcryptjs");
const genero_enum_1 = require("../enums/genero-enum");
const grupo_1 = require("./grupo");
const permissao_1 = require("./permissao");
const telefoneUsuario_1 = require("./telefoneUsuario");
let Usuario = class Usuario extends typeorm_1.BaseEntity {
    criptografaSenha() {
        this.senha = bcrypt.hashSync(this.senha, 8);
    }
    verificaSenha(senhaDescriptografada) {
        return bcrypt.compareSync(senhaDescriptografada, this.senha);
    }
    temPermissao(permissao) {
        if (permissao instanceof permissao_1.default) {
            return !!this.grupo.permissoes.find((item) => item.idPermissao === permissao.idPermissao && item.ativo);
        }
        else {
            return !!this.grupo.permissoes.find((item) => item.valor == permissao && item.ativo);
        }
    }
    estaNoGrupo(grupo) {
        return this.grupo.idGrupo === grupo.idGrupo;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idUsuario" }),
    __metadata("design:type", Number)
], Usuario.prototype, "idUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nomeUsuario" }),
    __metadata("design:type", String)
], Usuario.prototype, "nomeUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ultimoNomeUsuario" }),
    __metadata("design:type", String)
], Usuario.prototype, "ultimoNome", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "email" }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "senha", nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataNascimento", nullable: true }),
    __metadata("design:type", Date)
], Usuario.prototype, "dataNascimento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "dataCadastro", nullable: false }),
    __metadata("design:type", Date)
], Usuario.prototype, "dataCadastro", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cpf", nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ra" }),
    __metadata("design:type", String)
], Usuario.prototype, "ra", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ultimoLogin", nullable: true }),
    __metadata("design:type", Date)
], Usuario.prototype, "ultimoLogin", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "genero", default: genero_enum_1.GeneroEnum.FEMININO, nullable: true }),
    __metadata("design:type", String)
], Usuario.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => grupo_1.default, { eager: true, cascade: true, onDelete: "SET NULL" }),
    (0, typeorm_1.JoinColumn)({ name: "idGrupo", referencedColumnName: "idGrupo" }),
    __metadata("design:type", grupo_1.default)
], Usuario.prototype, "grupo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => telefoneUsuario_1.default, telefoneUsuario => telefoneUsuario.usuario, {
        eager: true,
        cascade: ["update", "insert"]
    }),
    __metadata("design:type", Array)
], Usuario.prototype, "telefones", void 0);
Usuario = __decorate([
    (0, typeorm_1.Unique)(["email", "cpf", "ra"]),
    (0, typeorm_1.Entity)({ name: "usuario" })
], Usuario);
exports.default = Usuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzdWFyaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FVaUI7QUFDakIsbUNBQW1DO0FBQ25DLHNEQUFrRDtBQUNsRCxtQ0FBNEI7QUFDNUIsMkNBQW9DO0FBQ3BDLHVEQUFnRDtBQUloRCxJQUFxQixPQUFPLEdBQTVCLE1BQXFCLE9BQVEsU0FBUSxvQkFBVTtJQTRDN0MsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxxQkFBNkI7UUFDekMsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQWM7UUFFekIsSUFBSSxTQUFTLFlBQVksbUJBQVMsRUFBRTtZQUNsQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2pDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEtBQUssQ0FDbkUsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ2pDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUNoRCxDQUFDO1NBQ0g7SUFFSCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzlDLENBQUM7Q0FDRixDQUFBO0FBbkVDO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQzs7MENBQ3JCO0FBR3pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDOzs0Q0FDTDtBQUczQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxDQUFDOzsyQ0FDWjtBQUcxQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7c0NBQ0w7QUFHckI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7c0NBQ3JCO0FBR3JCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFDNUIsSUFBSTsrQ0FBQztBQUc1QjtJQURDLElBQUEsMEJBQWdCLEVBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQzs4QkFDdkMsSUFBSTs2Q0FBQztBQUcxQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDckI7QUFHbkI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O21DQUNMO0FBR2xCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OEJBQzVCLElBQUk7NENBQUM7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSx3QkFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3VDQUMvQztBQUkxQjtJQUZDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsZUFBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUNoRixJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxDQUFDOzhCQUNuRCxlQUFLO3NDQUFDO0FBTXBCO0lBSkMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUFlLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1FBQzVFLEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztLQUM5QixDQUFDOzswQ0FDa0M7QUExQ2pCLE9BQU87SUFGM0IsSUFBQSxnQkFBTSxFQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7R0FDUCxPQUFPLENBcUUzQjtrQkFyRW9CLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEVudGl0eSxcclxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxyXG4gIENvbHVtbixcclxuICBCYXNlRW50aXR5LFxyXG4gIEpvaW5Db2x1bW4sXHJcbiAgVW5pcXVlLFxyXG4gIENyZWF0ZURhdGVDb2x1bW4sXHJcbiAgTWFueVRvT25lLFxyXG4gIE9uZVRvTWFueVxyXG59IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuaW1wb3J0IHsgR2VuZXJvRW51bSB9IGZyb20gXCIuLi9lbnVtcy9nZW5lcm8tZW51bVwiO1xyXG5pbXBvcnQgR3J1cG8gZnJvbSBcIi4vZ3J1cG9cIjtcclxuaW1wb3J0IFBlcm1pc3NhbyBmcm9tIFwiLi9wZXJtaXNzYW9cIjtcclxuaW1wb3J0IFRlbGVmb25lVXN1YXJpbyBmcm9tIFwiLi90ZWxlZm9uZVVzdWFyaW9cIjtcclxuXHJcbkBVbmlxdWUoW1wiZW1haWxcIiwgXCJjcGZcIiwgXCJyYVwiXSlcclxuQEVudGl0eSh7IG5hbWU6IFwidXN1YXJpb1wiIH0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzdWFyaW8gZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbih7IG5hbWU6IFwiaWRVc3VhcmlvXCIgfSlcclxuICBwdWJsaWMgaWRVc3VhcmlvOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcIm5vbWVVc3VhcmlvXCIgfSlcclxuICBwdWJsaWMgbm9tZVVzdWFyaW86IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwidWx0aW1vTm9tZVVzdWFyaW9cIiB9KVxyXG4gIHB1YmxpYyB1bHRpbW9Ob21lOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcImVtYWlsXCIgfSlcclxuICBwdWJsaWMgZW1haWw6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwic2VuaGFcIiwgbnVsbGFibGU6IHRydWUgfSlcclxuICBwdWJsaWMgc2VuaGE6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiZGF0YU5hc2NpbWVudG9cIiwgbnVsbGFibGU6IHRydWUgfSlcclxuICBwdWJsaWMgZGF0YU5hc2NpbWVudG86IERhdGU7XHJcblxyXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgbmFtZTogXCJkYXRhQ2FkYXN0cm9cIiwgbnVsbGFibGU6IGZhbHNlIH0pXHJcbiAgcHVibGljIGRhdGFDYWRhc3RybzogRGF0ZTtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiY3BmXCIsIG51bGxhYmxlOiB0cnVlIH0pXHJcbiAgcHVibGljIGNwZjogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJyYVwiIH0pXHJcbiAgcHVibGljIHJhOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcInVsdGltb0xvZ2luXCIsIG51bGxhYmxlOiB0cnVlIH0pXHJcbiAgcHVibGljIHVsdGltb0xvZ2luOiBEYXRlO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJnZW5lcm9cIiwgZGVmYXVsdDogR2VuZXJvRW51bS5GRU1JTklOTywgbnVsbGFibGU6IHRydWUgfSlcclxuICBwdWJsaWMgZ2VuZXJvOiBHZW5lcm9FbnVtO1xyXG5cclxuICBATWFueVRvT25lKCh0eXBlKSA9PiBHcnVwbywgeyBlYWdlcjogdHJ1ZSwgY2FzY2FkZTogdHJ1ZSwgb25EZWxldGU6IFwiU0VUIE5VTExcIiB9KVxyXG4gIEBKb2luQ29sdW1uKHsgbmFtZTogXCJpZEdydXBvXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkR3J1cG9cIiB9KVxyXG4gIHB1YmxpYyBncnVwbzogR3J1cG87XHJcblxyXG4gIEBPbmVUb01hbnkoKCkgPT4gVGVsZWZvbmVVc3VhcmlvLCB0ZWxlZm9uZVVzdWFyaW8gPT4gdGVsZWZvbmVVc3VhcmlvLnVzdWFyaW8sIHtcclxuICAgIGVhZ2VyOiB0cnVlLFxyXG4gICAgY2FzY2FkZTogW1widXBkYXRlXCIsIFwiaW5zZXJ0XCJdXHJcbiAgfSlcclxuICBwdWJsaWMgdGVsZWZvbmVzOiBUZWxlZm9uZVVzdWFyaW9bXTtcclxuXHJcbiAgY3JpcHRvZ3JhZmFTZW5oYSgpIHtcclxuICAgIHRoaXMuc2VuaGEgPSBiY3J5cHQuaGFzaFN5bmModGhpcy5zZW5oYSwgOCk7XHJcbiAgfVxyXG5cclxuICB2ZXJpZmljYVNlbmhhKHNlbmhhRGVzY3JpcHRvZ3JhZmFkYTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYmNyeXB0LmNvbXBhcmVTeW5jKHNlbmhhRGVzY3JpcHRvZ3JhZmFkYSwgdGhpcy5zZW5oYSk7XHJcbiAgfVxyXG5cclxuICB0ZW1QZXJtaXNzYW8ocGVybWlzc2FvOiBhbnkpIHtcclxuXHJcbiAgICBpZiAocGVybWlzc2FvIGluc3RhbmNlb2YgUGVybWlzc2FvKSB7XHJcbiAgICAgIHJldHVybiAhIXRoaXMuZ3J1cG8ucGVybWlzc29lcy5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkUGVybWlzc2FvID09PSBwZXJtaXNzYW8uaWRQZXJtaXNzYW8gJiYgaXRlbS5hdGl2b1xyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICEhdGhpcy5ncnVwby5wZXJtaXNzb2VzLmZpbmQoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udmFsb3IgPT0gcGVybWlzc2FvICYmIGl0ZW0uYXRpdm9cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuXHJcbiAgZXN0YU5vR3J1cG8oZ3J1cG86IEdydXBvKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ncnVwby5pZEdydXBvID09PSBncnVwby5pZEdydXBvO1xyXG4gIH1cclxufVxyXG4iXX0=