import { useContext } from "react";
import { UserContext } from "../../Dashboard";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { PiStudentFill } from "react-icons/pi";
import { MdBook, MdClass, MdSearch } from "react-icons/md";
import { TbAtom, TbDna2, TbMath, TbUserX } from "react-icons/tb";

// Images
import avatar from "../../../../../assets/images/Avater.png";
import video from "../../../../../assets/images/video.png";
import esience from "../../../../../assets/images/escience.png";
import mathematics from "../../../../../assets/images/mathematics.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { GiSettingsKnobs } from "react-icons/gi";
import { GoGoal } from "react-icons/go";
import { BsListOl } from "react-icons/bs";

// Register ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function StudentCourses() {
  // const { user, projects } = useContext(UserContext);

  // Bar Chart Setup
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [20, 10, 20, 40, 30, 60],
        backgroundColor: "#FFD60C",
      },
    ],
  };

  const options = {};

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="flex justify-between w-full lg:w-[50%] xl:w-[60%] items-center">
          <div className="flex bg-solyntaBlueFaded h-10 rounded-lg p-2">
            <MdSearch size={20} className="text-gray-600 my-auto" />
            <input
              type="text"
              name="search"
              className="bg-transparent text-sm placeholder:text-xs my-auto ml-2"
              placeholder="Search..."
            />
          </div>

          <div
            className="flex items-center gap-x-3 cursor-pointer"
            onClick={() => {}}
          >
            <span>Filter</span>
            <GiSettingsKnobs
              onClick={() => {}}
              size={20}
              className="text-white rotate-90"
            />
          </div>
        </div>

        <h3 className="text-white text-xl font-bold mt-10">Courses</h3>

        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-10">
          <div className="">
            <div className="flex justify-between text-solyntaBlue items-center mb-7">
              <h4 className="text-xl font-semibold">Environmental science</h4>
              <small>View all</small>
            </div>

            <div className="flex flex-col gap-y-10">
              <div className="bg-white shadow-lg p-5 rounded-lg flex justify-between gap-x-5">
                <div className="flex items-center gap-x-3">
                  <img src={esience} alt="" className="shadow-lg" />
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-black">
                        Introduction to Environmental Science
                      </p>
                      <button className="bg-solyntaYellow text-solyntaBlue rounded-lg h-10 w-32 text-sm p-3">
                        Learn more
                      </button>
                    </div>
                    <small className="text-gray-400">
                      By Name Of The Instructor
                    </small>
                    <p className="text-black mt-2">
                      The Introduction to Environmental Science course provides
                      students with a foundational understanding of the key
                      principles...
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-lg p-5 rounded-lg flex justify-between gap-x-5">
                <div className="flex items-center gap-x-3">
                  <img src={esience} alt="" className="shadow-lg" />
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-black">
                        Introduction to Environmental Science
                      </p>
                      <button className="bg-solyntaYellow text-solyntaBlue rounded-lg h-10 w-32 text-sm p-3">
                        Learn more
                      </button>
                    </div>
                    <small className="text-gray-400">
                      By Name Of The Instructor
                    </small>
                    <p className="text-black mt-2">
                      The Introduction to Environmental Science course provides
                      students with a foundational understanding of the key
                      principles...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-10">
          <div className="">
            <div className="flex justify-between text-solyntaBlue items-center mb-7">
              <h4 className="text-xl font-semibold">Mathematics</h4>
              <small>View all</small>
            </div>

            <div className="flex flex-col gap-y-10">
              <div className="bg-white shadow-lg p-5 rounded-lg flex justify-between gap-x-5">
                <div className="flex items-center gap-x-3">
                  <img src={mathematics} alt="" className="shadow-lg" />
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-black">
                        Advanced Algebra and Trigonometry
                      </p>
                      <button className="bg-solyntaYellow text-solyntaBlue rounded-lg h-10 w-32 text-sm p-3">
                        Learn more
                      </button>
                    </div>
                    <small className="text-gray-400">
                      By Name Of The Instructor
                    </small>
                    <p className="text-black mt-2">
                      The Advanced Algebra and Trigonometry course is designed
                      to provide high school students with an in-depth
                      understanding...
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow-lg p-5 rounded-lg flex justify-between gap-x-5">
                <div className="flex items-center gap-x-3">
                  <img src={mathematics} alt="" className="shadow-lg" />
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-black">
                        Advanced Algebra and Trigonometry
                      </p>
                      <button className="bg-solyntaYellow text-solyntaBlue rounded-lg h-10 w-32 text-sm p-3">
                        Learn more
                      </button>
                    </div>
                    <small className="text-gray-400">
                      By Name Of The Instructor
                    </small>
                    <p className="text-black mt-2">
                      The Advanced Algebra and Trigonometry course is designed
                      to provide high school students with an in-depth
                      understanding...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-black flex flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0 max-w-[30%]">
          <div className="bg-white shadow-lg rounded-lg p-5">
            <img src={esience} alt="" className="w-full" />

            <p className="font-bold text-black">
              Introduction to Environmental Science
            </p>
            <small className="text-gray-400">By Name Of The Instructor</small>

            <p className="my-4">
              The Introduction to Environmental Science course provides students
              with a foundational understanding of the key principles and
              concepts in the field of environmental science. Through a
              combination of theoretical knowledge and practical applications,
              students will explore the intricate relationship between the
              environment and human activities.
            </p>

            {/* Learning Objectives */}
            <div>
              <div className="flex items-center gap-x-2 my-2">
                <GoGoal size={28} className="text-solyntaYellow" />
                <p className="font-semibold">Learning Objectives:</p>
              </div>

              <div className="px-10">
                <ol className="list-decimal">
                  <li>
                    <p>
                      Understand the basic principles and concepts of
                      environmental science, including ecosystems, biodiversity,
                      and natural resource management.
                    </p>
                  </li>
                  <li>
                    <p>
                      Analyze and evaluate environmental issues and challenges,
                      such as pollution, climate change, and habitat loss, using
                      critical thinking skills.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Prerequisites */}
            <div>
              <div className="flex items-center gap-x-2 my-4">
                <BsListOl size={28} className="text-solyntaYellow" />
                <p className="font-semibold">Prerequisites:</p>
              </div>

              <div className="px-10">
                <p>To enroll in this course, students should have:</p>
                <ol className="list-decimal">
                  <li>
                    <p>
                      Basic knowledge of biology, chemistry, and earth science
                      concepts. Proficiency in scientific inquiry skills, such
                      as observation, data collection, and analysis.
                    </p>
                  </li>
                  <li>
                    <p>
                      Strong critical thinking and problem-solving skills to
                      analyze and evaluate scientific information.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
