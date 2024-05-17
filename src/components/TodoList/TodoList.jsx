import Todo from "../Todo/Todo";

function TodoList({ list, updateList }) {
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinishedprop={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinishedprop) => {
              const updatedList = list.map((t) => {
                if (t.id === todo.id) {
                  todo.finished = isFinishedprop;
                }
                return t;
              });
              updateList(updatedList);
            }}
          />
        ))}
    </div>
  );
}

export default TodoList;
