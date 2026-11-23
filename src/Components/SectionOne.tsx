import React, { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";


const SectionOne = () => {
  const addTodo = useTodoStore((state)=> state.addTodo);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    await addTodo(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <section className="  bg-[#ffff] mt-3">
      <h2 className="text-start text-lg  font-bold mb-2 mr-10">
        اضاف المهمه جديده{" "}
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" md:flex-row flex-col gap-2 flex bg-white p-2 rounded-sm  shadow-sm"
      >
        <div className="flex flex-col flex-1">
          <label htmlFor="title">"اسم المهمه</label>
          <input
            className="border-1 py-2 px-4"
            id="title"
            type="text"
            placeholder="عنوان المهمه"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="p">وصف المهمه </label>
          <input
            className="border-1 py-2 px-2"
            id="p"
            type="text"
            placeholder="تفصيل المهمه"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className=" md:w-auto w-full md:self-end rounded-lg px-6 py-2 bg-blue-500 text-white"
        >
          اضافه
        </button>
      </form>
    </section>
  );
};

export default SectionOne;
