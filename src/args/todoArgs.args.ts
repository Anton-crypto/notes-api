import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class TodoArgs {
    @Field()
    categoryId: string

    @Field()
    text: string
}