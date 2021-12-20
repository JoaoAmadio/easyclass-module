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
const correcaoRespostaAtividadeItem_1 = require("./correcaoRespostaAtividadeItem");
const respostaAtividade_1 = require("./respostaAtividade");
const usuario_1 = require("./usuario");
let CorrecaoRespostaAtividade = class CorrecaoRespostaAtividade extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idCorrecaoRespostaAtividade" }),
    __metadata("design:type", Number)
], CorrecaoRespostaAtividade.prototype, "idCorrecaoRespostaAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pesoTotal", nullable: true, type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CorrecaoRespostaAtividade.prototype, "pesoTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "observacao", nullable: true, type: 'text' }),
    __metadata("design:type", String)
], CorrecaoRespostaAtividade.prototype, "observacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataCorrecaoAtividade", type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CorrecaoRespostaAtividade.prototype, "dataCorrecaoAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataEntregaCorrecao", type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CorrecaoRespostaAtividade.prototype, "dataEntregaCorrecao", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => respostaAtividade_1.default, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idRespostaAtividade", referencedColumnName: "idRespostaAtividade" }),
    __metadata("design:type", respostaAtividade_1.default)
], CorrecaoRespostaAtividade.prototype, "respostaAtividade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => usuario_1.default, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idAutor", referencedColumnName: "idUsuario" }),
    __metadata("design:type", usuario_1.default)
], CorrecaoRespostaAtividade.prototype, "autor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => correcaoRespostaAtividadeItem_1.default, obj => obj.correcaoRespostaAtividade, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], CorrecaoRespostaAtividade.prototype, "correcaoAtividadeItens", void 0);
CorrecaoRespostaAtividade = __decorate([
    (0, typeorm_1.Entity)({ name: "correcaoRespostaAtividade" })
], CorrecaoRespostaAtividade);
exports.default = CorrecaoRespostaAtividade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxQ0FRaUI7QUFDakIsbUZBQTRFO0FBQzVFLDJEQUFvRDtBQUNwRCx1Q0FBZ0M7QUFHaEMsSUFBcUIseUJBQXlCLEdBQTlDLE1BQXFCLHlCQUEwQixTQUFRLG9CQUFVO0NBMEJoRSxDQUFBO0FBeEJDO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxDQUFDOzs4RUFDckI7QUFHM0M7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUMsQ0FBQzs7NERBQzlEO0FBR3pCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs7NkRBQ2xDO0FBRzFCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDOzhCQUM5QyxJQUFJO3dFQUFDO0FBR25DO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDOzhCQUM5QyxJQUFJO3NFQUFDO0FBSWpDO0lBRkMsSUFBQSxtQkFBUyxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQywyQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxDQUFDO0lBQzNFLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxDQUFDOzhCQUMvRCwyQkFBaUI7b0VBQUM7QUFJNUM7SUFGQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGlCQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUNsRSxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxDQUFDOzhCQUNyRCxpQkFBTzt3REFBQztBQUd0QjtJQURDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsdUNBQTZCLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7eUVBQ3pEO0FBekI1Qyx5QkFBeUI7SUFEN0MsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLDJCQUEyQixFQUFFLENBQUM7R0FDekIseUJBQXlCLENBMEI3QztrQkExQm9CLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRW50aXR5LFxyXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXHJcbiAgQ29sdW1uLFxyXG4gIEJhc2VFbnRpdHksXHJcbiAgTWFueVRvT25lLFxyXG4gIEpvaW5Db2x1bW4sXHJcbiAgT25lVG9NYW55XHJcbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IENvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGVJdGVtIGZyb20gXCIuL2NvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGVJdGVtXCI7XHJcbmltcG9ydCBSZXNwb3N0YUF0aXZpZGFkZSBmcm9tIFwiLi9yZXNwb3N0YUF0aXZpZGFkZVwiO1xyXG5pbXBvcnQgVXN1YXJpbyBmcm9tIFwiLi91c3VhcmlvXCI7XHJcblxyXG5ARW50aXR5KHsgbmFtZTogXCJjb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlXCIgfSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZSBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKHsgbmFtZTogXCJpZENvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGVcIiB9KVxyXG4gIHB1YmxpYyBpZENvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGU6IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwicGVzb1RvdGFsXCIsIG51bGxhYmxlOiB0cnVlLCB0eXBlOiAnZGVjaW1hbCcsIHByZWNpc2lvbjogMTAsIHNjYWxlOiAyfSlcclxuICBwdWJsaWMgcGVzb1RvdGFsOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcIm9ic2VydmFjYW9cIiwgbnVsbGFibGU6IHRydWUsIHR5cGU6ICd0ZXh0J30pXHJcbiAgcHVibGljIG9ic2VydmFjYW86IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiZGF0YUNvcnJlY2FvQXRpdmlkYWRlXCIsIHR5cGU6ICd0aW1lc3RhbXAnLCBudWxsYWJsZTogdHJ1ZX0pXHJcbiAgcHVibGljIGRhdGFDb3JyZWNhb0F0aXZpZGFkZTogRGF0ZTtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiZGF0YUVudHJlZ2FDb3JyZWNhb1wiLCB0eXBlOiAndGltZXN0YW1wJywgbnVsbGFibGU6IHRydWV9KVxyXG4gIHB1YmxpYyBkYXRhRW50cmVnYUNvcnJlY2FvOiBEYXRlO1xyXG5cclxuICBATWFueVRvT25lKCh0eXBlKSA9PiBSZXNwb3N0YUF0aXZpZGFkZSwgeyBlYWdlcjogdHJ1ZSwgb25EZWxldGU6IFwiQ0FTQ0FERVwifSlcclxuICBASm9pbkNvbHVtbih7IG5hbWU6IFwiaWRSZXNwb3N0YUF0aXZpZGFkZVwiLCByZWZlcmVuY2VkQ29sdW1uTmFtZTogXCJpZFJlc3Bvc3RhQXRpdmlkYWRlXCIgfSlcclxuICBwdWJsaWMgcmVzcG9zdGFBdGl2aWRhZGU6IFJlc3Bvc3RhQXRpdmlkYWRlO1xyXG5cclxuICBATWFueVRvT25lKCh0eXBlKSA9PiBVc3VhcmlvLCB7IGVhZ2VyOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcclxuICBASm9pbkNvbHVtbih7IG5hbWU6IFwiaWRBdXRvclwiLCByZWZlcmVuY2VkQ29sdW1uTmFtZTogXCJpZFVzdWFyaW9cIiB9KVxyXG4gIHB1YmxpYyBhdXRvcjogVXN1YXJpbztcclxuXHJcbiAgQE9uZVRvTWFueSgodHlwZSkgPT4gQ29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZUl0ZW0sIG9iaiA9PiBvYmouY29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZSwge2VhZ2VyOiB0cnVlLCBjYXNjYWRlOiB0cnVlIH0pXHJcbiAgcHVibGljIGNvcnJlY2FvQXRpdmlkYWRlSXRlbnM6IENvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGVJdGVtW107XHJcbn1cclxuIl19