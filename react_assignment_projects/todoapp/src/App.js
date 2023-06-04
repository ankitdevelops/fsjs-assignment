import Header from "./Components/Header";
import InputForm from "./Components/InputForm";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <main className="md:container container px-3 mx-auto md:mx-auto my-24">
      <Header />
      <InputForm />
      <TaskList />
    </main>
  );
}

export default App;
