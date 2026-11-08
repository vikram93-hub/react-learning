
function Student(props) {
  return (
    <div className="Student">
      <p>Student Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Grade: {props.grade}</p>
      <p>Pass Status: {props.isPass ? "Passed" : "Failed"}</p>
    </div>
  );
}

export default Student;