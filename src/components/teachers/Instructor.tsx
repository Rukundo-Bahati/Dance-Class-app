const Instructor = () => {
  return (
    <div>
      <div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-l-lg md:border-r dark:bg-slate-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Easy to follow dance routines
            </h3>
            <p className="my-4">
              Spark Dance School provides comprehensive dance programs tailored
              to students of all skill levels. Whether you're a beginner or
              advanced dancer, our instructors are dedicated to helping you
              achieve your goals and improve your dance technique.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-14 h-14"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
              alt="Karen Nelson profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
              <div>Karen Nelson</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Dance Instructor
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-r-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Creative choreography
            </h3>
            <p className="my-4">
              At Spark Dance School, our instructors are passionate about
              creating innovative and engaging choreography for our students. We
              strive to push the boundaries of dance and inspire our students to
              explore new movements and express themselves creatively.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-14 h-14"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="Roberta Casas profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
              <div>Roberta Casas</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Dance Choreographer
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-l-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Passionate teaching
            </h3>
            <p className="my-4">
              Our instructors at Spark Dance School are dedicated to providing
              high-quality dance education in a supportive and encouraging
              environment. We are committed to helping our students develop
              their skills, build confidence, and achieve their dance goals.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-14 h-14"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
              <div>Jese Leos</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Dance Instructor
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-b-none md:rounded-r-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Fun and supportive environment
            </h3>
            <p className="my-4">
              At Spark Dance School, our instructors create a fun and supportive
              environment where students can learn and grow as dancers. We
              believe in fostering a sense of community and teamwork, where
              everyone feels valued and encouraged to reach their full
              potential.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img
              className="rounded-full w-14 h-14"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="Joseph McFall profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left ms-3">
              <div>Joseph McFall</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Head Instructor
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Instructor;
