import { useState } from "react";
import { PencilLine, Trash } from "lucide-react";
import { type Todo } from "../services/todoApi";
import { useTodoStore } from "../store/useTodoStore";

const SectionTow = () => {
  const todos = useTodoStore((state) => state.todos);
  const editTodo = useTodoStore((state) => state.editTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const startEdit = (todo: Todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const saveEdit = async (id: string) => {
    if (!editTitle.trim()) return;
    await editTodo(id, { title: editTitle, description: editDescription });
    setEditingId(null);
  };

  return (
    <section className="bg-[#ffff] mt-3 flex flex-col gap-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex-col sm:flex-row gap-2 flex bg-white p-2 rounded-sm shadow-sm justify-between items-center"
        >
          {editingId === todo.id ? (
            <>
              <div className="flex flex-col sm:flex-row gap-2 flex-1 w-full">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border p-1 flex-1"
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="border p-1 flex-1"
                />
              </div>
              <div className="flex gap-2 self-end sm:self-center">
                <button
                  onClick={() => saveEdit(todo.id)}
                  className="bg-green-500 rounded-lg px-3 py-1 text-white"
                >
                  حفظ
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 rounded-lg px-3 py-1 text-white"
                >
                  إلغاء
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-start sm:items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() =>
                    editTodo(todo.id, { completed: !todo.completed })
                  }
                  className="w-5 h-5 accent-blue-600 cursor-pointer"
                />
                <div>
                  <h2
                    className={`font-bold ${
                      todo.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {todo.title}
                  </h2>
                  <p>{todo.description}</p>
                </div>
              </div>

              <div className="flex gap-2 self-end sm:self-center">
                <button
                  onClick={() => startEdit(todo)}
                  className="bg-amber-400 rounded-lg p-2 text-white"
                >
                  <PencilLine />
                </button>
                <button
                  onClick={() => removeTodo(todo.id)}
                  className="bg-red-500 rounded-lg p-2 text-white"
                >
                  <Trash />
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default SectionTow;
