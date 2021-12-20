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
var ItemAtividade_1;
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const genero_enum_copy_1 = require("../enums/genero-enum copy");
let ItemAtividade = ItemAtividade_1 = class ItemAtividade extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idItemAtividade" }),
    __metadata("design:type", Number)
], ItemAtividade.prototype, "idItemAtividade", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "sequencia" }),
    __metadata("design:type", Number)
], ItemAtividade.prototype, "sequencia", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tituloItem" }),
    __metadata("design:type", String)
], ItemAtividade.prototype, "tituloItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "proposta", nullable: true }),
    __metadata("design:type", String)
], ItemAtividade.prototype, "proposta", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "codigoItem" }),
    __metadata("design:type", String)
], ItemAtividade.prototype, "codigoItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "tipo", default: genero_enum_copy_1.TipoItemAtividadeEnum.UNICA_ESCOLHA }),
    __metadata("design:type", String)
], ItemAtividade.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "peso", type: "double", precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ItemAtividade.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "isSubitem", default: false }),
    __metadata("design:type", Boolean)
], ItemAtividade.prototype, "isSubitem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "autoCorrecao", default: false }),
    __metadata("design:type", Boolean)
], ItemAtividade.prototype, "autoCorrecao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataEntrega", nullable: true, type: 'date' }),
    __metadata("design:type", Date)
], ItemAtividade.prototype, "dataEntrega", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "min", type: "double", precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ItemAtividade.prototype, "min", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "max", type: "double", precision: 10, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], ItemAtividade.prototype, "max", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "icone", nullable: true }),
    __metadata("design:type", String)
], ItemAtividade.prototype, "icone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor", type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], ItemAtividade.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ItemAtividade_1, { eager: false, nullable: true, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idItemAtividadeOrigem", referencedColumnName: "idItemAtividade" }),
    __metadata("design:type", ItemAtividade)
], ItemAtividade.prototype, "itemAtividadeOrigem", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ItemAtividade_1, type => type.itemAtividadeOrigem, { eager: true, cascade: ["update", "insert"] }),
    __metadata("design:type", Array)
], ItemAtividade.prototype, "subitensItemAtividade", void 0);
ItemAtividade = ItemAtividade_1 = __decorate([
    (0, typeorm_1.Entity)({ name: "itemAtividade" })
], ItemAtividade);
exports.default = ItemAtividade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbUF0aXZpZGFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW1BdGl2aWRhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEscUNBUWlCO0FBQ2pCLGdFQUFrRTtBQUdsRSxJQUFxQixhQUFhLHFCQUFsQyxNQUFxQixhQUFjLFNBQVEsb0JBQVU7Q0FpRHBELENBQUE7QUEvQ0M7SUFEQyxJQUFBLGdDQUFzQixFQUFDLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUM7O3NEQUNyQjtBQUcvQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUMsQ0FBQzs7Z0RBQ0o7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUM7O2lEQUNKO0FBRzFCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7OytDQUNwQjtBQUd4QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsQ0FBQzs7aURBQ0o7QUFHMUI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSx3Q0FBcUIsQ0FBQyxhQUFhLEVBQUMsQ0FBQzs7MkNBQ25DO0FBR25DO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7OzJDQUM3RDtBQUdwQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDOztnREFDbkI7QUFHMUI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQzs7bURBQ25CO0FBRzdCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxNQUFNLEVBQUMsQ0FBQzs4QkFDeEMsSUFBSTtrREFBQztBQUd6QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDOzswQ0FDN0Q7QUFHbkI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQzs7MENBQzdEO0FBR25CO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7OzRDQUNwQjtBQUdyQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7OzRDQUN0QztBQUlyQjtJQUZDLElBQUEsbUJBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxlQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDcEcsSUFBQSxvQkFBVSxFQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGlCQUFpQixFQUFFLENBQUM7OEJBQzNELGFBQWE7MERBQUM7QUFHMUM7SUFEQyxJQUFBLG1CQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsZUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUMsQ0FBQzs7NERBQ2xFO0FBaEQzQixhQUFhO0lBRGpDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQztHQUNiLGFBQWEsQ0FpRGpDO2tCQWpEb0IsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRW50aXR5LFxyXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXHJcbiAgQ29sdW1uLFxyXG4gIEJhc2VFbnRpdHksXHJcbiAgTWFueVRvT25lLFxyXG4gIEpvaW5Db2x1bW4sXHJcbiAgT25lVG9NYW55XHJcbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IHsgVGlwb0l0ZW1BdGl2aWRhZGVFbnVtIH0gZnJvbSBcIi4uL2VudW1zL2dlbmVyby1lbnVtIGNvcHlcIjtcclxuXHJcbkBFbnRpdHkoeyBuYW1lOiBcIml0ZW1BdGl2aWRhZGVcIiB9KVxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJdGVtQXRpdmlkYWRlIGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oeyBuYW1lOiBcImlkSXRlbUF0aXZpZGFkZVwiIH0pXHJcbiAgcHVibGljIGlkSXRlbUF0aXZpZGFkZTogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJzZXF1ZW5jaWFcIn0pXHJcbiAgcHVibGljIHNlcXVlbmNpYTogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJ0aXR1bG9JdGVtXCJ9KVxyXG4gIHB1YmxpYyB0aXR1bG9JdGVtOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcInByb3Bvc3RhXCIsIG51bGxhYmxlOiB0cnVlfSlcclxuICBwdWJsaWMgcHJvcG9zdGE6IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiY29kaWdvSXRlbVwifSlcclxuICBwdWJsaWMgY29kaWdvSXRlbTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJ0aXBvXCIsIGRlZmF1bHQ6IFRpcG9JdGVtQXRpdmlkYWRlRW51bS5VTklDQV9FU0NPTEhBfSlcclxuICBwdWJsaWMgdGlwbzogVGlwb0l0ZW1BdGl2aWRhZGVFbnVtO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJwZXNvXCIsIHR5cGU6IFwiZG91YmxlXCIsIHByZWNpc2lvbjogMTAsIHNjYWxlOiAyLCBudWxsYWJsZTogdHJ1ZX0pXHJcbiAgcHVibGljIHBlc286IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiaXNTdWJpdGVtXCIsIGRlZmF1bHQ6IGZhbHNlfSlcclxuICBwdWJsaWMgaXNTdWJpdGVtOiBib29sZWFuO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJhdXRvQ29ycmVjYW9cIiwgZGVmYXVsdDogZmFsc2V9KVxyXG4gIHB1YmxpYyBhdXRvQ29ycmVjYW86IGJvb2xlYW47XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcImRhdGFFbnRyZWdhXCIsIG51bGxhYmxlOiB0cnVlLCB0eXBlOidkYXRlJ30pXHJcbiAgcHVibGljIGRhdGFFbnRyZWdhOiBEYXRlO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJtaW5cIiwgdHlwZTogXCJkb3VibGVcIiwgcHJlY2lzaW9uOiAxMCwgc2NhbGU6IDIsIG51bGxhYmxlOiB0cnVlfSlcclxuICBwdWJsaWMgbWluOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcIm1heFwiLCB0eXBlOiBcImRvdWJsZVwiLCBwcmVjaXNpb246IDEwLCBzY2FsZTogMiwgbnVsbGFibGU6IHRydWV9KVxyXG4gIHB1YmxpYyBtYXg6IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiaWNvbmVcIiwgbnVsbGFibGU6IHRydWV9KVxyXG4gIHB1YmxpYyBpY29uZTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJ2YWxvclwiLCB0eXBlOiAnbG9uZ3RleHQnLCBudWxsYWJsZTogdHJ1ZX0pXHJcbiAgcHVibGljIHZhbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBNYW55VG9PbmUoKCkgPT4gSXRlbUF0aXZpZGFkZSwgeyBlYWdlcjogZmFsc2UsIG51bGxhYmxlOiB0cnVlLCBjYXNjYWRlOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcclxuICBASm9pbkNvbHVtbih7IG5hbWU6IFwiaWRJdGVtQXRpdmlkYWRlT3JpZ2VtXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkSXRlbUF0aXZpZGFkZVwiIH0pXHJcbiAgcHVibGljIGl0ZW1BdGl2aWRhZGVPcmlnZW06IEl0ZW1BdGl2aWRhZGU7XHJcblxyXG4gIEBPbmVUb01hbnkoKCkgPT4gSXRlbUF0aXZpZGFkZSwgdHlwZSA9PiB0eXBlLml0ZW1BdGl2aWRhZGVPcmlnZW0sIHsgZWFnZXI6IHRydWUsIGNhc2NhZGU6IFtcInVwZGF0ZVwiLCBcImluc2VydFwiXX0pXHJcbiAgcHVibGljIHN1Yml0ZW5zSXRlbUF0aXZpZGFkZTogSXRlbUF0aXZpZGFkZVtdO1xyXG59XHJcbiJdfQ==