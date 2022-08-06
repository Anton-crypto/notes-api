import { Field, InputType } from "@nestjs/graphql";
import { Todos } from "src/models/todos.model";

@InputType()
export class addCategoryArgs {
    @Field()
    title: string

    // @Field(type => Todos)
    // todos: Todos
}   