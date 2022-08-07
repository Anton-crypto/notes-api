
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddCategoryArgs {
    title: string;
}

export interface Todos {
    id: number;
    text: string;
    isCompleted: boolean;
    categories: Categories;
}

export interface Categories {
    id: string;
    title: string;
    todos: Nullable<Todos>[];
}

export interface IQuery {
    index(): string | Promise<string>;
    getCategories(): Categories[] | Promise<Categories[]>;
    getCategoryById(categotyId: string): Categories | Promise<Categories>;
}

export interface IMutation {
    deleteCategoryById(categotyId: string): boolean | Promise<boolean>;
    addCategory(categoryArgs: addCategoryArgs): boolean | Promise<boolean>;
    addTodo(categoryArgs: addCategoryArgs): boolean | Promise<boolean>;
}

type Nullable<T> = T | null;
