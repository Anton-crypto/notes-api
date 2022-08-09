import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from 'src/models/categories.model';
import { TodoArgs } from 'src/args/todoArgs.args';
import { Todos } from 'src/models/todos.model';
import { v4 as uuid } from 'uuid';
import { CategoryArgs } from 'src/args/categoryArgs.args';
import { UpdateTodoArgs } from 'src/args/updateTodoArgs.args';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
    @InjectRepository(Todos)
    private todosRepository: Repository<Todos>,
  ) {}

  findAllCategories(): Promise<Categories[]> {

    let result = this. categoriesRepository.find({
        relations: {
          todos: true,
        },
      }
    );
    console.log(result)
    return result;
  }
  async createCategories(categoryArgs: CategoryArgs): Promise<Categories> {
    const newCategory: Categories = this.categoriesRepository.create({
      id: uuid(),
      title: categoryArgs.categoryName,
    })

    let result = await this.categoriesRepository.save(newCategory);

    const newTodos: Todos = this.todosRepository.create({
      id: uuid(),
      text: categoryArgs.text,
      isCompleted: false,
    });

    newTodos.category = newCategory

    await this.todosRepository.save(newTodos);

    return result
  }
  async createTodo(todoArgs: TodoArgs): Promise<Todos> {
    const newTodos: Todos = this.todosRepository.create({
      id: uuid(),
      text: todoArgs.text,
      isCompleted: false,
      categoryId: todoArgs.categoryId
    });

    return await this.todosRepository.save(newTodos);
  }
  async updateTodo(updateTodoArgs: UpdateTodoArgs): Promise<Todos> {

    const todosUpdate = await this.todosRepository.findOneBy({
      id: updateTodoArgs.idTodo
    })

    if(todosUpdate) {
      todosUpdate.isCompleted = updateTodoArgs.isCompleted

      return await this.todosRepository.save(todosUpdate);
    }
  }
}
