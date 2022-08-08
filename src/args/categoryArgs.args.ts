import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CategoryArgs {
    @Field()
    categoryName: string

    @Field()
    text: string
}