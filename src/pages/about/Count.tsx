import Counter from "./Counter";

const Count = () => {
  return (
    <div className="flex flex-wrap bg-white">
      <div className="flex flex-col items-center text-white bg-slate-900 p-10 md:p-20 border-r-2 border-white flex-1">
        <h1 className="text-4xl md:text-6xl">
          <Counter endValue={70} />
        </h1>
        <p className="text-lg md:text-xl">Dance Classes</p>
      </div>
      <div className="flex flex-col items-center text-white bg-slate-900 p-10 md:p-20 border-r-2 border-white flex-1">
        <h1 className="text-4xl md:text-6xl">
          <Counter endValue={50} />
        </h1>
        <p className="text-lg md:text-xl">Best Instructors</p>
      </div>
      <div className="flex flex-col items-center text-white bg-slate-900 p-10 md:p-20 border-r-2 border-white flex-1">
        <h1 className="text-4xl md:text-6xl">
          <Counter endValue={5} />
        </h1>
        <p className="text-lg md:text-xl">Total Branches</p>
      </div>
      <div className="flex flex-col items-center text-white bg-slate-900 p-10 md:p-20 flex-1">
        <h1 className="text-4xl md:text-6xl">
          <Counter endValue={100} />
        </h1>
        <p className="text-lg md:text-xl">Happy Customers</p>
      </div>
    </div>
  );
};

export default Count;
