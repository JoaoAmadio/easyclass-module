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
const telefoneInstituicao_1 = require("./telefoneInstituicao");
let Instituicao = class Instituicao extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idInstituicao" }),
    __metadata("design:type", Number)
], Instituicao.prototype, "idInstituicao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "razaoSocial" }),
    __metadata("design:type", String)
], Instituicao.prototype, "razaoSocial", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nomeFantasia" }),
    __metadata("design:type", String)
], Instituicao.prototype, "nomeFantasia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "cpfCnpj" }),
    __metadata("design:type", String)
], Instituicao.prototype, "cpfCnpj", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "email" }),
    __metadata("design:type", String)
], Instituicao.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => telefoneInstituicao_1.default, telefoneUsuario => telefoneUsuario.instituicao, {
        eager: true,
        cascade: ["update", "insert"],
    }),
    __metadata("design:type", Array)
], Instituicao.prototype, "telefones", void 0);
Instituicao = __decorate([
    (0, typeorm_1.Unique)(["email", "cpfCnpj"]),
    (0, typeorm_1.Entity)({ name: "instituicao" })
], Instituicao);
exports.default = Instituicao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGl0dWljYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0aXR1aWNhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQU9pQjtBQUNqQiwrREFBd0Q7QUFJeEQsSUFBcUIsV0FBVyxHQUFoQyxNQUFxQixXQUFZLFNBQVEsb0JBQVU7Q0FxQmxELENBQUE7QUFuQkM7SUFEQyxJQUFBLGdDQUFzQixFQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxDQUFDOztrREFDckI7QUFHN0I7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7O2dEQUNMO0FBRzNCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxDQUFDOztpREFDTDtBQUc1QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs7NENBQ0w7QUFHdkI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7OzBDQUNMO0FBTXJCO0lBSkMsSUFBQSxtQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLDZCQUFtQixFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTtRQUNwRixLQUFLLEVBQUUsSUFBSTtRQUNYLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7S0FDOUIsQ0FBQzs7OENBQ3NDO0FBcEJyQixXQUFXO0lBRi9CLElBQUEsZ0JBQU0sRUFBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QixJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7R0FDWCxXQUFXLENBcUIvQjtrQkFyQm9CLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEVudGl0eSxcclxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxyXG4gIENvbHVtbixcclxuICBCYXNlRW50aXR5LFxyXG4gIFVuaXF1ZSxcclxuICBPbmVUb01hbnlcclxufSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgVGVsZWZvbmVJbnN0aXR1aWNhbyBmcm9tIFwiLi90ZWxlZm9uZUluc3RpdHVpY2FvXCI7XHJcblxyXG5AVW5pcXVlKFtcImVtYWlsXCIsIFwiY3BmQ25walwiXSlcclxuQEVudGl0eSh7IG5hbWU6IFwiaW5zdGl0dWljYW9cIiB9KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0aXR1aWNhbyBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKHsgbmFtZTogXCJpZEluc3RpdHVpY2FvXCIgfSlcclxuICBwdWJsaWMgaWRJbnN0aXR1aWNhbzogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJyYXphb1NvY2lhbFwiIH0pXHJcbiAgcHVibGljIHJhemFvU29jaWFsOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcIm5vbWVGYW50YXNpYVwiIH0pXHJcbiAgcHVibGljIG5vbWVGYW50YXNpYTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJjcGZDbnBqXCIgfSlcclxuICBwdWJsaWMgY3BmQ25wajogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJlbWFpbFwiIH0pXHJcbiAgcHVibGljIGVtYWlsOiBzdHJpbmc7XHJcbiAgXHJcbiAgQE9uZVRvTWFueSgoKSA9PiBUZWxlZm9uZUluc3RpdHVpY2FvLCB0ZWxlZm9uZVVzdWFyaW8gPT4gdGVsZWZvbmVVc3VhcmlvLmluc3RpdHVpY2FvLCB7XHJcbiAgICBlYWdlcjogdHJ1ZSxcclxuICAgIGNhc2NhZGU6IFtcInVwZGF0ZVwiLCBcImluc2VydFwiXSxcclxuICB9KVxyXG4gIHB1YmxpYyB0ZWxlZm9uZXM6IFRlbGVmb25lSW5zdGl0dWljYW9bXTtcclxufVxyXG4iXX0=