import Trip from "../core/entity/Trip";

export default class User {
    private trips: Trip[] = [];
    private friends: User[] = [];


    public getFriends(): User[] {
        return this.friends;
    }

    public addFriend(user: User): void {
        this.friends.push(user);
    }

    public addTrip(trip: Trip): void {
        this.trips.push(trip);
    }

    public isFriendWith(someone: User): boolean {
        return this.getFriends().some((oneFriend) => oneFriend === someone);
    }

    public getTrips(): Trip[] {
        return this.trips;
    }
}
