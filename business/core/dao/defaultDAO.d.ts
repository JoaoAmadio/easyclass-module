import { DefaultDAOInterface } from "../interfaces/defaultDAOInterface";
import { EntitySchema } from "typeorm";
import { ObjectType } from "typeorm/common/ObjectType";
import { ObjectID } from "typeorm/driver/mongodb/typings";
import { DeleteResult } from "typeorm/query-builder/result/DeleteResult";
import { FindOneOptions } from "typeorm/find-options/FindOneOptions";
import { FindManyOptions } from "typeorm/find-options/FindManyOptions";
import { SaveOptions } from "typeorm/repository/SaveOptions";
export declare class DefaultDAO implements DefaultDAOInterface {
    delete(targetOrEntity: ObjectType<any> | EntitySchema<any> | string, criteria: string | string[] | number | number[] | Date | Date[] | ObjectID | ObjectID[] | any): Promise<DeleteResult>;
    find(entityClass: ObjectType<any>, id?: string | number | Date | ObjectID, options?: FindOneOptions<any>): Promise<any>;
    list(entityClass: ObjectType<any>, options?: FindManyOptions<any>): Promise<any[]>;
    save(entity: any, options?: SaveOptions): Promise<any>;
}
//# sourceMappingURL=defaultDAO.d.ts.map