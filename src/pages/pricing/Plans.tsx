import Plan from "./Plan";

const Plans = () => {
  return (
    <div className="bg-gray-200 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        <Plan
          bg="bg-slate-900"
          img="src/assets/f1.png"
          price="250"
          color1="text-slate-400"
          color2="text-slate-400"
        />
        <Plan
          bg="bg-red-600"
          img="src/assets/f2.png"
          price="350"
          color1="text-slate-700"
          color2="text-slate-400"
        />
        <Plan
          bg="bg-purple-600"
          img="src/assets/f3.png"
          price="450"
          color1="text-slate-700"
          color2="text-slate-700"
        />
      </div>
    </div>
  );
};

export default Plans;
