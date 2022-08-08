import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from 'src/models/categories.model';
import { TodoArgs } from 'src/args/todoArgs.args';
import { Todos } from 'src/models/todos.model';
import { v4 as uuid } from 'uuid';
import { CategoryArgs } from 'src/args/categoryArgs.args';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
    @InjectRepository(Todos)
    private todosRepository: Repository<Todos>,
  ) {}

  findAllCategories(): Promise<Categories[]> {
    return this.categoriesRepository.find({
        relations: {
          todos: true,
        },
      }
    );
  }
  async createCategories(categoryArgs: CategoryArgs): Promise<Categories | Error> {
    const newCategory: Categories = this.categoriesRepository.create({
      id: uuid(),
      title: categoryArgs.categoryName,
    })

    await this.categoriesRepository.save(newCategory);

    const newTodos: Todos = this.todosRepository.create({
      id: uuid(),
      text: categoryArgs.text,
      isCompleted: false,
    });

    newTodos.category = newCategory

    await this.todosRepository.save(newTodos);

    return newCategory
  }
  async createTodo(todoArgs: TodoArgs): Promise<Todos> {
    const newTodos: Todos = this.todosRepository.create({
      id: uuid(),
      text: todoArgs.text,
      isCompleted: false,
      categoryId: todoArgs.categoryId
    });
    console.warn((todoArgs))
    this.todosRepository.save(newTodos);
    return newTodos;
  }
}
