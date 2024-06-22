const FreeRegistration = () => {
  return (
    <div className="rounded-md bg-purple-500 flex flex-col items-center justify-center text-white p-6 md:p-10">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        Get Your Free Registration
      </h1>
      <p className="text-center mb-4">
        [Note: May Want A Registration Form Inserted Here & Linked To Dance?]
      </p>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium text-center text-white border border-white rounded-md hover:bg-white hover:text-blue-600 duration-200"
        >
          Dance Step 01
        </a>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm md:text-base font-medium text-center text-blue-700 bg-white border border-white rounded-md hover:bg-transparent hover:text-white duration-200"
        >
          Dance Step 02
        </a>
      </div>
    </div>
  );
};

export default FreeRegistration;
