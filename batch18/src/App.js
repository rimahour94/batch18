import "./App.css";
import Counter from "./component/counter/Counter";
import HooksUseEffect from "./component/hooks/HooksUseEffect";
import HooksUseState from "./component/hooks/HooksUseState";
function App() {
  let college = "DU";

  const dt = new Date();
  let text = "";

  let styleobj = {
    color: "red",
    fontSize: "14px",
    border: "2px solid black",
    width: "500px",
  };

  if (dt.getHours() < 12) {
    text = "Good Morning";
  } else if (dt.getHours() >= 12 && dt.getHours() < 16) {
    text = "Good Afternoon";
  } else if (dt.getHours() >= 16 && dt.getHours() < 20) {
    text = "Good Evening";
  }

  let details = {
    name: "Ritesh",
    city: "Noida",
    roll: 30,
  };

  let arr = [
    { id: 1, name: "name1", city: "Noida", email: "name1@gmail.com" },
    { id: 2, name: "name2", city: "Delhi", email: "name2@gmail.com" },
    { id: 3, name: "name3", city: "Meerut", email: "name3@gmail.com" },
    { id: 4, name: "name4", city: "Dehradun", email: "name4@gmail.com" },
    { id: 5, name: "name5", city: "Pune", email: "name5@gmail.com" },
  ];

  return (
    <div className="App">
      {/* <h1>App Js file {college}</h1>
      <p>Hello app js Paragraph {college} </p>
      <h3 style={styleobj}>{text}</h3> */}
      {/* <Counter college="DU" userDetails={details} arr={arr} /> */}
      {/* <HooksUseState /> */}
      <HooksUseEffect />
    </div>
  );
}

// function AppOne() {
//   return <h2>AppOne</h2>;
// }

// export { AppOne };
export default App;
