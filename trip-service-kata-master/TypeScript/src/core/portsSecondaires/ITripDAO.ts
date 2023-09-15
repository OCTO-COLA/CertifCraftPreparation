export interface ITripDAO<TQuery, TReturn> {
    get(ITripDAOQuery: TQuery): TReturn;
}
