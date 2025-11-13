import {createPool} from "mysql2/promise"
import { Db_host,Db_user,Db_password,Db_database,Db_port } from "./config.js";

export const pool = createPool({
    host: Db_host,
    user: Db_user,
    password: Db_password,
    database: Db_database,
    port: Db_port
});