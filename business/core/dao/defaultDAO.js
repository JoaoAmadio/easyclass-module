"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultDAO = void 0;
const typeorm_1 = require("typeorm");
class DefaultDAO {
    async delete(targetOrEntity, criteria) {
        let result = null;
        const connection = (0, typeorm_1.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            result = await queryRunner.manager.delete(targetOrEntity, criteria);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.error(err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
        return result;
    }
    async find(entityClass, id, options) {
        let result;
        const connection = (0, typeorm_1.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            result = await queryRunner.manager.findOne(entityClass, id, options);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.error(err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
        return result;
    }
    async list(entityClass, options) {
        let result;
        const connection = (0, typeorm_1.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            result = await queryRunner.manager.find(entityClass);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.error(err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
        return result;
    }
    async save(entity, options) {
        let result;
        const connection = (0, typeorm_1.getConnection)();
        const queryRunner = connection.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            result = await queryRunner.manager.save(entity, options);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.error(err);
            await queryRunner.rollbackTransaction();
        }
        finally {
            await queryRunner.release();
        }
        return result;
    }
}
exports.DefaultDAO = DefaultDAO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdERBTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZmF1bHREQU8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscUNBQXNEO0FBUXRELE1BQWEsVUFBVTtJQUNyQixLQUFLLENBQUMsTUFBTSxDQUNWLGNBQTRELEVBQzVELFFBU087UUFFUCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxVQUFVLEdBQUcsSUFBQSx1QkFBYSxHQUFFLENBQUM7UUFDbkMsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFbkQsTUFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsTUFBTSxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUVyQyxJQUFJO1lBQ0YsTUFBTSxHQUFHLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDdkM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsTUFBTSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUN6QztnQkFBUztZQUNSLE1BQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQ1IsV0FBNEIsRUFDNUIsRUFBc0MsRUFDdEMsT0FBNkI7UUFFN0IsSUFBSSxNQUFNLENBQUM7UUFDWCxNQUFNLFVBQVUsR0FBRyxJQUFBLHVCQUFhLEdBQUUsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVuRCxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixNQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXJDLElBQUk7WUFDRixNQUFNLEdBQUcsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDdkM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsTUFBTSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUN6QztnQkFBUztZQUNSLE1BQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELEtBQUssQ0FBQyxJQUFJLENBQ1IsV0FBNEIsRUFDNUIsT0FBOEI7UUFFOUIsSUFBSSxNQUFNLENBQUM7UUFDWCxNQUFNLFVBQVUsR0FBRyxJQUFBLHVCQUFhLEdBQUUsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUVuRCxNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixNQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXJDLElBQUk7WUFDRixNQUFNLEdBQUcsTUFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxNQUFNLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDekM7Z0JBQVM7WUFDUixNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQVcsRUFBRSxPQUFxQjtRQUMzQyxJQUFJLE1BQU0sQ0FBQztRQUNYLE1BQU0sVUFBVSxHQUFHLElBQUEsdUJBQWEsR0FBRSxDQUFDO1FBQ25DLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRW5ELE1BQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLE1BQU0sV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFckMsSUFBSTtZQUNGLE1BQU0sR0FBRyxNQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN6RCxNQUFNLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDekM7Z0JBQVM7WUFDUixNQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQXZHRCxnQ0F1R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0REFPSW50ZXJmYWNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZGVmYXVsdERBT0ludGVyZmFjZVwiO1xyXG5pbXBvcnQgeyBFbnRpdHlTY2hlbWEsIGdldENvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBPYmplY3RUeXBlIH0gZnJvbSBcInR5cGVvcm0vY29tbW9uL09iamVjdFR5cGVcIjtcclxuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tIFwidHlwZW9ybS9kcml2ZXIvbW9uZ29kYi90eXBpbmdzXCI7XHJcbmltcG9ydCB7IERlbGV0ZVJlc3VsdCB9IGZyb20gXCJ0eXBlb3JtL3F1ZXJ5LWJ1aWxkZXIvcmVzdWx0L0RlbGV0ZVJlc3VsdFwiO1xyXG5pbXBvcnQgeyBGaW5kT25lT3B0aW9ucyB9IGZyb20gXCJ0eXBlb3JtL2ZpbmQtb3B0aW9ucy9GaW5kT25lT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBGaW5kTWFueU9wdGlvbnMgfSBmcm9tIFwidHlwZW9ybS9maW5kLW9wdGlvbnMvRmluZE1hbnlPcHRpb25zXCI7XHJcbmltcG9ydCB7IFNhdmVPcHRpb25zIH0gZnJvbSBcInR5cGVvcm0vcmVwb3NpdG9yeS9TYXZlT3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHREQU8gaW1wbGVtZW50cyBEZWZhdWx0REFPSW50ZXJmYWNlIHtcclxuICBhc3luYyBkZWxldGUoXHJcbiAgICB0YXJnZXRPckVudGl0eTogT2JqZWN0VHlwZTxhbnk+IHwgRW50aXR5U2NoZW1hPGFueT4gfCBzdHJpbmcsXHJcbiAgICBjcml0ZXJpYTpcclxuICAgICAgfCBzdHJpbmdcclxuICAgICAgfCBzdHJpbmdbXVxyXG4gICAgICB8IG51bWJlclxyXG4gICAgICB8IG51bWJlcltdXHJcbiAgICAgIHwgRGF0ZVxyXG4gICAgICB8IERhdGVbXVxyXG4gICAgICB8IE9iamVjdElEXHJcbiAgICAgIHwgT2JqZWN0SURbXVxyXG4gICAgICB8IGFueVxyXG4gICk6IFByb21pc2U8RGVsZXRlUmVzdWx0PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gbnVsbDtcclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBnZXRDb25uZWN0aW9uKCk7XHJcbiAgICBjb25zdCBxdWVyeVJ1bm5lciA9IGNvbm5lY3Rpb24uY3JlYXRlUXVlcnlSdW5uZXIoKTtcclxuXHJcbiAgICBhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcblxyXG4gICAgYXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIHJlc3VsdCA9IGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuZGVsZXRlKHRhcmdldE9yRW50aXR5LCBjcml0ZXJpYSk7XHJcbiAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLmNvbW1pdFRyYW5zYWN0aW9uKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmluZChcclxuICAgIGVudGl0eUNsYXNzOiBPYmplY3RUeXBlPGFueT4sXHJcbiAgICBpZD86IHN0cmluZyB8IG51bWJlciB8IERhdGUgfCBPYmplY3RJRCxcclxuICAgIG9wdGlvbnM/OiBGaW5kT25lT3B0aW9uczxhbnk+XHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gZ2V0Q29ubmVjdGlvbigpO1xyXG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBjb25uZWN0aW9uLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblxyXG4gICAgYXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cclxuICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLmZpbmRPbmUoZW50aXR5Q2xhc3MsIGlkLCBvcHRpb25zKTtcclxuICAgICAgYXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnJlbGVhc2UoKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBhc3luYyBsaXN0KFxyXG4gICAgZW50aXR5Q2xhc3M6IE9iamVjdFR5cGU8YW55PixcclxuICAgIG9wdGlvbnM/OiBGaW5kTWFueU9wdGlvbnM8YW55PlxyXG4gICk6IFByb21pc2U8YW55W10+IHtcclxuICAgIGxldCByZXN1bHQ7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gZ2V0Q29ubmVjdGlvbigpO1xyXG4gICAgY29uc3QgcXVlcnlSdW5uZXIgPSBjb25uZWN0aW9uLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblxyXG4gICAgYXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cclxuICAgIGF3YWl0IHF1ZXJ5UnVubmVyLnN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICByZXN1bHQgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLmZpbmQoZW50aXR5Q2xhc3MpO1xyXG4gICAgICBhd2FpdCBxdWVyeVJ1bm5lci5jb21taXRUcmFuc2FjdGlvbigpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucm9sbGJhY2tUcmFuc2FjdGlvbigpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgYXdhaXQgcXVlcnlSdW5uZXIucmVsZWFzZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmUoZW50aXR5OiBhbnksIG9wdGlvbnM/OiBTYXZlT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGdldENvbm5lY3Rpb24oKTtcclxuICAgIGNvbnN0IHF1ZXJ5UnVubmVyID0gY29ubmVjdGlvbi5jcmVhdGVRdWVyeVJ1bm5lcigpO1xyXG5cclxuICAgIGF3YWl0IHF1ZXJ5UnVubmVyLmNvbm5lY3QoKTtcclxuXHJcbiAgICBhd2FpdCBxdWVyeVJ1bm5lci5zdGFydFRyYW5zYWN0aW9uKCk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzdWx0ID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGVudGl0eSwgb3B0aW9ucyk7XHJcbiAgICAgIGF3YWl0IHF1ZXJ5UnVubmVyLmNvbW1pdFRyYW5zYWN0aW9uKCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=