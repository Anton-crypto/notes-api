import { Args, Query, Mutation, Resolver, Subscription, Int } from "@nestjs/graphql";
import { Categories } from "src/models/categories.model";
import { CategoriesService } from "src/services/categories.service";

import { addCategoryArgs } from "src/args/addCategory.args";

@Resolver()
export class CategoriesResolver {

  constructor(private readonly categoriesService: CategoriesService) { }

  @Query(returns => [Categories])
  getCategories() {
    return this.categoriesService.findAllCategories();
  }

  // @Query(returns => Categories)
  // getCategoryById( 
  //   @Args({name: "categotyId"}) id: string
  // ) {
  //   return this.categoriesService.findCategoriesById(id);
  // }

  // @Mutation(returns => Boolean)
  // deleteCategoryById(@Args({name: "categotyId"}) id: string) {
  //   return this.categoriesService.deleteCategories(id);
  // }
  
  // @Mutation(returns => Boolean)
  // addCategory(@Args({name: "addCategoryArgs"}) addCategoryArgs: addCategoryArgs) {
  //   return this.categoriesService.addCategories(addCategoryArgs);
  // }
}