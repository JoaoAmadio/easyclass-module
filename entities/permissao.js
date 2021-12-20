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
let Permissao = class Permissao extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "idPermissao" }),
    __metadata("design:type", Number)
], Permissao.prototype, "idPermissao", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "valor" }),
    __metadata("design:type", String)
], Permissao.prototype, "valor", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "ativo", default: true }),
    __metadata("design:type", Boolean)
], Permissao.prototype, "ativo", void 0);
Permissao = __decorate([
    (0, typeorm_1.Entity)({ name: "permissao" })
], Permissao);
exports.default = Permissao;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2FvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGVybWlzc2FvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBS2lCO0FBR2pCLElBQU0sU0FBUyxHQUFmLE1BQU0sU0FBVSxTQUFRLG9CQUFVO0NBU2pDLENBQUE7QUFQQztJQURDLElBQUEsZ0NBQXNCLEVBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUM7OzhDQUNyQjtBQUczQjtJQURDLElBQUEsZ0JBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQzs7d0NBQ0w7QUFHckI7SUFEQyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ25CO0FBUmxCLFNBQVM7SUFEZCxJQUFBLGdCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUM7R0FDeEIsU0FBUyxDQVNkO0FBRUQsa0JBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBFbnRpdHksXHJcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcclxuICBDb2x1bW4sXHJcbiAgQmFzZUVudGl0eVxyXG59IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5ARW50aXR5KHsgbmFtZTogXCJwZXJtaXNzYW9cIiB9KVxyXG5jbGFzcyBQZXJtaXNzYW8gZXh0ZW5kcyBCYXNlRW50aXR5IHtcclxuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbih7IG5hbWU6IFwiaWRQZXJtaXNzYW9cIiB9KVxyXG4gIHB1YmxpYyBpZFBlcm1pc3NhbzogbnVtYmVyO1xyXG5cclxuICBAQ29sdW1uKHsgbmFtZTogXCJ2YWxvclwiIH0pXHJcbiAgcHVibGljIHZhbG9yOiBzdHJpbmc7XHJcblxyXG4gIEBDb2x1bW4oeyBuYW1lOiBcImF0aXZvXCIsIGRlZmF1bHQ6IHRydWUgfSlcclxuICBwdWJsaWMgYXRpdm86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcm1pc3NhbztcclxuIl19