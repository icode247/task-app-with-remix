import type { LoaderFunction } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";
import { json }  from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const action: ActionFunction = async ({request,}) => {
    const data = await request.formData();
    console.log(data)
    return data;
};
