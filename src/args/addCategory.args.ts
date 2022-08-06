import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class addCategoryArgs {
    @Field()
    title: string
}