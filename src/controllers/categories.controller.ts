import { Controller, Get } from '@nestjs/common';
import { Categories } from 'src/models/categories.model';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {

  constructor(
    private readonly categoriesService : CategoriesService
  ) {}

  @Get()
  get (): Promise<Categories[]> {
    return this.categoriesService.findAllCategories();
  }
}
