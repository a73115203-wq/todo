import Header from "./Components/SectionOne";
import Body from "./Components/SectionTow"
import {useTodos} from "./hook/useTodos"
function App() {
      const {todos, addTodo, editTodo, removeTodo} =useTodos();

  return (
    <div className="max-w-3xl mx-auto px-4" >
      <h1 className="h-15 flex items-center justify-center text-center bg-[#FFFFFF] font-bold  mt-8 "> قائمةالمهام اليوميه  -Todo list</h1>
      <Header addTodo={addTodo} />
      <Body todos={todos} editTodo={editTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App
