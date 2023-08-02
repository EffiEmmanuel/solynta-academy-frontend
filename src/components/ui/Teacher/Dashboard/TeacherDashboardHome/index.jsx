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
import { PiStudentFill } from 'react-icons/pi'

// Images
import avatar from "../../../../../assets/images/Avater.png";
import { MdClass } from "react-icons/md";

// Register ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function TeacherDashboardHome() {
  const { user, classes } = useContext(UserContext);

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
        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full lg:w-[50%] xl:w-[60%] my-10">
          <div className="bg-solyntaYellow w-[160px] rounded-lg p-5 flex justify-between items-center">
            <div className="bg-white p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
              <PiStudentFill size={30} color="#3F3F3F" />
            </div>
            <div className="text-center">
              <p className="font-semibold">Students</p>
              <p className="font-semibold">300</p>
            </div>
          </div>
          <div className="bg-[#92AFDD] w-[160px] rounded-lg p-5 flex justify-between items-center">
            <div className="bg-white p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
              <MdClass size={30} color="#3F3F3F" />
            </div>
            <div className="text-center">
              <p className="font-semibold">Classes</p>
              <p className="font-semibold">15</p>
            </div>
          </div>
          <div className="bg-solyntaYellow w-[160px] rounded-lg p-5 flex justify-between items-center">
            <div className="bg-white p-3 w-[40px] h-[40px] rounded-lg flex justify-center items-center">
              <PiStudentFill size={30} color="#3F3F3F" />
            </div>
            <div className="text-center">
              <p className="font-semibold">Students</p>
              <p className="font-semibold">300</p>
            </div>
          </div>
        </div>
        {/* BAR CHART */}
        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl">
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

        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-20 max-h-96 overflow-y-scroll">
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-black">List of students</p>
            <p className="text-black">Subject</p>
          </div>

          <div className="flex items-center justify-between my-3">
            <small className="font-bold text-gray-400">Fullname</small>
            <small className="text-gray-400">Subject</small>
            <small className="text-gray-400">Grade</small>
            <small className="text-gray-400">Status</small>
          </div>

          <hr />

          <div className="">
            {/* Student Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="Robert Karmes"
                  className="w-16 max-w-[30px] object-contain"
                />
                <small className="text-black">Robert Karmes</small>
              </div>
              <small className="text-black">Subject</small>
              <small className="text-black">A</small>
              <small className="text-green-500">Passed</small>
            </div>
            {/* Student Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="Robert Karmes"
                  className="w-16 max-w-[30px] object-contain"
                />
                <small className="text-black">Robert Karmes</small>
              </div>
              <small className="text-black">Subject</small>
              <small className="text-black">A</small>
              <small className="text-green-500">Passed</small>
            </div>
            {/* Student Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="Robert Karmes"
                  className="w-16 max-w-[30px] object-contain"
                />
                <small className="text-black">Robert Karmes</small>
              </div>
              <small className="text-black">Subject</small>
              <small className="text-black">A</small>
              <small className="text-green-500">Passed</small>
            </div>
            {/* Student Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="Robert Karmes"
                  className="w-16 max-w-[30px] object-contain"
                />
                <small className="text-black">Robert Karmes</small>
              </div>
              <small className="text-black">Subject</small>
              <small className="text-black">A</small>
              <small className="text-green-500">Passed</small>
            </div>
            {/* Student Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="Robert Karmes"
                  className="w-16 max-w-[30px] object-contain"
                />
                <small className="text-black">Robert Karmes</small>
              </div>
              <small className="text-black">Subject</small>
              <small className="text-black">A</small>
              <small className="text-green-500">Passed</small>
            </div>
            {/* Student Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="Robert Karmes"
                  className="w-16 max-w-[30px] object-contain"
                />
                <small className="text-black">Robert Karmes</small>
              </div>
              <small className="text-black">Subject</small>
              <small className="text-black">A</small>
              <small className="text-green-500">Passed</small>
            </div>
            {/* Student Card */}
            <div className="flex items-center justify-between my-7">
              <div className="flex items-center gap-x-2">
                <img
                  src={avatar}
                  alt="Robert Karmes"
                  className="w-16 max-w-[30px] object-contain"
                />
                <small className="text-black">Robert Karmes</small>
              </div>
              <small className="text-black">Subject</small>
              <small className="text-black">A</small>
              <small className="text-green-500">Passed</small>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-black flex flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0">
          <div className="bg-white shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold my-3">Today, 06 June</h3>

            <div className="flex justify-between items-center gap-x-3">
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>04</p>
                <p>Sun</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>05</p>
                <p>Mon</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlue">
                <p>06</p>
                <p>Tue</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>07</p>
                <p>Wed</p>
              </div>
              <div className="flex flex-col p-5 w-14 rounded-xl items-center justify-center font-bold text-white bg-solyntaBlueFaded">
                <p>08</p>
                <p>Thu</p>
              </div>
            </div>
          </div>
          <div className="bg-white text-black shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold my-3">Summary</h3>

            <div className="flex flex-col gap-y-5">
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Degree Qualification
                </p>

                <div className="mt-2">
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">
                      Bachelor of Science in Mathematics
                    </small>
                  </div>
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">
                      Bachelor of Education in Mathematics
                    </small>
                  </div>
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">
                      Master of Science in Applied Mathematics
                    </small>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Degree Qualification
                </p>

                <div className="mt-2">
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">Algebra</small>
                  </div>
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">Geometry</small>
                  </div>
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">
                      Statistics
                    </small>
                  </div>
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">
                      Linear Algebra
                    </small>
                  </div>
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">
                      Numerical Analysis
                    </small>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-solyntaBlue font-semibold">
                  Years of Experience
                </p>

                <div className="mt-2">
                  <div className="flex items-center gap-x-3 my-1">
                    <div className="h-1 w-1 bg-solyntaYellow rounded-full"></div>
                    <small className="text-black font-semibold">
                      Mid-level with 3-8 years of experience
                    </small>
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
