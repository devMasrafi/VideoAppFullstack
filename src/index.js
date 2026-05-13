import dotenv from "dotenv";
import { dataBaseConnection } from "./db/index.js";

dotenv.config({ path: "./.env" });

dataBaseConnection()


