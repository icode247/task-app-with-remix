import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
// eslint-disable-next-line react-hooks/rules-of-hooks

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
  const [task, setTask] = useState('');

  const createTask = async () =>
    await fetch("http://localhost:3000/api/createTask", {
      method: "PUT",
      body: JSON.stringify({
        name: task
      })
    })


    const updateTask = async (id: string) => {
      await fetch("http://localhost:3000/api/createTask", {
        method: "PUT",
      })
    }
    

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
              <p>{task.name}</p>
              <input type="checkbox" name="brand" id="" onChange={updateTask(task.)}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}
