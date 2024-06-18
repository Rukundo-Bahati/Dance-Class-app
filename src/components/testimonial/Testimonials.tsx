import Slider from "react-slick";
import Testimonial from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  // Custom next arrow component
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    );
  };

  // Custom previous arrow component
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        onClick={onClick}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <CustomNextArrow />, // Custom next arrow component
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
  };

  return (
    <div className="bg-blue-950 p-8">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">
        Testimonials
      </h1>
      <p className="text-purple-500 italic text-center mb-5">
        What our student's say?
      </p>
      <Slider {...settings}>
        <div>
          <Testimonial
            name="John Doe"
            title="Dancer"
            image="src/assets/p1.jpg"
            testimonial="As a student at Spark Dance School, I have been immensely impressed by the quality of instruction and the support provided by the faculty. The courses are well-structured, and the instructors are highly knowledgeable and approachable. Spark has helped me develop both my technical dance skills and artistic expression, making me well-prepared for performances ahead. I am grateful for the opportunities and growth I have experienced here."
          />
        </div>
        <div>
          <Testimonial
            name="Jane Smith"
            title="Dancer"
            image="src/assets/p2.jpg"
            testimonial="My experience as a student at Spark Dance School has been truly transformative. The hands-on learning approach, combined with the mentorship and guidance from the faculty, has allowed me to excel in various dance styles and gain valuable insights into the dance industry. The supportive community at Spark has encouraged me to explore new choreographic techniques and challenge myself creatively. I highly recommend Spark Dance School to anyone looking for a dynamic and enriching educational experience in dance."
          />
        </div>
        <div>
          <Testimonial
            name="Alice Johnson"
            title="Professional Dancer"
            image="src/assets/p2.jpg"
            testimonial="Transitioning into a new dance genre or career field can be daunting, but Spark Dance School made the process seamless for me. The performance-focused curriculum, coupled with practical dance routines and real-world experiences, equipped me with the skills and confidence to succeed in the dance industry. The networking opportunities and career guidance provided by Spark Dance School were invaluable in helping me secure opportunities in dance companies and performances. I am grateful for the support and encouragement I received throughout my journey at Spark Dance School."
          />
        </div>
        <div>
          <Testimonial
            name="Bob Brown"
            title="Dance Enthusiast"
            image="src/assets/p1.jpg"
            testimonial="As someone passionate about dance and seeking to refine my skills, enrolling in Spark Dance School was one of the best decisions I made. The comprehensive curriculum and expert dance instructors helped me deepen my understanding of various dance forms and techniques. The opportunity to participate in recitals and showcases allowed me to showcase my talent and gain confidence as a dancer. I would highly recommend Spark Dance School to anyone looking to advance their skills and pursue their passion for dance."
          />
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
