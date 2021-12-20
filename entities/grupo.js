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
const permissao_1 = require("./permissao");
let Grupo = class Grupo extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idGrupo" }),
    __metadata("design:type", Number)
], Grupo.prototype, "idGrupo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "nomeGrupo" }),
    __metadata("design:type", String)
], Grupo.prototype, "nomeGrupo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "descricaoGrupo" }),
    __metadata("design:type", String)
], Grupo.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ativo", default: true }),
    __metadata("design:type", Boolean)
], Grupo.prototype, "ativo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => permissao_1.default, { eager: true, cascade: ["update", "insert"] }),
    (0, typeorm_1.JoinTable)({ name: "grupoPermissoesPermissao" }),
    __metadata("design:type", Array)
], Grupo.prototype, "permissoes", void 0);
Grupo = __decorate([
    (0, typeorm_1.Unique)(["nomeGrupo"]),
    (0, typeorm_1.Entity)({ name: "grupo" })
], Grupo);
exports.default = Grupo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3J1cG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncnVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQVFpQjtBQUNqQiwyQ0FBb0M7QUFJcEMsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFNLFNBQVEsb0JBQVU7Q0FnQjdCLENBQUE7QUFkQztJQURDLElBQUEsZ0NBQXNCLEVBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O3NDQUNyQjtBQUd2QjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQzs7d0NBQ0w7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQzs7d0NBQ1Y7QUFHekI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7b0NBQ25CO0FBSXRCO0lBRkMsSUFBQSxvQkFBVSxFQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxtQkFBUyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUMvRSxJQUFBLG1CQUFTLEVBQUMsRUFBRSxJQUFJLEVBQUUsMEJBQTBCLEVBQUMsQ0FBQzs7eUNBQ2hCO0FBZjNCLEtBQUs7SUFGVixJQUFBLGdCQUFNLEVBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQixJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7R0FDcEIsS0FBSyxDQWdCVjtBQUVELGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRW50aXR5LFxyXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXHJcbiAgQ29sdW1uLFxyXG4gIEJhc2VFbnRpdHksXHJcbiAgVW5pcXVlLFxyXG4gIE1hbnlUb01hbnksXHJcbiAgSm9pblRhYmxlXHJcbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IFBlcm1pc3NhbyBmcm9tIFwiLi9wZXJtaXNzYW9cIjtcclxuXHJcbkBVbmlxdWUoW1wibm9tZUdydXBvXCJdKVxyXG5ARW50aXR5KHsgbmFtZTogXCJncnVwb1wiIH0pXHJcbmNsYXNzIEdydXBvIGV4dGVuZHMgQmFzZUVudGl0eSB7XHJcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oeyBuYW1lOiBcImlkR3J1cG9cIiB9KVxyXG4gIHB1YmxpYyBpZEdydXBvOiBudW1iZXI7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcIm5vbWVHcnVwb1wiIH0pXHJcbiAgcHVibGljIG5vbWVHcnVwbzogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJkZXNjcmljYW9HcnVwb1wiIH0pXHJcbiAgcHVibGljIGRlc2NyaWNhbzogc3RyaW5nO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJhdGl2b1wiLCBkZWZhdWx0OiB0cnVlIH0pXHJcbiAgcHVibGljIGF0aXZvOiBib29sZWFuO1xyXG5cclxuICBATWFueVRvTWFueSgodHlwZSkgPT4gUGVybWlzc2FvLCB7IGVhZ2VyOiB0cnVlLCBjYXNjYWRlOiBbXCJ1cGRhdGVcIiwgXCJpbnNlcnRcIl0gfSlcclxuICBASm9pblRhYmxlKHsgbmFtZTogXCJncnVwb1Blcm1pc3NvZXNQZXJtaXNzYW9cIn0pXHJcbiAgcHVibGljIHBlcm1pc3NvZXM6IFBlcm1pc3Nhb1tdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcnVwbztcclxuIl19