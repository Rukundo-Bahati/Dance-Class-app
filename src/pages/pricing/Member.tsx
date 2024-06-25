interface Props {
  plan:string;
  text:string
}

const Member = ({plan,text}:Props) => {
  return (
    <div className="bg-white p-12 flex flex-col items-center justify-center">
      <p className="text-red-600 text-xl italic">{plan}</p>
      <h1 className="text-slate-700 text-4xl font-semibold">
      {text}
      </h1>
    </div>
  );
};

export default Member;
