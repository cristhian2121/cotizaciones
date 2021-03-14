export interface ITable {

}

export interface IColumn {
    name?: string;
    value?: string;
}

export interface IActionsTable {
    edit?: boolean;
    remove?: boolean;
    detail?: boolean
};