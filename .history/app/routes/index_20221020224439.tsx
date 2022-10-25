import { useFetcher } from "@remix-run/react";

export default function Index() {
  const cities = useFetcher();
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
