
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CategoryArgs {
    categoryName: string;
    text: string;
}

export interface TodoArgs {
    categoryId: string;
    text: string;
}

export interface Categories {
    id: string;
    title: string;
    todos: Nullable<Todos>[];
}

export interface IMutation {
    addCategory(categoryArgs: CategoryArgs): Categories | Promise<Categories>;
    addTodo(categoryArgs: TodoArgs): Todos | Promise<Todos>;
}

export interface IQuery {
    getCategories(): Categories[] | Promise<Categories[]>;
    index(): string | Promise<string>;
}

export interface Todos {
    category: Categories;
    categoryId: string;
    id: string;
    isCompleted: boolean;
    text: string;
}

type Nullable<T> = T | null;
