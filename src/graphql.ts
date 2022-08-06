
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Todos {
    id: number;
    text: string;
    categories: Categories;
}

export interface Categories {
    id: string;
    title: string;
    todos: Todos[];
}

export interface IQuery {
    index(): string | Promise<string>;
    getCategories(): Categories[] | Promise<Categories[]>;
}

type Nullable<T> = T | null;
