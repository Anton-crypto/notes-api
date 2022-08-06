import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from 'src/models/categories.model';
import { addCategoryArgs } from 'src/args/addCategory.args';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  findAllCategories(): Promise<Categories[]> {
    return this.categoriesRepository.find({
        relations: {
          todos: true,
        },
      }
    );
  }
  findCategoriesById(id: string): Promise<Categories> {
    return this.categoriesRepository.findOne({
      where: {
        id,
      },
    });
  }
  async addCategories(categoryArgs: addCategoryArgs): Promise<Boolean> {

    let category : Categories = new Categories();
    category.title = categoryArgs.title;
    

    await this.categoriesRepository.save(category);
    return true;
  }
  async deleteCategories(id: string): Promise<Boolean> {
    try {
      await this.categoriesRepository.delete(id);
      return true;
    } catch {
      return false;
    }
  }
}
