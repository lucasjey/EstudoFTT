export interface DaoInterface{
    tableName: string;

    insert(object: any):boolean;
    update(object: any):boolean;
    delete(id: number):Boolean;
    find(id: number):any;
    findAll():[any];
}