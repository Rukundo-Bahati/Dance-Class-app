import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Dates from "./Dates";
import Actions from "./Actions";
import Sign from "../blog/Sign";

const Events = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white">
        <div className="relative p-6 bg-cover bg-center bg-[url('src/assets/d2.webp')] min-h-96 flex flex-col items-start justify-center">
      
      <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
        <h1 className="text-white text-4xl font-bold mb-4">Events</h1>
        <div className="flex items-center justify-center space-x-2">
          <h3
            className="text-red-500 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </h3>
          <FaArrowRight className="text-white" />
          <h3 className="text-white">Events</h3>
        </div>
      </div>
    </div>
      <div className="flex flex-col sm:flex-row items-center justify-center p-4 gap-5">
        <Dates
          bg="bg-red-600"
          day="1st Day"
          date="20 October 2024"
          txt="text-white"
          hvr=""
          txtc=""
        />
        <Dates
          bg="bg-transparent"
          day="2nd Day"
          date="05 January 2025"
          txt="text-slate-700"
          hvr="bg-red-600"
          txtc="text-white"
        />
        <Dates
          bg="bg-transparent"
          day="3rd Day"
          date="05 March 2025"
          txt="text-slate-700"
          hvr="bg-red-600"
          txtc="text-white"
        />
      </div>
      <div className="flex flex-col items-center gap-5 p-4">
        <Actions
          main="Open House And Registration"
          time="09:00AM-4:00PM"
          place="Kigali Rwanda"
          summary="Compellingly recaptiualize cost effective synergy rather than prospective architectures. Proactively exploit enterprise-wide information vis-a-vis real-time. Assertively pursue efficient methodologies whereas clicks-and-mortar supply chains."
        />
        <Actions
          main="Open House And Registration"
          time="10:00AM-4:00PM"
          place="Musanze Rwanda"
          summary="Event summary content typically includes a brief overview of the key highlights of an event, such as its purpose, attendees, keynote speakers, discussions, and outcomes. It may also include details about any other relevant information."
        />
        <Actions
          main="Open House And Registration"
          time="09:00AM-4:00PM"
          place="Muhanga Rwanda"
          summary="An effective event summary should provide a concise and engaging narrative that captures the essence of the event and highlights its most important takeaways. It should be written in a clear and accessible language, and be structured."
        />
        <Actions
          main="Open House And Registration"
          time="10:00AM-4:00PM"
          place="Rwamagana Rwanda"
          summary="A well-crafted event summary can help to promote the event and its key messages to a wider audience, as well as provide valuable insights and knowledge to those who were unable to attend."
        />
      </div>
      <Sign />
    </div>
  );
};

export default Events;
