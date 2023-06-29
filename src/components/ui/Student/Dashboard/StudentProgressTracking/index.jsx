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
import { MdBook, MdCalendarToday, MdClass } from "react-icons/md";
import { TbAtom, TbDna2, TbMath, TbUserX } from "react-icons/tb";

// Images
import avatar from "../../../../../assets/images/Avater.png";
import video from "../../../../../assets/images/video.png";
import escience from "../../../../../assets/images/escience.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// Register ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function StudentProgressTracking() {
  const { user, projects } = useContext(UserContext);

  // Bar Chart Setup
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [20, 10, 20, 40, 30, 60],
        backgroundColor: "#FFD60C",
        borderWidth: 0.5,
        barThickness: 10,
        borderRadius: 200
      },
    ],
  };

  const options = {};

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="w-full lg:w-[50%] xl:w-[60%] rounded-xl mt-20 max-h-96">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="">
                <AiOutlineLeft size={32} color="#000" className="" />
              </div>
              <div className="flex w-full gap-x-5 items-center overflow-x-scroll max-w-full overflow-y-hidden">
                <div className="bg-white rounded-lg p-4 h-[170px] w-[350px] min-w-[350px]">
                  <p className="text-center text-solyntaBlue font-semibold">
                    Introduction to Environmental Science
                  </p>

                  <div className="flex items-center justify-center mt-5">
                    <img
                      src={escience}
                      alt=""
                      className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                    />
                    <div className="relative flex justify-center w-1/2 gap-y-5">
                      <CircularProgressbar
                        value={100}
                        maxValue={100}
                        minValue={0}
                        strokeWidth={5}
                        className="w-[100px]"
                        // text={`100%`}
                        // counterClockwise={true}
                        styles={buildStyles({
                          display: "flex",
                          fleexDirection: "column",
                          justifyContent: "center",
                          // Rotation of path and trail, in number of turns (0-1)

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "round",

                          // Text size
                          textSize: "24px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(0, 255, 0, ${100 / 100})`,
                          textColor: "#f88",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",

                          text: {
                            // Text color
                            fill: "#f88",
                            margin: "0 20px 0 0",
                            // Text size
                            // fontSize: "16px",
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 h-[170px] w-[350px] min-w-[350px]">
                  <p className="text-center text-solyntaBlue font-semibold">
                    Introduction to Environmental Science
                  </p>

                  <div className="flex items-center justify-center mt-5">
                    <img
                      src={escience}
                      alt=""
                      className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                    />
                    <div className="relative flex justify-center w-1/2 gap-y-5">
                      <CircularProgressbar
                        value={100}
                        maxValue={100}
                        minValue={0}
                        strokeWidth={5}
                        className="w-[100px]"
                        // text={`100%`}
                        // counterClockwise={true}
                        styles={buildStyles({
                          display: "flex",
                          fleexDirection: "column",
                          justifyContent: "center",
                          // Rotation of path and trail, in number of turns (0-1)

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "round",

                          // Text size
                          textSize: "24px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(0, 255, 0, ${100 / 100})`,
                          textColor: "#f88",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",

                          text: {
                            // Text color
                            fill: "#f88",
                            margin: "0 20px 0 0",
                            // Text size
                            // fontSize: "16px",
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 h-[170px] w-[350px] min-w-[350px]">
                  <p className="text-center text-solyntaBlue font-semibold">
                    Introduction to Environmental Science
                  </p>

                  <div className="flex items-center justify-center mt-5">
                    <img
                      src={escience}
                      alt=""
                      className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                    />
                    <div className="relative flex justify-center w-1/2 gap-y-5">
                      <CircularProgressbar
                        value={100}
                        maxValue={100}
                        minValue={0}
                        strokeWidth={5}
                        className="w-[100px]"
                        // text={`100%`}
                        // counterClockwise={true}
                        styles={buildStyles({
                          display: "flex",
                          fleexDirection: "column",
                          justifyContent: "center",
                          // Rotation of path and trail, in number of turns (0-1)

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "round",

                          // Text size
                          textSize: "24px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(0, 255, 0, ${100 / 100})`,
                          textColor: "#f88",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",

                          text: {
                            // Text color
                            fill: "#f88",
                            margin: "0 20px 0 0",
                            // Text size
                            // fontSize: "16px",
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 h-[170px] w-[350px] min-w-[350px]">
                  <p className="text-center text-solyntaBlue font-semibold">
                    Introduction to Environmental Science
                  </p>

                  <div className="flex items-center justify-center mt-5">
                    <img
                      src={escience}
                      alt=""
                      className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                    />
                    <div className="relative flex justify-center w-1/2 gap-y-5">
                      <CircularProgressbar
                        value={100}
                        maxValue={100}
                        minValue={0}
                        strokeWidth={5}
                        className="w-[100px]"
                        // text={`100%`}
                        // counterClockwise={true}
                        styles={buildStyles({
                          display: "flex",
                          fleexDirection: "column",
                          justifyContent: "center",
                          // Rotation of path and trail, in number of turns (0-1)

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "round",

                          // Text size
                          textSize: "24px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(0, 255, 0, ${100 / 100})`,
                          textColor: "#f88",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",

                          text: {
                            // Text color
                            fill: "#f88",
                            margin: "0 20px 0 0",
                            // Text size
                            // fontSize: "16px",
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 h-[170px] w-[350px] min-w-[350px]">
                  <p className="text-center text-solyntaBlue font-semibold">
                    Introduction to Environmental Science
                  </p>

                  <div className="flex items-center justify-center mt-5">
                    <img
                      src={escience}
                      alt=""
                      className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                    />
                    <div className="relative flex justify-center w-1/2 gap-y-5">
                      <CircularProgressbar
                        value={100}
                        maxValue={100}
                        minValue={0}
                        strokeWidth={5}
                        className="w-[100px]"
                        // text={`100%`}
                        // counterClockwise={true}
                        styles={buildStyles({
                          display: "flex",
                          fleexDirection: "column",
                          justifyContent: "center",
                          // Rotation of path and trail, in number of turns (0-1)

                          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                          strokeLinecap: "round",

                          // Text size
                          textSize: "24px",

                          // How long animation takes to go from one percentage to another, in seconds
                          pathTransitionDuration: 0.5,

                          // Can specify path transition in more detail, or remove it entirely
                          // pathTransition: 'none',

                          // Colors
                          pathColor: `rgba(0, 255, 0, ${100 / 100})`,
                          textColor: "#f88",
                          trailColor: "#fff",
                          backgroundColor: "#3e98c7",

                          text: {
                            // Text color
                            fill: "#f88",
                            margin: "0 20px 0 0",
                            // Text size
                            // fontSize: "16px",
                          },
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <AiOutlineRight size={32} color="#000" className="" />
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-lg mt-20 font-semibold text-white">
          My Assessment Scores
        </h3>

        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-4 max-h-96 overflow-y-scroll">
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-black">Assessment Scores</p>
          </div>

          <div className="flex items-center justify-between my-3">
            <small className="font-bold text-gray-400 w-1/4">
              The assessment name
            </small>
            <small className="text-gray-400 w-1/4">Grade</small>
            <small className="text-gray-400 w-1/4">Class average</small>
            <small className="text-gray-400 w-1/4">Feedback</small>
          </div>

          <hr />

          <div className="">
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Pre-Assessment</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-green-500 w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Spelling Test</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-green-500 w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">
                Reading Fluency Assessment
              </small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-green-500 w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Vocabulary Quiz</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-green-500 w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
            {/* Assessment Card */}
            <div className="flex items-start justify-between my-7">
              <small className="text-black w-1/4">Problem-Solving Task</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-black w-1/4">85%</small>
              <small className="text-green-500 w-1/4">
                Shows a solid understanding of the pre-assessment topics.
                Student B has performed exceptionally w...
              </small>
            </div>
          </div>
        </div>

        <h3 className="text-lg mt-20 font-semibold text-white">
          Academic Progress
        </h3>

        {/* BAR CHART */}
        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-5">
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-black">Total Revenue</p>
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-solyntaYellow"></div>
                <small className="text-black">Earning</small>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="h-2 w-2 rounded-full bg-gray-400"></div>
                <small className="text-black">Expense</small>
              </div>
            </div>
          </div>

          <Bar className="" data={data} options={options}></Bar>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-black flex flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0 lg:max-w-[30%]">
          <div className="bg-white text-black shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold my-3">Completed Assignments</h3>

            <select
              name="subject"
              id="subject"
              className="w-full h-10 rounded-lg shadow-lg bg-cosretBlue-300 px-8 text-black text-sm mt-3 mb-5 focus:outline-none"
            >
              <option value="">Subject</option>
            </select>

            <div className="flex flex-col gap-y-5">
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Title Of The Assignment
                </p>

                <div className="mt-2">
                  <div className="">
                    <div className="flex items-start gap-x-3 my-1">
                      <div className="h-[5px] w-[5px] min-w-[5px] max-w-[5px] min-h-[5px] max-h-[5px] bg-solyntaYellow rounded-full"></div>
                      <small className="text-black font-semibold -mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In efficitur ante non sapien pulvinar porttitor. Nam in
                        hendrerit sapien. Nam sem erat, vulputate et . Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>

                    <div className="flex items-center gap-x-3 ml-4">
                      <MdCalendarToday size={16} className="text-gray-500" />
                      <small className="text-gray-500">02/02/2023</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Title Of The Assignment
                </p>

                <div className="mt-2">
                  <div className="">
                    <div className="flex items-start gap-x-3 my-1">
                      <div className="h-[5px] w-[5px] min-w-[5px] max-w-[5px] min-h-[5px] max-h-[5px] bg-solyntaYellow rounded-full"></div>
                      <small className="text-black font-semibold -mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In efficitur ante non sapien pulvinar porttitor. Nam in
                        hendrerit sapien. Nam sem erat, vulputate et . Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>

                    <div className="flex items-center gap-x-3 ml-4">
                      <MdCalendarToday size={16} className="text-gray-500" />
                      <small className="text-gray-500">02/02/2023</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Title Of The Assignment
                </p>

                <div className="mt-2">
                  <div className="">
                    <div className="flex items-start gap-x-3 my-1">
                      <div className="h-[5px] w-[5px] min-w-[5px] max-w-[5px] min-h-[5px] max-h-[5px] bg-solyntaYellow rounded-full"></div>
                      <small className="text-black font-semibold -mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In efficitur ante non sapien pulvinar porttitor. Nam in
                        hendrerit sapien. Nam sem erat, vulputate et . Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </small>
                    </div>

                    <div className="flex items-center gap-x-3 ml-4">
                      <MdCalendarToday size={16} className="text-gray-500" />
                      <small className="text-gray-500">02/02/2023</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
