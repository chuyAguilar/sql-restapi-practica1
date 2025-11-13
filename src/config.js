import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const Db_HOST = process.env.HOST;

export const Db_USER = process.env.USER;

export const Db_PASSWORD = process.env.PASSWORD;

export const Db_DATABASE = process.env.DATABASE;

export const Db_PORT = process.env.PORTDB || 3306;