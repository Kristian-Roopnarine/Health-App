import { Field, ID, ObjectType } from "type-graphql";


@ObjectType()
export default class User {
    @Field(Type => ID)
    id!: string

    @Field()
    firstName!: string;

    @Field()
    lastName!: string;

    @Field()
    email!: string;
}