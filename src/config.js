import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const Db_HOST = process.env.host || mysql.railway.internal;

export const Db_USER = process.env.user || root;

export const Db_PASSWORD = process.env.password || DMQaCEETzBpbpHfQAJPrSXqpNmXDrjnI;

export const Db_DATABASE = process.env.database || railway;

export const Db_PORT = process.env.portdb || 3306;