function AddToDo() {
  return (
    <div className="container text-center">
      <div className="row suman-row">
        <div className="col-6">
          <input type="text" placeholder="Enter ToDo" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success  suman-btn">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
