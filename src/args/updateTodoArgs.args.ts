import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateTodoArgs {

    @Field()
    idTodo: string

    @Field()
    isCompleted: boolean
}