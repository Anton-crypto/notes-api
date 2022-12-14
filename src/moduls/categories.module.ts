import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesService } from 'src/services/categories.service';
import { CategoriesController } from 'src/controllers/categories.controller';
import { Categories } from 'src/models/categories.model';
import { CategoriesResolver } from 'src/resolver/categories.resolver';
import { Todos } from 'src/models/todos.model';

@Module({
  imports: [TypeOrmModule.forFeature([Categories, Todos])],
  providers: [CategoriesService, CategoriesResolver],
  controllers: [CategoriesController],
})
export class CategoriesModule {}