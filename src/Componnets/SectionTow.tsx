import { PencilLine, Trash } from 'lucide-react';

const SectionTow = () => {
  return (
    <section className='bg-[#ffff] mt-3'>
      <div className="flex-col sm:flex-row gap-2 flex bg-white p-2 rounded-sm  shadow-sm  justify-between items-center">
      {/* عالمت صح  */}
      <div className='flex items-start sm:items-center gap-3'>
      <input
      type='checkbox'
       className='w-5 h-5 accent-blue-600 cursor-pointer'
      />

      <div>
         <h2 className='font-bold '>title</h2>
      <p>التفصيل</p>
      </div>
      </div>
      <div className='flex gap-2 self-end sm:self-center'>
      <button className='bg-amber-400 rounded-lg p-2 text-white'>
        <PencilLine />
        </button>
      <button  className='bg-red-500 rounded-lg p-2 text-white'>
        <Trash />
      </button>
    </div>
    </div>
    </section>
  );
};

export default SectionTow;