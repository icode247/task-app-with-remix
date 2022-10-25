import type { ActionFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const newTask = await prisma.task.create({
    data: { name: data.name, completed: false },
  });
  return newTask;
};
