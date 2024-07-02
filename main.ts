import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Query } from "./resolvers/query.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Contact } from "./resolvers/contact.ts";
import { typeDefs } from "./gql/schema.ts";
import mongoose from "npm:mongoose@7.6.3";

await mongoose.connect(`mongodb+srv://admin:admin@cluster0.uu9iunu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

console.info("🚀 Connected to MongoDB");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Contact,
  },
});

const { url } = await startStandaloneServer(server, { listen: 8000 });
console.info(`🚀 Server ready at ${url}`);
