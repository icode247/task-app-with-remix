import type { ActionFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const action: ActionFunction = async ({ request, params}) => {
  const data = await request.json();
  const newTask = await prisma.task.update({
    where: {
        id: params.id
    },
    data: { completed: ture },
  });
  return newTask;
};
