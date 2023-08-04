import { useContext } from "react";
import { UserContext } from "../../Dashboard";
import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { CiMenuKebab } from "react-icons/ci";
import { RiMessage2Line } from "react-icons/ri";

// Images
import avatar from "../../../../../assets/images/Avater.png";
import student from "../../../../../assets/images/student.png";
import { MdClass } from "react-icons/md";

// Register ChartJS
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function TeacherStudentMonitoring() {
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

  // Line chart setup
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "",
        data: [60, 55, 65, 75, 65, 78],
        backgroundColor: "transparent",
        borderColor: "#FFD60C",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.3,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        // min: 2,
        // max: 10,
        // ticks: {
        //   stepSize: 2,
        // },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
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

        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 mt-20 bg-white shadow-md rounded-xl">
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

          <Line className="" data={lineData} options={lineOptions}></Line>
        </div>

        {/* BAR CHART */}
        <div className="w-full lg:w-[50%] xl:w-[60%] p-10 bg-white shadow-md rounded-xl mt-20">
          <div className="flex items-center justify-between mb-6">
            <p className="font-bold text-black">Productivity</p>
          </div>

          <Bar className="" data={data} options={options}></Bar>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-black items-end flex flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0">
          <div className="w-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center justify-between">
              <RiMessage2Line size={20} className="text-solyntaBlue" />
              <CiMenuKebab size={20} className="text-solyntaBlue rotate-90" />
            </div>

            <img src={student} alt="Student" className="mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-center">Student Name</h3>
            <p className="text-gray-500 text-center">Class</p>
          </div>

          <div className="w-full bg-white text-black shadow-lg rounded-lg p-5">
            <h3 className="text-xl font-bold my-3">List of Classes</h3>

            <div className="flex flex-col gap-y-5">
              <div className="flex items-center gap-x-4 justify-between">
                <div className="h-10 flex justify-center items-center p-2 w-1/2 bg-white rounded-lg shadow-lg">
                  <small>Class 1</small>
                </div>
                <div className="h-10 flex justify-center items-center p-2 w-1/2 bg-white rounded-lg shadow-lg">
                  <small>Class 1</small>
                </div>
              </div>
              <div className="flex items-center gap-x-4 justify-between">
                <div className="h-10 flex justify-center items-center p-2 w-1/2 bg-solyntaBlue text-white rounded-lg shadow-lg">
                  <small>Class 1</small>
                </div>
                <div className="h-10 flex justify-center items-center p-2 w-1/2 bg-white rounded-lg shadow-lg">
                  <small>Class 1</small>
                </div>
              </div>
              <div className="flex items- gap-x-4 justify-between">
                <div className="h-10 flex justify-center items-center p-2 w-1/2 bg-white rounded-lg shadow-lg">
                  <small>Class 1</small>
                </div>
                <div className="h-10 flex justify-center items-center p-2 w-1/2 bg-white rounded-lg shadow-lg">
                  <small>Class 1</small>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-10 bg-white shadow-md rounded-xl max-h-96 overflow-y-scroll">
            <div className="flex items-center justify-between mb-6">
              <p className="font-bold text-black">List of classes</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
