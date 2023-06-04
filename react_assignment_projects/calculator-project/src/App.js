import "./index.css";
import Buttons from "./components/Button";
import { useState } from "react";
import Result from "./components/Result";

function App() {
  const [result, setresult] = useState("0");

  const handleclicks = (value) => {
    switch (value) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case ".":
      case "+":
      case "-":
      case "/":
      case "*":
        if (result === "0") {
          setresult(value);
        } else {
          setresult(result + value);
        }
        break;
      case "=":
        setresult(eval(result));
        break;
      case "c":
        // Clear the result state
        setresult("");
        break;
      case "+/-":
        // Change the sign of the result
        setresult(parseInt(result, 10) * -1);
        break;
      case "%":
        setresult(parseFloat(result, 10) / 100);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="myCalculator">
        <Result result={result} />
        <Buttons Buttonclicked={handleclicks} />
      </div>
    </div>
  );
}

// Export the App component as default
export default App;
