import React from "react";
import project_data  from "../data/project_data";

function Projects() {
  console.table(project_data)
  return (<div><p>Hello from projects, man</p>
  {project_data.map((data) => {
    return(<div key={data.index} class="data_item">
      {data.title}<br/>
      {data.description}<br/>
      {data.lead ? "LEAD" : ""}
      </div>)
  })}
  </div>);

}

export default Projects
