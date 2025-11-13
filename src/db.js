import {createPool} from "mysql2/promise"
import { Db_HOST,Db_USER,Db_PASSWORD,Db_DATABASE,Db_PORT } from "./config.js";

export const pool = createPool({
    host: Db_HOST,
    user: Db_USER,
    password: Db_PASSWORD,
    database: Db_DATABASE,
    port: Db_PORT
});