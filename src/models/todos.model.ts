import { Entity, Column, PrimaryColumn, ManyToOne } from "typeorm"
import { Categories } from "./categories.model"
import { Field, ID, ObjectType } from '@nestjs/graphql';

@Entity('todos')
@ObjectType()
export class Todos {
    @PrimaryColumn()
    @Field()
    id: number

    @Column({ type: 'varchar', length: 300 })
    @Field()
    text: string

    // @Column({ type: 'boolean', default: false })
    // isCompleted: boolean

    @ManyToOne(() => Categories, (categories) => categories.todos)
    @Field(type => Categories)
    categories: Categories
}