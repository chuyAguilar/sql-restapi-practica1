import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const Db_host = process.env.host || mysql.railway.internal;

export const Db_user = process.env.user || root;

export const Db_password = process.env.password || DMQaCEETzBpbpHfQAJPrSXqpNmXDrjnI;

export const Db_database = process.env.database || railway;

export const Db_port = process.env.portdb || 3306;