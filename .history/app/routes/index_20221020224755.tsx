import { useFetcher } from "@remix-run/react";

export default function Index() {
  const cities = useFetcher();
  console.log(cities)
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
          <cities.Form method="get" action="/getTask">
          {console.log(cities.data)}
            
            </cities.Form>
          </ul>
        </div>
      </div>
    </div>
  );
}
