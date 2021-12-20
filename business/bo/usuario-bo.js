"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioBO = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = require("../../entities/usuario");
const defaultDAO_1 = require("../core/dao/defaultDAO");
class UsuarioBO extends defaultDAO_1.DefaultDAO {
    constructor() {
        super();
        this.usuarioRepositorio = (0, typeorm_1.getRepository)(usuario_1.default);
    }
    async buscaPorRA(ra) {
        return this.usuarioRepositorio.findOne({ where: { ra } });
    }
    async buscaPorCPF(cpf) {
        return this.usuarioRepositorio.findOne({ where: { cpf } });
    }
    async buscaPorEmail(email) {
        return this.usuarioRepositorio.findOne({ where: { email } });
    }
    async listar() {
        return this.usuarioRepositorio.find();
    }
}
exports.UsuarioBO = UsuarioBO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby1iby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzdWFyaW8tYm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXNDO0FBQ3RDLG9EQUE2QztBQUM3Qyx1REFBa0Q7QUFFbEQsTUFBYSxTQUFVLFNBQVEsdUJBQVU7SUFFckM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQUdMLHVCQUFrQixHQUFHLElBQUEsdUJBQWEsRUFBQyxpQkFBTyxDQUFDLENBQUM7SUFGbkQsQ0FBQztJQUlNLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBVTtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNNLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBVztRQUNoQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNNLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBYTtRQUNwQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUMsQ0FBQztDQUNKO0FBckJELDhCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Z2V0UmVwb3NpdG9yeX0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IFVzdWFyaW8gZnJvbSBcIi4uLy4uL2VudGl0aWVzL3VzdWFyaW9cIjtcclxuaW1wb3J0IHtEZWZhdWx0REFPfSBmcm9tIFwiLi4vY29yZS9kYW8vZGVmYXVsdERBT1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzdWFyaW9CTyBleHRlbmRzIERlZmF1bHREQU97XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXN1YXJpb1JlcG9zaXRvcmlvID0gZ2V0UmVwb3NpdG9yeShVc3VhcmlvKTtcclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYnVzY2FQb3JSQShyYTogc3RyaW5nKTogUHJvbWlzZTxVc3VhcmlvIHwgbnVsbD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzdWFyaW9SZXBvc2l0b3Jpby5maW5kT25lKHt3aGVyZTogeyByYSB9fSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgYnVzY2FQb3JDUEYoY3BmOiBzdHJpbmcpOiBQcm9taXNlPFVzdWFyaW8gfCBudWxsPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXN1YXJpb1JlcG9zaXRvcmlvLmZpbmRPbmUoe3doZXJlOiB7IGNwZiB9fSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXN5bmMgYnVzY2FQb3JFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxVc3VhcmlvIHwgbnVsbD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnVzdWFyaW9SZXBvc2l0b3Jpby5maW5kT25lKHt3aGVyZTogeyBlbWFpbCB9fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGxpc3RhcigpOiBQcm9taXNlPFVzdWFyaW9bXSB8IG51bGw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c3VhcmlvUmVwb3NpdG9yaW8uZmluZCgpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==