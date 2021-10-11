import { Resolver, Query, Mutation } from "type-graphql";
import User from "../typeDefs/User";


@Resolver(User)
export default class UserResolver {

    @Query(() => String)
    test(): string {
        return 'Testing typegraphql'
    }
}