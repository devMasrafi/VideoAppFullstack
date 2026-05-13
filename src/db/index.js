import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const dataBaseConnection = async () => {
  try {
    const databaseConnectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URI}/${DB_NAME}`
    );
    console.log(
      `DataBase Connection successfull || Database Name: `,
      databaseConnectionInstance.connection.name
    );
  } catch (error) {
    console.error(`DATABASE CONNECTION FAILED`, error);
  }
};
