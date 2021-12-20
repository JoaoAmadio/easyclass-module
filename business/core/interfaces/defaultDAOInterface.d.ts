export declare class DefaultDAOInterface {
    find(entityClass: any, id?: any, options?: any): Promise<any | undefined>;
    delete(targetOrEntity: any, criteria: any): Promise<any>;
    save(entity: any, options?: any): Promise<any>;
    list(entityClass: any, options?: any): Promise<Array<any>>;
}
//# sourceMappingURL=defaultDAOInterface.d.ts.map