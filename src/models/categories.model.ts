import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { Todos } from "./todos.model"
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('categories')
@ObjectType()
export class Categories {
    @PrimaryColumn("uuid")
    @Field(() => ID, { nullable: false })
    id: string;

    @Column({ type: 'varchar', length: 300 })
    @Field()
    title: string

    @OneToMany(() => Todos, (todos) => todos.category)
    @Field(type => [Todos], { nullable: 'items' })
    todos: Todos[]
}