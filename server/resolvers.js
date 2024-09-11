const usersData = [
  {
    id: 1,
    name: 'John Doe',
    age: 25,
    friends: [2, 3], // Friend IDs
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    friends: [1], // Friend ID
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 22,
    friends: [1], // Friend ID
  },
];

export const resolvers = {
  Query: {
    users: () => usersData,
    user: (_, { id }) => usersData.find((user) => user.id == id),
    greeting: () => 'Hello graphql !',
  },
  User: {
    friends: (parent) => {
      return parent.friends.map((friendId) =>
        usersData.find((user) => user.id === friendId)
      );
    },
  },
};
