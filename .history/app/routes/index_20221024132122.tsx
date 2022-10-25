// import { json } from "@remix-run/node"; // or cloudflare/deno
// import { useLoaderData } from "@remix-run/react";
// import { useSubmit, useSearchParams } from "@remix-run/react";
// // eslint-disable-next-line react-hooks/rules-of-hooks

// type Task = {
//   id: string;
//   name: string;
//   completed: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }
// export async function loader() {
//   const res = await fetch("http://localhost:3000/api/getTask");

//   return json(await res.json());
// }

// export default function Index() {
//   const tasks = useLoaderData();
//   return (
//     <div className="container">
//       <div className="task-tab">
//         <h4>Task List</h4>
//         <hr />
//         <div>
//           <form action="/api/createTask" method="POST" className="form" encType="application/json">
//             <input type="text" name="name" />
//             <button type="submit">Add</button>
//           </form>
//         </div>
//         <div className="task-list">
//           <ul>
//             {tasks.map((task: Task) => (
//               <li key={task.id}>
//                 <p>{task.name}</p>
//                 <input type="checkbox" name="brand" id="" />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Index() {
  return (
    <div className="container">
      <div className="task-tab">
        <h4>Task List</h4>
        <hr />
        <div>
          <form action="" method="POST" className="form">
            <input type="text" name="name" />
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="task-list">
          <ul>
              <li>
                <p>Task 1</p>
                <input type="checkbox" name="brand" id="" />
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
