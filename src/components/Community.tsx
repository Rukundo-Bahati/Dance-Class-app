const Community = () => {
  return (
    <div className="bg-slate-950 text-white">
      <div className="flex flex-col lg:flex-row items-center justify-between bg-violet-900 p-3">
        <img
          className="mb-4 lg:mb-0 lg:mr-6 rounded-md my-6"
          src="src/assets/d4.jpg"
          alt=""
          style={{ width: "400px", height: "auto" }}
        />
        <div className="text-center lg:text-left">
          <p className="mb-2 text-blue-300 text-sm lg:text-base font-medium italic">
            Providing services since 2024
          </p>
          <h1 className="text-2xl lg:text-4xl mb-2 lg:mb-4">
            Join a Global Modern Dance Community
          </h1>
          <h3 className="italic mb-4 border-l-4 border-lime-400 text-sm lg:text-base pl-2 lg:pl-4">
            Professionally extend plug-and-play systems through stand-alone
            interfaces. Intrinsically, benchmark efficient alignments rather
            than.
          </h3>
          <p className="text-sm lg:text-base">
            Our community dance class is a vibrant and inclusive space where
            individuals of all ages and skill levels come together to share
            their love for dance. Every week, our studio buzzes with energy as
            participants engage in a variety of dance styles, from ballet and
            contemporary to hip-hop and salsa.
          </p>
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md mt-4 hover:border hover:border-white duration-300">
            LEARN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
