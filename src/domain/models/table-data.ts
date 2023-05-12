export interface ITableData<T> {
    page: number;
    limit: number;
    search: string;
    data: T[];
}

export class TableData<T> {
    private props: ITableData<T>;
    constructor(props: ITableData<T>) {
        this.props = props;
    }
    static create<T>(props: ITableData<T>): TableData<T> {
        return new TableData<T>(props);
    }
    unmarshal(): ITableData<T> {
        return {
            page: this.page,
            limit: this.limit,
            search: this.search,
            data: this.data,
        };
    }
    get page(): number {
        return this.props.page;
    }
    get limit(): number {
        return this.props.limit;
    }
    get search(): string {
        return this.props.search;
    }
    get data(): T[] {
        return this.props.data;
    }
}
