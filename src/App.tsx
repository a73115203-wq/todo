import Header from "./Componnets/SectionOne";
import Body from "./Componnets/SectionTow"
function App() {
  return (
    <div className="max-w-3xl mx-auto px-4" >
      <h1 className="h-15 flex items-center justify-center text-center bg-[#FFFFFF] font-bold  mt-8 "> قائمةالمهام اليوميه  -Todo list</h1>
      <Header />
      <Body />
    </div>
  );
}

export default App
