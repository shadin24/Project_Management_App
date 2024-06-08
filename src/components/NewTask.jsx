import React from "react";
import { useState } from "react";

export default function NewTask({onAdd}) {
  const [entereTask, setEnteredTask] = useState();
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick(){
    if(entereTask.trim()===''){
        return
    }
    onAdd(entereTask)
    setEnteredTask('')

  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={entereTask}
      />
      <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-100 text-stone-800 hover:bg-stone-600 hover:text-stone-100" onClick={handleClick}>Add Task</button>
    </div>
  );
}
