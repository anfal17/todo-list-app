import { useState } from "react";

function Todo({ todoData , isFinishedprop , id , changeFinished}) {
    // const [finished , setFinished] = useState(isFinishedprop)
  return (
    <div>
        <input type="checkbox"  id={id} checked={isFinishedprop}
        onChange={(e)=>{
            // setFinished(e.target.checked)
            changeFinished(e.target.checked)
        }}/>
      {todoData}
      <button>Edit</button>
      <button>Delete</button>
</div>
  );
}

export default Todo;
