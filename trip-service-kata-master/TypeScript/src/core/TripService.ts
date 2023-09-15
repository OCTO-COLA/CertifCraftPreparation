import {IUseCase} from "../infra/IUseCase";
import User from "../user/User";
import userSession from "../user/UserSession";
import {ITripDAO} from "./portsSecondaires/ITripDAO";
import {ITripDAOQuery} from "./portsSecondaires/ITripDAOQuery";
import Trip from "./entity/Trip";
import {TripServiceQuery} from "./TripServiceQuery";

export default class TripService implements IUseCase<TripServiceQuery, Trip> {
    constructor(private tripDAO: ITripDAO<ITripDAOQuery, Trip[]>) {}

    public do(tripServiceQuery: TripServiceQuery): Trip[] {
        const {user, friend} = tripServiceQuery;

        if (friend && user.isFriendWith(friend)) {
            return this.tripDAO.get({user: user});
        }
        return [];
    }
}
