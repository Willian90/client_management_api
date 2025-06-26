import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { Client } from "../entities/client.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.HOST,
  port: 3306,
  username: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: [User, Client],
});
