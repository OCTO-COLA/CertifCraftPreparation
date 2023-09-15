import "jest";
import {ITripDAO} from "../src/core/portsSecondaires/ITripDAO";
import {ITripDAOQuery} from "../src/core/portsSecondaires/ITripDAOQuery";
import Trip from "../src/core/entity/Trip";
import TripService from "../src/core/TripService";
import User from "../src/user/User";

export class TripDAODummy implements ITripDAO<ITripDAOQuery, Trip[]> {
    private expectedGet: Trip[];

    constructor(expectedGet: Trip[]) {
        this.expectedGet = expectedGet;
    }

    public get(tripDAOQuery: ITripDAOQuery): Trip[] {
        return this.expectedGet;
    }
}

describe(".TripService", () => {
    it("as a logged User with no trips nor friends, " +
        "a request for my trips, " +
        "should have an empty list ", () => {
        // Given
        const tripDAO = new TripDAODummy([]);
        const tripService = new TripService(tripDAO);
        const testUser: User = new User();
        // When
        const result: Trip[] = tripService.do({user: testUser});
        // Then
        const expected: Trip[] = [];
        expect(result).toEqual(expected);
    });

    it("as a logged User with no trips but with a friend who got one, " +
        "a request for the trips of my friend, " +
        "should return friend list ", () => {
        // Given
        const tripDAO = new TripDAODummy([{}]);
        const tripService = new TripService(tripDAO);
        const testUser: User = new User();
        const testFriend: User = new User();
        const aTrip: Trip = {};
        // When
        const result: Trip[] = tripService.do({user: testUser, friend: testFriend});
        // Then
        const expected: Trip[] = [aTrip];
        expect(result).toEqual(expected);
    });
});
