import type { LoaderFunction } from "@remix-run/node";
import { json }  from "@remix-run/node";
import { prisma } from "../../config/dbConfig";

export const loader: LoaderFunction = async ({request}) => {
    const data = await request.json();
    console.log(data)
    return data;
};
