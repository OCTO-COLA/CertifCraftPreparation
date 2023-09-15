export interface IUseCase<TQuery, TReturn> {
    do(IUseCaseQuery: TQuery): TReturn;
}
