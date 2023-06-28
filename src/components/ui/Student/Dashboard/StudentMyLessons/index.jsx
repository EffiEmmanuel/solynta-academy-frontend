import { useContext } from "react";
import { UserContext } from "../../Dashboard";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import StudentAiChat from "../StudentAiChat";

// Images
import escience from "../../../../../assets/images/escience.png";
import { BsArrowRight, BsRepeat } from "react-icons/bs";

export default function StudentMyLessons() {
  const { user, projects } = useContext(UserContext);

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="w-full p-10 bg-white shadow-md rounded-xl mt-20 max-h-96">
          <div className="">
            <div className="flex justify-between text-solyntaBlue items-center mb-7">
              <h4 className="text-xl font-semibold">Recommended lessons</h4>
              <small>View all</small>
            </div>
            <div className=" flex justify-between items-center">
              <div className="">
                <AiOutlineLeft size={32} color="#000" className="" />
              </div>
              <div className="flex w-full gap-x-5 items-center overflow-x-scroll max-w-full overflow-y-hidden">
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={escience}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Introduction to Environmental Science
                    </p>
                  </div>
                </div>
              </div>
              <div className="">
                <AiOutlineRight size={32} color="#000" className="" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="mt-16 mb-5 text-xl font-semibold">
          Introduction to Environmental Science
        </h3>

        {/* AI CHAT */}
        <StudentAiChat />

        {/* ACTION BUTTONS */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Call to action */}
          <button className="mt-5 flex items-center gap-x-2 -ml-2 font-semibold rounded-lg px-7 py-4 bg-solyntaYellow text-solyntaBlue">
            <span>Please Explain this again</span>
            <BsRepeat size={20} />
          </button>
          <button className="mt-5 flex items-center gap-x-2 -ml-2 font-semibold rounded-lg px-7 py-4 bg-white text-solyntaBlue">
            <span>Give me some examples</span>
          </button>
          <button className="mt-5 flex items-center gap-x-2 -ml-2 font-semibold rounded-lg px-7 py-4 bg-solyntaBlue text-solyntaYellow">
            <span>I'm ready to move on</span>
            <BsArrowRight size={20} />
          </button>
        </div>
      </section>
    </>
  );
}
