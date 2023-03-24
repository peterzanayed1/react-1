import React, { useState } from "react"
import { toDoList } from "./toDoList"


function App() {
  return (
    <>
    <toDoList />
    <button>add</button>
    <button>Clear</button>
    <div>Left to do: 0</div>

    </>
  
  
  );
}

export default App;
