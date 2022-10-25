import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { useSubmit, useSearchParams } from "@remix-run/react";
// eslint-disable-next-line react-hooks/rules-of-hooks
const [searchParams] = useSearchParams();
const brands = searchParams.getAll("brand");

type Task = {
  id: string;
  name: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export async function loader() {
  const res = await fetch("http://localhost:3000/api/getTask");

  return json(await res.json());
}

export default function Index() {
  const tasks = useLoaderData();
  return (
    <div className="container">
      <div className="task-tab">
        <h4>Task List</h4>
        <hr />
        <div className="form">
          <input type="text" />
          <button>Add</button>
        </div>
        <div className="task-list">
          <ul>
            {tasks.map((task: Task) => (
              <li key={task.id}>
                <p>{task.name}</p>
                <input type="checkbox" name="" id="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
