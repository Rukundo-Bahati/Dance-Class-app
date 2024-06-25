interface Props {
  day: string;
  date: string;
  bg: string;
  txt: string;
  txtc: string;
  hvr: string;
}
const Dates = ({ day, date, bg, txt, hvr, txtc }: Props) => {
  return (
    <div className="w-full cursor-pointer">
      <div
        className={`flex flex-col items-center ${txt} ${bg} p-7 rounded-lg border border-slate-500 hover:${hvr} duration-300 hover:${txtc}`}
      >
        <h1 className="text-3xl font-semibold">{day}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Dates;
