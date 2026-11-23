import { useEffect } from "react";
import Header from "./Components/SectionOne";
import Body from "./Components/SectionTow";
import { useTodoStore } from "./store/useTodoStore";
function App() {
  const fetchTodos =useTodoStore((state)=> state.fetchTodos);
useEffect (()=>{fetchTodos();},[fetchTodos]);
  return (
    <div className="max-w-3xl mx-auto px-4" >
      <h1 className="h-15 flex items-center justify-center text-center bg-[#FFFFFF] font-bold  mt-8 "> قائمةالمهام اليوميه  -Todo list</h1>
      <Header  />
      <Body  />
    </div>
  );
}

export default App
