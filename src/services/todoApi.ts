export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}
const BASE_URL = "/api/todos";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch(BASE_URL);
  const result = await res.json();

  return result.data;
};
// create
export const createTodo = async (
  title: string,
  description: string,
): Promise<Todo> => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  const result = await res.json();
  return result.data;
};

// update
export const updateTodo = async (
  id: string,
  updatedTodo: Partial<Todo>,
): Promise<Todo> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo ),
  });
  if (!res.ok) {
    throw new Error(`فشل التعديل: ${res.status}`);
  }
  const result = await res.json();
  return result.data;
};

// Delete
export const deleteTodo = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error(`فشل التعديل: ${res.status}`);
  }
};
