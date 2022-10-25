import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json();
  console.log(data);
  return data;
};
