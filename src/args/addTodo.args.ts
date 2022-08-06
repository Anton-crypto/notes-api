import { Field, InputType } from "@nestjs/graphql";
import { Todos } from "src/models/todos.model";

@InputType()
export class addTodoArgs {
    @Field()
    categoriesId: string

    @Field(type => Todos)
    todos: Todos
}   