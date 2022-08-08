import { Entity, Column, PrimaryColumn, ManyToOne, PrimaryGeneratedColumn, JoinColumn, } from "typeorm"
import { Categories } from "./categories.model"
import { Field, ID, ObjectType } from '@nestjs/graphql';


@Entity('todos')
@ObjectType()
export class Todos {
    @PrimaryColumn("uuid")
    @Field(() => ID, { nullable: false })
    id: string;

    @Column({ type: 'varchar', length: 300 })
    @Field()
    text: string;

    @Column({ type: 'boolean', default: false })
    @Field()
    isCompleted: boolean;

    @Column({ type: 'string'})
    @Field(() => ID)
    categoryId: string;

    @ManyToOne(() => Categories, (categories) => categories.todos)
    @JoinColumn()
    @Field(() => Categories)
    category: Categories;
}