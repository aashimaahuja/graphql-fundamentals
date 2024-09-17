### Writing first graphql query

1. Install packages

```shell
npm i nodemon graphql @apollo/server
```

2. Define schemas

Create file `schema.graphql` where you will define all your schemas

```js
type User {
  id: ID!
  name: String!
  age: Int
  friends: [User!]!
}


```

3. Define resolvers

Create file `resolvers.js` where you will define how to resolve each field

```js
const resolvers = {
  Query: {
    greeting: () => "Hello World",
  },
};
```

4. Start apollo server

```js
import { readFile } from "node:fs/promises";
const typeDefs = await readFile("schema.graphql", "urf-8");
const server = new ApolloServer({ typeDefs, resolvers });
await startStandaloneServer(server, { listen: { port: 9000 } });
```

- Graphql request is always a post request
- Response is 200 even in case of error

---

### Schema Types

Scalar types
`Int`
`Float`
`String`
`Boolean`
`ID` - represents a unique identifier,
`Date`

**Lists and non null**

```js
type User {
    id: ID!
    friends: [User]!
}
```

---

### Graphql query Examples

**Simple query**

```graphql
query Users {
  users {
    name
    age
  }
}
```

**Graphql query with arguments**

```graphql
query User($userId: ID!) {
  user(id: $userId) {
    name
    age
  }
}
```

**Graphql fragments**

```graphql
query Query($userId: ID!) {
  user(id: $userId) {
    ...UserDetails
  }
  users {
    ...UserDetails
  }
}

fragment UserDetails on User {
  id
  name
  friends {
    firstName
  }
  age
  firstName
}
```

### Making graphql request from client

Using normal fetch

```js
fetch("http://localhost:9001", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    query: "query Query {\n  greeting\n}",
  }),
});
```
