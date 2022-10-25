import { useFetcher } from "@remix-run/react";
import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const res = await fetch("http://localhost:3000/api/getTask");
  
  return json(await res.json());
}

export default function Index() {
  const task = useLoaderData();
  console.log(gists)
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
         
              <li>
                <p>Task1</p>
                <input type="checkbox" name="" id="" />
              </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
}
