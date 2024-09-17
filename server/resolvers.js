import { users } from './mocks/users.js';

export const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id == id),
    greeting: () => 'Hello graphql !',
  },
  User: {
    friends: (parent) => {
      return parent.friends.map((friendId) =>
        users.find((user) => user.id === friendId)
      );
    },
  },
};
