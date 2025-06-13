function Todoitem2() {
  const todoName = "Learn Node.js";
  const todoDate = "20/06/2025";

  return (
    <div className="container">
      <div className="row suman-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger suman-btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem2;
