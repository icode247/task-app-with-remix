import { LoaderFunction } from "@remix-run/server-runtime";
import { db } from "../../config/dbConfig";

export const loader: LoaderFunction = async () => {
  return db.task.findMany();
};
