import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks

export async function loader() {
  const res = await fetch("http://localhost:3000/api/getTask");
  return json(await res.json());
}

export default function Index() {
  const tasks = useLoaderData();
  const [task, setTask] = useState('');

  const createTask = async () =>
    await fetch("http://localhost:3000/api/createTask", {
      method: "PUT",
      body: JSON.stringify({
        name: task
      })
    })

  return (
    <div className="container">
      <div className="task-tab">
        <h4>Task List</h4>
        <hr />
        <div>
          <form className="form" onSubmit={createTask}>
            <input type="text" name="name" onChange={(e) => setTask(e.target.value)} />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="task-list">
          <ul>
            {tasks.map((task: Task) => (
              <li key={task.id}>
                <p className={task.completed ? 'done' : ""}>{task.name}</p>
                <input type="checkbox" name="brand" id="" onChange={() => updateTask(task.id)} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
