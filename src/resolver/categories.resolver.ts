import { Args, Query, Mutation, Resolver, Subscription, Int } from "@nestjs/graphql";
import { Categories } from "src/models/categories.model";
import { CategoriesService } from "src/services/categories.service";

import { TodoArgs } from "src/args/todoArgs.args";
import { CategoryArgs } from "src/args/categoryArgs.args";
import { Todos } from "src/models/todos.model";

@Resolver()
export class CategoriesResolver {

  constructor(private readonly categoriesService: CategoriesService) { }

  @Query(returns => [Categories])
  getCategories() {
    return this.categoriesService.findAllCategories();
  }

  @Mutation(returns => Todos)
  addTodo(@Args({name: "categoryArgs"}) todoArgs: TodoArgs) {
    return this.categoriesService.createTodo(todoArgs);
  }

  @Mutation(returns => Categories)
  addCategory(@Args({name: "categoryArgs"}) categoryArgs: CategoryArgs) {
    return this.categoriesService.createCategories(categoryArgs);
  }
}