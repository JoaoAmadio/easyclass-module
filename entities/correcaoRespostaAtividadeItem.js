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
const correcaoRespostaAtividade_1 = require("./correcaoRespostaAtividade");
const respostaAtividadeItem_1 = require("./respostaAtividadeItem");
let CorrecaoRespostaAtividadeItem = class CorrecaoRespostaAtividadeItem extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idCorrecaoRespostaAtividadeItem" }),
    __metadata("design:type", Number)
], CorrecaoRespostaAtividadeItem.prototype, "idCorrecaoRespostaAtividadeItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "peso", nullable: true, type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CorrecaoRespostaAtividadeItem.prototype, "peso", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor", nullable: true, type: 'longtext' }),
    __metadata("design:type", String)
], CorrecaoRespostaAtividadeItem.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "observacao", nullable: true, type: 'text' }),
    __metadata("design:type", String)
], CorrecaoRespostaAtividadeItem.prototype, "observacaoItem", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "dataCorrecaoItem", type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CorrecaoRespostaAtividadeItem.prototype, "dataCorrecaoItem", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => respostaAtividadeItem_1.default, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idRespostaAtividadeItem", referencedColumnName: "idRespostaAtividadeItem" }),
    __metadata("design:type", respostaAtividadeItem_1.default)
], CorrecaoRespostaAtividadeItem.prototype, "respostaAtividadeItem", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => correcaoRespostaAtividade_1.default, { eager: false, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idCorrecaoRespostaAtividade", referencedColumnName: "idCorrecaoRespostaAtividade" }),
    __metadata("design:type", correcaoRespostaAtividade_1.default)
], CorrecaoRespostaAtividadeItem.prototype, "correcaoRespostaAtividade", void 0);
CorrecaoRespostaAtividadeItem = __decorate([
    (0, typeorm_1.Entity)({ name: "correcaoRespostaAtividadeItem" })
], CorrecaoRespostaAtividadeItem);
exports.default = CorrecaoRespostaAtividadeItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZUl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQU9pQjtBQUNqQiwyRUFBb0U7QUFDcEUsbUVBQTREO0FBRzVELElBQXFCLDZCQUE2QixHQUFsRCxNQUFxQiw2QkFBOEIsU0FBUSxvQkFBVTtDQXVCcEUsQ0FBQTtBQXJCQztJQURDLElBQUEsZ0NBQXNCLEVBQUMsRUFBRSxJQUFJLEVBQUUsaUNBQWlDLEVBQUUsQ0FBQzs7c0ZBQ3JCO0FBRy9DO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLENBQUM7OzJEQUM5RDtBQUdwQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7OzREQUN0QztBQUdyQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7O3FFQUM5QjtBQUc5QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQzs4QkFDOUMsSUFBSTt1RUFBQztBQUk5QjtJQUZDLElBQUEsbUJBQVMsRUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsK0JBQXFCLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsQ0FBQztJQUNoRixJQUFBLG9CQUFVLEVBQUMsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsb0JBQW9CLEVBQUUseUJBQXlCLEVBQUUsQ0FBQzs4QkFDbkUsK0JBQXFCOzRFQUFDO0FBSXBEO0lBRkMsSUFBQSxtQkFBUyxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxtQ0FBeUIsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ3JGLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSw2QkFBNkIsRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsRUFBRSxDQUFDOzhCQUN2RSxtQ0FBeUI7Z0ZBQUM7QUF0QnpDLDZCQUE2QjtJQURqRCxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsK0JBQStCLEVBQUUsQ0FBQztHQUM3Qiw2QkFBNkIsQ0F1QmpEO2tCQXZCb0IsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBFbnRpdHksXHJcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcclxuICBDb2x1bW4sXHJcbiAgQmFzZUVudGl0eSxcclxuICBNYW55VG9PbmUsXHJcbiAgSm9pbkNvbHVtblxyXG59IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCBDb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlIGZyb20gXCIuL2NvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGVcIjtcclxuaW1wb3J0IFJlc3Bvc3RhQXRpdmlkYWRlSXRlbSBmcm9tIFwiLi9yZXNwb3N0YUF0aXZpZGFkZUl0ZW1cIjtcclxuXHJcbkBFbnRpdHkoeyBuYW1lOiBcImNvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGVJdGVtXCIgfSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZUl0ZW0gZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbih7IG5hbWU6IFwiaWRDb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlSXRlbVwiIH0pXHJcbiAgcHVibGljIGlkQ29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZUl0ZW06IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwicGVzb1wiLCBudWxsYWJsZTogdHJ1ZSwgdHlwZTogJ2RlY2ltYWwnLCBwcmVjaXNpb246IDEwLCBzY2FsZTogMn0pXHJcbiAgcHVibGljIHBlc286IG51bWJlcjtcclxuXHJcbiAgQENvbHVtbih7IG5hbWU6IFwidmFsb3JcIiwgbnVsbGFibGU6IHRydWUsIHR5cGU6ICdsb25ndGV4dCd9KVxyXG4gIHB1YmxpYyB2YWxvcjogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJvYnNlcnZhY2FvXCIsIG51bGxhYmxlOiB0cnVlLCB0eXBlOiAndGV4dCd9KVxyXG4gIHB1YmxpYyBvYnNlcnZhY2FvSXRlbTogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJkYXRhQ29ycmVjYW9JdGVtXCIsIHR5cGU6ICd0aW1lc3RhbXAnLCBudWxsYWJsZTogdHJ1ZX0pXHJcbiAgcHVibGljIGRhdGFDb3JyZWNhb0l0ZW06IERhdGU7XHJcblxyXG4gIEBNYW55VG9PbmUoKHR5cGUpID0+IFJlc3Bvc3RhQXRpdmlkYWRlSXRlbSwgeyBlYWdlcjogdHJ1ZSwgb25EZWxldGU6IFwiQ0FTQ0FERVwiIH0pXHJcbiAgQEpvaW5Db2x1bW4oeyBuYW1lOiBcImlkUmVzcG9zdGFBdGl2aWRhZGVJdGVtXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkUmVzcG9zdGFBdGl2aWRhZGVJdGVtXCIgfSlcclxuICBwdWJsaWMgcmVzcG9zdGFBdGl2aWRhZGVJdGVtOiBSZXNwb3N0YUF0aXZpZGFkZUl0ZW07XHJcblxyXG4gIEBNYW55VG9PbmUoKHR5cGUpID0+IENvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGUsIHsgZWFnZXI6IGZhbHNlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcclxuICBASm9pbkNvbHVtbih7IG5hbWU6IFwiaWRDb3JyZWNhb1Jlc3Bvc3RhQXRpdmlkYWRlXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkQ29ycmVjYW9SZXNwb3N0YUF0aXZpZGFkZVwiIH0pXHJcbiAgcHVibGljIGNvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGU6IENvcnJlY2FvUmVzcG9zdGFBdGl2aWRhZGU7XHJcbn1cclxuIl19