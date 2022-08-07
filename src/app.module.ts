import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Categories } from './models/categories.model';
import { Todos } from './models/todos.model';
import { DataSource } from 'typeorm';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { Module } from '@nestjs/common';
import { CategoriesModule } from './moduls/categories.module';
import { AppResolver } from './app.resolver';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Todos, Categories],
      synchronize: true,
      autoLoadEntities: false,
      logging: false,
      // ssl:false,
      ssl: { rejectUnauthorized: false },
      subscribers: [],
      migrations: [],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts')
      },
      playground: true,
    }),
    CategoriesModule,
  ],
  controllers: [],
  providers: [AppResolver],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

