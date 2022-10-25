import type { ActionFunction } from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const action: ActionFunction = async ({ request, params }) => {
    const data = await request.json();
    const parmas = await params
    const newTask = await prisma.task.update({
        where: {
            id: param.id:
        },
        data
    });
    return newTask;
};
