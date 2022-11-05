import "bootstrap/dist/css/bootstrap.min.css";
function Counter(props) {
  console.log(props);

  return (
    <>
      <h2>Counter {props.college}</h2>

      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>City</th>
            <th>Email</th>
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>
          {props.arr.map((user, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Counter;
