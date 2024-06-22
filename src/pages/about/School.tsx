const School = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-gray-100 space-y-6 md:space-y-0 md:space-x-6 items-center">
      <img
        src="src/assets/d3.webp"
        alt="Dance school image"
        className="w-full md:w-1/2 h-auto object-cover rounded-md"
      />
      <div className="flex flex-col space-y-4 ">
        <p className="text-red-500 italic text-lg">About The Dance School</p>
        <h1 className="text-3xl font-bold">We Provide Service since 2024</h1>
        <p className="text-gray-700 leading-relaxed">
          Dramatically morph reliable experiences without strategic
          methodologies. Quickly create frictionless strategic theme areas.
          Completely maximize economically sound e-markets after user-centric
          deliverables. Proactively create intuitive ROI and.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Compellingly expedite end-to-end sources without visionary process
          improvements. Compellingly exploit maintainable supply chains.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-800 duration-200 w-28"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default School;
