function Todo({ todoData , isFinsihed}) {
  return (
    <div>
        <input type="checkbox" name="" id="" checked={isFinsihed}/>
      {todoData}
      <button>Edit</button>
      <button>Delete</button>
</div>
  );
}

export default Todo;
