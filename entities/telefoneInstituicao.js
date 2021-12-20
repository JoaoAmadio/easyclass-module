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
const instituicao_1 = require("./instituicao");
let TelefoneInstituicao = class TelefoneInstituicao extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idTelefone" }),
    __metadata("design:type", Number)
], TelefoneInstituicao.prototype, "idTelefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "descricao" }),
    __metadata("design:type", String)
], TelefoneInstituicao.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor" }),
    __metadata("design:type", String)
], TelefoneInstituicao.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => instituicao_1.default, { eager: false, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idInstituicao", referencedColumnName: "idInstituicao" }),
    __metadata("design:type", instituicao_1.default)
], TelefoneInstituicao.prototype, "instituicao", void 0);
TelefoneInstituicao = __decorate([
    (0, typeorm_1.Entity)({ name: "telefoneInstituicao" })
], TelefoneInstituicao);
exports.default = TelefoneInstituicao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWZvbmVJbnN0aXR1aWNhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlbGVmb25lSW5zdGl0dWljYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FPaUI7QUFDakIsK0NBQXdDO0FBR3hDLElBQXFCLG1CQUFtQixHQUF4QyxNQUFxQixtQkFBb0IsU0FBUSxvQkFBVTtDQWExRCxDQUFBO0FBWEM7SUFEQyxJQUFBLGdDQUFzQixFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDOzt1REFDckI7QUFHMUI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7O3NEQUNMO0FBR3pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDOztrREFDTDtBQUlyQjtJQUZDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMscUJBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDdEYsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQUUsQ0FBQzs4QkFDekQscUJBQVc7d0RBQUM7QUFaYixtQkFBbUI7SUFEdkMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLENBQUM7R0FDbkIsbUJBQW1CLENBYXZDO2tCQWJvQixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEVudGl0eSxcclxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxyXG4gIENvbHVtbixcclxuICBCYXNlRW50aXR5LFxyXG4gIEpvaW5Db2x1bW4sXHJcbiAgTWFueVRvT25lXHJcbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IEluc3RpdHVpY2FvIGZyb20gXCIuL2luc3RpdHVpY2FvXCI7XHJcblxyXG5ARW50aXR5KHsgbmFtZTogXCJ0ZWxlZm9uZUluc3RpdHVpY2FvXCIgfSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZWZvbmVJbnN0aXR1aWNhbyBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKHsgbmFtZTogXCJpZFRlbGVmb25lXCIgfSlcclxuICBwdWJsaWMgaWRUZWxlZm9uZTogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJkZXNjcmljYW9cIiB9KVxyXG4gIHB1YmxpYyBkZXNjcmljYW86IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwidmFsb3JcIiB9KVxyXG4gIHB1YmxpYyB2YWxvcjogc3RyaW5nO1xyXG5cclxuICBATWFueVRvT25lKCh0eXBlKSA9PiBJbnN0aXR1aWNhbywgeyBlYWdlcjogZmFsc2UsIGNhc2NhZGU6IHRydWUsIG9uRGVsZXRlOiBcIkNBU0NBREVcIiB9KVxyXG4gIEBKb2luQ29sdW1uKHsgbmFtZTogXCJpZEluc3RpdHVpY2FvXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkSW5zdGl0dWljYW9cIiB9KVxyXG4gIHB1YmxpYyBpbnN0aXR1aWNhbzogSW5zdGl0dWljYW87XHJcbn1cclxuIl19