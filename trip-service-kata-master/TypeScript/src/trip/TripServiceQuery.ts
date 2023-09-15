import {IUseCaseQuery} from "../infra/IUseCaseQuery";
import User from "../user/User";

export class TripServiceQuery implements IUseCaseQuery {
    public user: User;
}
