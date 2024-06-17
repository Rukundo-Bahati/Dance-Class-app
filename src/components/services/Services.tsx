import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-slate-950 text-white p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 items-center">
        <Service span="01" bg="dark:bg-gray-950 dark:border-gray-700 " />
        <Service span="02" bg="dark:bg-gray-800 dark:border-gray-700 " />
        <Service span="03" bg="dark:bg-gray-950 dark:border-gray-700 " />
      </div>
    </div>
  );
};

export default Services;
