import { useEffect, useState } from "react";
import { getTodos, createTodo,updateTodo,deleteTodo, type Todo } from "../services/todoApi";



export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      console.log(data);
      setTodos(data);
    };
    fetchTodos();
  }, []);
  // ADD
  const addTodo = async (title:string,description:string)=>{
    const newTodo =await createTodo(title,description);
    setTodos((prev)=>[...prev,newTodo]);
  };
  //Edit
  const  editTodo =async (id:string,updatedFields:Partial<Todo>)=>{
    const updated =await updateTodo(id,updatedFields);
    setTodos((prev)=>
    prev.map((todo)=>(todo.id===id? updated :todo)))
  }
  //Remove
  const removeTodo = async (id:string)=>{
  await deleteTodo(id);
  setTodos ((prev)=>prev.filter((todo)=>(todo.id !==id )))
  }
  return { todos,addTodo, editTodo, removeTodo };
};
