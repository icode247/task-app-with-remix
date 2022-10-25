import type { LoaderFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const loader: LoaderFunction = async () => {
    console.log(params)
  const newTask = await prisma.task.deleteMany()
  console.log(newTask);
  return newTask;
  
};
