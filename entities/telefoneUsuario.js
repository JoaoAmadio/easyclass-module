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
const usuario_1 = require("./usuario");
let TelefoneUsuario = class TelefoneUsuario extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idTelefone" }),
    __metadata("design:type", Number)
], TelefoneUsuario.prototype, "idTelefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "descricao" }),
    __metadata("design:type", String)
], TelefoneUsuario.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor" }),
    __metadata("design:type", String)
], TelefoneUsuario.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => usuario_1.default, { eager: false, cascade: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "idUsuario", referencedColumnName: "idUsuario" }),
    __metadata("design:type", usuario_1.default)
], TelefoneUsuario.prototype, "usuario", void 0);
TelefoneUsuario = __decorate([
    (0, typeorm_1.Entity)({ name: "telefoneUsuario" })
], TelefoneUsuario);
exports.default = TelefoneUsuario;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVsZWZvbmVVc3VhcmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVsZWZvbmVVc3VhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBT2lCO0FBQ2pCLHVDQUFnQztBQUdoQyxJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQWdCLFNBQVEsb0JBQVU7Q0FhdEQsQ0FBQTtBQVhDO0lBREMsSUFBQSxnQ0FBc0IsRUFBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQzs7bURBQ3JCO0FBRzFCO0lBREMsSUFBQSxnQkFBTSxFQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDOztrREFDTDtBQUd6QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7OENBQ0w7QUFJckI7SUFGQyxJQUFBLG1CQUFTLEVBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLGlCQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxDQUFDO0lBQ2xGLElBQUEsb0JBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsb0JBQW9CLEVBQUUsV0FBVyxFQUFFLENBQUM7OEJBQ3JELGlCQUFPO2dEQUFDO0FBWkwsZUFBZTtJQURuQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztHQUNmLGVBQWUsQ0FhbkM7a0JBYm9CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEVudGl0eSxcclxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxyXG4gIENvbHVtbixcclxuICBCYXNlRW50aXR5LFxyXG4gIEpvaW5Db2x1bW4sXHJcbiAgTWFueVRvT25lXHJcbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IFVzdWFyaW8gZnJvbSBcIi4vdXN1YXJpb1wiO1xyXG5cclxuQEVudGl0eSh7IG5hbWU6IFwidGVsZWZvbmVVc3VhcmlvXCIgfSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVsZWZvbmVVc3VhcmlvIGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oeyBuYW1lOiBcImlkVGVsZWZvbmVcIiB9KVxyXG4gIHB1YmxpYyBpZFRlbGVmb25lOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcImRlc2NyaWNhb1wiIH0pXHJcbiAgcHVibGljIGRlc2NyaWNhbzogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJ2YWxvclwiIH0pXHJcbiAgcHVibGljIHZhbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBNYW55VG9PbmUoKHR5cGUpID0+IFVzdWFyaW8sIHsgZWFnZXI6IGZhbHNlLCBjYXNjYWRlOiB0cnVlLCBvbkRlbGV0ZTogXCJDQVNDQURFXCIgfSlcclxuICBASm9pbkNvbHVtbih7IG5hbWU6IFwiaWRVc3VhcmlvXCIsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiBcImlkVXN1YXJpb1wiIH0pXHJcbiAgcHVibGljIHVzdWFyaW86IFVzdWFyaW87XHJcbn1cclxuIl19