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
const itemAtividade_1 = require("./itemAtividade");
const respostaAtividade_1 = require("./respostaAtividade");
let RespostaAtividadeItem = class RespostaAtividadeItem extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idRespostaAtividadeItem" }),
    __metadata("design:type", Number)
], RespostaAtividadeItem.prototype, "idRespostaAtividadeItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor", type: 'longtext', nullable: true }),
    __metadata("design:type", String)
], RespostaAtividadeItem.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "observacaoItem", nullable: true, type: 'text' }),
    __metadata("design:type", String)
], RespostaAtividadeItem.prototype, "observacaoItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "peso", nullable: true, type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], RespostaAtividadeItem.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataRespostaItem", type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], RespostaAtividadeItem.prototype, "dataRespostaItem", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => itemAtividade_1.default, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idItemAtividade", referencedColumnName: "idItemAtividade" }),
    __metadata("design:type", itemAtividade_1.default)
], RespostaAtividadeItem.prototype, "itemAtividade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => respostaAtividade_1.default, { eager: false, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idRespostaAtividade", referencedColumnName: "idRespostaAtividade" }),
    __metadata("design:type", respostaAtividade_1.default)
], RespostaAtividadeItem.prototype, "respostaAtividade", void 0);
RespostaAtividadeItem = __decorate([
    (0, typeorm_1.Entity)({ name: "respostaAtividadeItem" })
], RespostaAtividadeItem);
exports.default = RespostaAtividadeItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9zdGFBdGl2aWRhZGVJdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVzcG9zdGFBdGl2aWRhZGVJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBT2lCO0FBQ2pCLG1EQUE0QztBQUM1QywyREFBb0Q7QUFHcEQsSUFBcUIscUJBQXFCLEdBQTFDLE1BQXFCLHFCQUFzQixTQUFRLG9CQUFVO0NBdUI1RCxDQUFBO0FBckJDO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxFQUFFLElBQUksRUFBRSx5QkFBeUIsRUFBRSxDQUFDOztzRUFDckI7QUFHdkM7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDOztvREFDdEM7QUFHckI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7OzZEQUNsQztBQUc5QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBQyxDQUFDOzttREFDOUQ7QUFHcEI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7OEJBQzlDLElBQUk7K0RBQUM7QUFJOUI7SUFGQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLHVCQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUMsQ0FBQztJQUN2RSxJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQzs4QkFDM0QsdUJBQWE7NERBQUM7QUFJcEM7SUFGQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLDJCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUM1RixJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsb0JBQW9CLEVBQUUscUJBQXFCLEVBQUUsQ0FBQzs4QkFDL0QsMkJBQWlCO2dFQUFDO0FBdEJ6QixxQkFBcUI7SUFEekMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFLENBQUM7R0FDckIscUJBQXFCLENBdUJ6QztrQkF2Qm9CLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRW50aXR5LFxyXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXHJcbiAgQ29sdW1uLFxyXG4gIEJhc2VFbnRpdHksXHJcbiAgTWFueVRvT25lLFxyXG4gIEpvaW5Db2x1bW5cclxufSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgSXRlbUF0aXZpZGFkZSBmcm9tIFwiLi9pdGVtQXRpdmlkYWRlXCI7XHJcbmltcG9ydCBSZXNwb3N0YUF0aXZpZGFkZSBmcm9tIFwiLi9yZXNwb3N0YUF0aXZpZGFkZVwiO1xyXG5cclxuQEVudGl0eSh7IG5hbWU6IFwicmVzcG9zdGFBdGl2aWRhZGVJdGVtXCIgfSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzcG9zdGFBdGl2aWRhZGVJdGVtIGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oeyBuYW1lOiBcImlkUmVzcG9zdGFBdGl2aWRhZGVJdGVtXCIgfSlcclxuICBwdWJsaWMgaWRSZXNwb3N0YUF0aXZpZGFkZUl0ZW06IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwidmFsb3JcIiwgdHlwZTogJ2xvbmd0ZXh0JywgbnVsbGFibGU6IHRydWV9KVxyXG4gIHB1YmxpYyB2YWxvcjogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJvYnNlcnZhY2FvSXRlbVwiLCBudWxsYWJsZTogdHJ1ZSwgdHlwZTogJ3RleHQnfSlcclxuICBwdWJsaWMgb2JzZXJ2YWNhb0l0ZW06IHN0cmluZztcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwicGVzb1wiLCBudWxsYWJsZTogdHJ1ZSwgdHlwZTogJ2RlY2ltYWwnLCBwcmVjaXNpb246IDEwLCBzY2FsZTogMn0pXHJcbiAgcHVibGljIHBlc286IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwiZGF0YVJlc3Bvc3RhSXRlbVwiLCB0eXBlOiAndGltZXN0YW1wJywgbnVsbGFibGU6IHRydWV9KVxyXG4gIHB1YmxpYyBkYXRhUmVzcG9zdGFJdGVtOiBEYXRlO1xyXG5cclxuICBATWFueVRvT25lKCh0eXBlKSA9PiBJdGVtQXRpdmlkYWRlLCB7IGVhZ2VyOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCJ9KVxyXG4gIEBKb2luQ29sdW1uKHsgbmFtZTogXCJpZEl0ZW1BdGl2aWRhZGVcIiwgcmVmZXJlbmNlZENvbHVtbk5hbWU6IFwiaWRJdGVtQXRpdmlkYWRlXCIgfSlcclxuICBwdWJsaWMgaXRlbUF0aXZpZGFkZTogSXRlbUF0aXZpZGFkZTtcclxuXHJcbiAgQE1hbnlUb09uZSgodHlwZSkgPT4gUmVzcG9zdGFBdGl2aWRhZGUsIHsgZWFnZXI6IGZhbHNlLCBjYXNjYWRlOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcclxuICBASm9pbkNvbHVtbih7IG5hbWU6IFwiaWRSZXNwb3N0YUF0aXZpZGFkZVwiLCByZWZlcmVuY2VkQ29sdW1uTmFtZTogXCJpZFJlc3Bvc3RhQXRpdmlkYWRlXCIgfSlcclxuICBwdWJsaWMgcmVzcG9zdGFBdGl2aWRhZGU6IFJlc3Bvc3RhQXRpdmlkYWRlO1xyXG59XHJcbiJdfQ==