import { Users } from "@/models/admin/table";

export default class Card {
  users: Users;

  constructor(
    users: [
      {
        id: 0;
        name: "";
        username: "";
        email: "";
        address: {
          street: "";
          suite: "";
          city: "";
          zipcode: "";
          geo: {
            lat: "";
            lng: "";
          };
        };
        phone: "";
        website: "";
        company: {
          name: "";
          catchPhrase: "";
          bs: "";
        };
      }
    ]
  ) {
    this.users = users;
  }
}
