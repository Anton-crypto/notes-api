import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn,  OneToMany } from "typeorm"
import { Todos } from "./todos.model"
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('categories')
@ObjectType()
export class Categories {
    @PrimaryGeneratedColumn()
    @Field()
    id: string

    @Column({ type: 'varchar', length: 300 })
    @Field()
    title: string

    @OneToMany(() => Todos, (todos) => todos.categories)
    @Field(type => [Todos])
    todos: Todos[]
}