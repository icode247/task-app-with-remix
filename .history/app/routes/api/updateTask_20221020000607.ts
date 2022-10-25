import type { ActionFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";
import type { LoaderFunction } from "@remix-run/node";

export const action: LoaderFunction = async ({ params }) => {
  const newTask = await prisma.task.update({where: {
    id : params.id: 
  }});
  return newTask;
};
