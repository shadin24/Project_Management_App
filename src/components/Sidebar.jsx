import React from "react";
import Button from "./Button";
export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div className="">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="my-16">
        {projects.map((project) => {
let cssClass="w-full text-left px-2 py-1 rounded-sm my-1  hove:text-stone-200 hover:bg-stone-800"
if (project.id === selectedProjectId) {
  cssClass += " bg-stone-800 text-stone-200"
}else{
  cssClass +=' text-stone-400'
}

          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={()=>onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
