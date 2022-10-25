import { LoaderFunction } from "@remix-run/server-runtime";
import { prisma } from "../../config/dbConfig";

export const loader: LoaderFunction = async () => {
  return db.task.findMany();
};
