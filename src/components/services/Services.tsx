import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-slate-950 text-white p-8 min-h-screen">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <div className="flex flex-col mb-4 sm:mb-0">
          <p className="italic text-purple-600">Services</p>
          <h1 className="text-2xl sm:text-3xl">Our Service Platform</h1>
        </div>
        <button className="p-2 rounded bg-blue-700 text-white self-start sm:self-auto">
          MORE SERVICES
        </button>
      </div>
      {/* Apply justify-center class here to center the services horizontally */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-2 justify-center">
        <Service span="01" bg="dark:bg-gray-950 dark:border-gray-700" />
        <Service span="02" bg="dark:bg-gray-800 dark:border-gray-700" />
        <Service span="03" bg="dark:bg-gray-950 dark:border-gray-700" />
      </div>
    </div>
  );
};

export default Services;
