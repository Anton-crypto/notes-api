import { Args, Query, Mutation, Resolver, Subscription, Int } from "@nestjs/graphql";
import { CategoriesService } from "src/services/categories.service";

import { addTodoArgs } from "src/args/addTodo.args";

@Resolver()
export class CategoriesResolver {

  constructor(private readonly categoriesService: CategoriesService) { }

//   @Mutation(returns => Boolean)
//   addTodo(@Args({name: "todoArgs"}) addTodoArgs: addTodoArgs) {
//     return this.categoriesService.addCategories(addTodoArgs);
//   }
}