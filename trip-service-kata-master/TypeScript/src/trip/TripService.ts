import {IUseCase} from "../infra/IUseCase";
import Trip from "./Trip";
import TripDAO from "./TripDAO";
import {TripServiceQuery} from "./TripServiceQuery";

export default class TripService implements IUseCase<TripServiceQuery, Trip> {
    public do(tripServiceQuery: TripServiceQuery): Trip[] {
        let tripList: Trip[] = [];
        let isFriend: boolean = false;
        for (const friend of tripServiceQuery.user.getFriends()) {
            if (friend === tripServiceQuery.user) {
                isFriend = true;
                break;
            }
        }

        if (isFriend) {
            tripList = TripDAO.findTripsByUser(tripServiceQuery.user);
        }

        return tripList;
    }
}
