import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-screen flex justify-center text-8xl items-center flex-col ">
      <h1 className="text-9xl">{count}</h1>
      <div>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold mx-4 text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

        <button
          type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
