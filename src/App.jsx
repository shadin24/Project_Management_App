import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [Projectstate, setprojectstate] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setprojectstate((prevstate) => {
      return {
        ...prevstate,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setprojectstate((prevstate) => {
      const projectId = Math.random()
      const newProject = { ...projectData, id: projectId };
      return {
        ...prevstate,
        selectedProjectId: undefined,
        projects: [...prevstate.projects, newProject],
      };
    });
  }

  console.log(Projectstate);

  let content;
  if (Projectstate.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (Projectstate.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} projects= {Projectstate.projects} />
      {content}
    </main>
  );
}

export default App;
