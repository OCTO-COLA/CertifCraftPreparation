import "jest";
import Trip from "../src/trip/Trip";
import TripService from "../src/trip/TripService";
import User from "../src/user/User";

describe(".TripService", () => {
    // Given
    const tripService = new TripService();

    it("as a User with no trips, a request for my trips, should have an empty list ", () => {
        // Given
        const testUser: User = new User();
        // When
        const result: Trip[] = tripService.do({user: testUser});
        // Then
        const expected: Trip[] = [];
        expect(result).toEqual(expected);
    });
});
