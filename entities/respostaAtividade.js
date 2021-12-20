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
const respostaAtividadeItem_1 = require("./respostaAtividadeItem");
const usuario_1 = require("./usuario");
let RespostaAtividade = class RespostaAtividade extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idRespostaAtividade" }),
    __metadata("design:type", Number)
], RespostaAtividade.prototype, "idRespostaAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tempoInicio", type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], RespostaAtividade.prototype, "tempoInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "observacao", nullable: true, type: 'text' }),
    __metadata("design:type", String)
], RespostaAtividade.prototype, "observacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tempoFim", type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], RespostaAtividade.prototype, "tempoFim", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "pesoTotal", nullable: true, type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], RespostaAtividade.prototype, "pesoTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "emAtraso", nullable: true, default: false }),
    __metadata("design:type", Boolean)
], RespostaAtividade.prototype, "emAtraso", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => usuario_1.default, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idUsuario", referencedColumnName: "idUsuario" }),
    __metadata("design:type", usuario_1.default)
], RespostaAtividade.prototype, "aluno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => atividade_1.default, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idAtividade", referencedColumnName: "idAtividade" }),
    __metadata("design:type", atividade_1.default)
], RespostaAtividade.prototype, "atividade", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((type) => respostaAtividadeItem_1.default, rai => rai.respostaAtividade, { eager: true, cascade: ["update", "insert"] }),
    __metadata("design:type", Array)
], RespostaAtividade.prototype, "respostaAtividadeItens", void 0);
RespostaAtividade = __decorate([
    (0, typeorm_1.Entity)({ name: "respostaAtividade" })
], RespostaAtividade);
exports.default = RespostaAtividade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9zdGFBdGl2aWRhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNwb3N0YUF0aXZpZGFkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQVFpQjtBQUNqQiwyQ0FBb0M7QUFDcEMsbUVBQTREO0FBQzVELHVDQUFnQztBQUdoQyxJQUFxQixpQkFBaUIsR0FBdEMsTUFBcUIsaUJBQWtCLFNBQVEsb0JBQVU7Q0E2QnhELENBQUE7QUEzQkM7SUFEQyxJQUFBLGdDQUFzQixFQUFDLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLENBQUM7OzhEQUNyQjtBQUduQztJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7OEJBQzlDLElBQUk7c0RBQUM7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOztxREFDbEM7QUFHMUI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDOzhCQUM5QyxJQUFJO21EQUFDO0FBR3RCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7O29EQUM5RDtBQUd6QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUM7O21EQUNuQztBQUl6QjtJQUZDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsaUJBQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ2xFLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLENBQUM7OEJBQ3ZELGlCQUFPO2dEQUFDO0FBSXRCO0lBRkMsSUFBQSxtQkFBUyxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxtQkFBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDcEUsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxhQUFhLEVBQUUsQ0FBQzs4QkFDdkQsbUJBQVM7b0RBQUM7QUFHNUI7SUFEQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLCtCQUFxQixFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUMsQ0FBQzs7aUVBQ2hFO0FBNUJwQyxpQkFBaUI7SUFEckMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLENBQUM7R0FDakIsaUJBQWlCLENBNkJyQztrQkE3Qm9CLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRW50aXR5LFxyXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXHJcbiAgQ29sdW1uLFxyXG4gIEJhc2VFbnRpdHksXHJcbiAgTWFueVRvT25lLFxyXG4gIEpvaW5Db2x1bW4sXHJcbiAgT25lVG9NYW55XHJcbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IEF0aXZpZGFkZSBmcm9tIFwiLi9hdGl2aWRhZGVcIjtcclxuaW1wb3J0IFJlc3Bvc3RhQXRpdmlkYWRlSXRlbSBmcm9tIFwiLi9yZXNwb3N0YUF0aXZpZGFkZUl0ZW1cIjtcclxuaW1wb3J0IFVzdWFyaW8gZnJvbSBcIi4vdXN1YXJpb1wiO1xyXG5cclxuQEVudGl0eSh7IG5hbWU6IFwicmVzcG9zdGFBdGl2aWRhZGVcIiB9KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb3N0YUF0aXZpZGFkZSBleHRlbmRzIEJhc2VFbnRpdHkge1xyXG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKHsgbmFtZTogXCJpZFJlc3Bvc3RhQXRpdmlkYWRlXCIgfSlcclxuICBwdWJsaWMgaWRSZXNwb3N0YUF0aXZpZGFkZTogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJ0ZW1wb0luaWNpb1wiLCB0eXBlOiAndGltZXN0YW1wJywgbnVsbGFibGU6IHRydWV9KVxyXG4gIHB1YmxpYyB0ZW1wb0luaWNpbzogRGF0ZTtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwib2JzZXJ2YWNhb1wiLCBudWxsYWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnfSlcclxuICBwdWJsaWMgb2JzZXJ2YWNhbzogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJ0ZW1wb0ZpbVwiLCB0eXBlOiAndGltZXN0YW1wJywgbnVsbGFibGU6IHRydWV9KVxyXG4gIHB1YmxpYyB0ZW1wb0ZpbTogRGF0ZTtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwicGVzb1RvdGFsXCIsIG51bGxhYmxlOiB0cnVlLCB0eXBlOiAnZGVjaW1hbCcsIHByZWNpc2lvbjogMTAsIHNjYWxlOiAyfSlcclxuICBwdWJsaWMgcGVzb1RvdGFsOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcImVtQXRyYXNvXCIsIG51bGxhYmxlOiB0cnVlLCBkZWZhdWx0OiBmYWxzZX0pXHJcbiAgcHVibGljIGVtQXRyYXNvOiBib29sZWFuO1xyXG5cclxuICBATWFueVRvT25lKCh0eXBlKSA9PiBVc3VhcmlvLCB7IGVhZ2VyOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcclxuICBASm9pbkNvbHVtbih7IG5hbWU6IFwiaWRVc3VhcmlvXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkVXN1YXJpb1wiIH0pXHJcbiAgcHVibGljIGFsdW5vOiBVc3VhcmlvO1xyXG5cclxuICBATWFueVRvT25lKCh0eXBlKSA9PiBBdGl2aWRhZGUsIHsgZWFnZXI6IHRydWUsIG9uRGVsZXRlOiBcIkNBU0NBREVcIiB9KVxyXG4gIEBKb2luQ29sdW1uKHsgbmFtZTogXCJpZEF0aXZpZGFkZVwiLCByZWZlcmVuY2VkQ29sdW1uTmFtZTogXCJpZEF0aXZpZGFkZVwiIH0pXHJcbiAgcHVibGljIGF0aXZpZGFkZTogQXRpdmlkYWRlO1xyXG5cclxuICBAT25lVG9NYW55KCh0eXBlKSA9PiBSZXNwb3N0YUF0aXZpZGFkZUl0ZW0sIHJhaSA9PiByYWkucmVzcG9zdGFBdGl2aWRhZGUsIHtlYWdlcjogdHJ1ZSwgY2FzY2FkZTogW1widXBkYXRlXCIsIFwiaW5zZXJ0XCJdfSlcclxuICBwdWJsaWMgcmVzcG9zdGFBdGl2aWRhZGVJdGVuczogUmVzcG9zdGFBdGl2aWRhZGVJdGVtW107XHJcbn1cclxuIl19