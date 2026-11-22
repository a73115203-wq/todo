const SectionOne = () => {
  return (
    <section className="  bg-[#ffff] mt-3">
      <h2 className="text-start text-lg  font-bold mb-2 mr-10">
        اضاف المهمه جديده{" "}
      </h2>
      <form className=" md:flex-row flex-col gap-2 flex bg-white p-2 rounded-sm  shadow-sm" >
        <div className="flex flex-col flex-1">
          <label htmlFor="title">"اسم المهمه</label>
          <input
            className="border-1 py-2 px-4"
            id="title"
            type="text"
            placeholder="عنوان المهمه"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="p">وصف المهمه </label>
          <input
            className="border-1 py-2 px-2"
            id="p"
            type="text"
            placeholder="تفصيل المهمه"
          />
        </div>

        <button className=" md:w-auto w-full md:self-end rounded-lg px-6 py-2 bg-blue-500 text-white">
          اضافه
        </button>
      </form>
    </section>
  );
};

export default SectionOne;
