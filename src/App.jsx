import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="text-center text-3xl">React Task</h2>
      {/* <Navbar></Navbar> */}
      <Register></Register>
    </>
  );
}

export default App;
