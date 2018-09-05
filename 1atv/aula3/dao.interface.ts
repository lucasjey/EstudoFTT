export interface DaoInterface<T>{
    tableName: string;

    insert(object: T):boolean;
    update(object: T):boolean;
    delete(id: number):Boolean;
    find(id: number):any;
    findAll():[T];
}