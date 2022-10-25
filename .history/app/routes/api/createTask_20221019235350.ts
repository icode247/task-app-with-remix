import type { ActionFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json();
  console.log(data)
  const newTask = await prisma.task.create(data);
  return newTask;
};
