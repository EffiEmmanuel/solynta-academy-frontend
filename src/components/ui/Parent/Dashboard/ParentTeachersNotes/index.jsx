import { useContext, useEffect, useState } from "react";
import { ParentContext } from "../../Dashboard";
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
import { MdBook, MdClass, MdList, MdSearch, MdShare } from "react-icons/md";
import { TbAtom, TbDna2, TbMath, TbUserX } from "react-icons/tb";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { GoLinkExternal } from "react-icons/go";

// Images
import avatar from "../../../../../assets/images/Avater.png";
import video from "../../../../../assets/images/video.png";
import student from "../../../../../assets/images/student.png";
import { RiMessage2Line } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { GiSettingsKnobs } from "react-icons/gi";
import TeachersNote from "../TeachersNote";
import axios from "axios";

// Register ChartJS
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
ChartJS.defaults.borderColor = "#E5E7EB";
ChartJS.defaults.color = "#000";

export default function ParentTeachersNote() {
  const { parent, children } = useContext(ParentContext);
  const [selectChildren, setSelectChildren] = useState();

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
        borderRadius: 200,
      },
    ],
  };

  const options = {};

  const [currentChild, setCurrentChild] = useState();

  useEffect(() => {
    async function fetchChild() {
      children?.forEach((child) => {
        if (child?._id == selectChildren) {
          setCurrentChild(child);
        }
      });
    }

    fetchChild();
  }, [children, selectChildren]);

  const [notes, setNotes] = useState();
  async function fetchNotes() {
    await axios
      .get(`http://localhost:3001/parent/get-notes/${selectChildren}`)
      .then((res) => {
        setNotes(res.data.Data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }

  useEffect(() => {
    fetchNotes();
  }, [selectChildren]);

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="flex items-center gap-x-5">
          <p>Select Child:</p>
          <select
            value={selectChildren}
            onChange={(e) => setSelectChildren(e.target.value)}
            className="px-4 py-2 rounded-lg text-black"
          >
            <option value="">--SELECT CHILD--</option>
            {children?.map((child) => (
              <option key={child?._id} value={child?._id}>
                {child?.firstName} {child?.lastName}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-y-10 gap-x-5 justify-center items-center lg:justify-between w-full lg:w-[50%] xl:w-[60%] my-10">
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

        {notes?.map((note) => (
          <div className="w-full lg:w-[50%] xl:w-[60%] flex flex-col xl:flex-row justify-between items-center md:flex-col gap-y-10 rounded-xl">
            <div className="text-black w-full min-h-[150px] bg-white shadow-md rounded-xl">
              <TeachersNote note={note} />
            </div>
          </div>
        ))}

        {(!notes || notes?.length < 1) && (
          <p>There are no teacher notes for this child yet...</p>
        )}

        {/* <div className="w-full lg:w-[50%] mt-10 xl:w-[60%] flex flex-col xl:flex-row justify-between items-center md:flex-col gap-y-10 rounded-xl">
          <div className="text-black w-full min-h-[150px] bg-white shadow-md rounded-xl">
            <TeachersNote />
          </div>
        </div> */}

        {/* RIGHT SECTION */}
        <div className="text-black items-end flex lg:max-w-[30%] w-full flex-col gap-y-10 lg:absolute lg:right-0 lg:top-0 my-10 lg:my-0">
          <div className="w-full bg-white shadow-lg rounded-lg p-5">
            <div className="flex items-center justify-between">
              <RiMessage2Line size={20} className="text-solyntaBlue" />
              <CiMenuKebab size={20} className="text-solyntaBlue rotate-90" />
            </div>

            <img
              src={currentChild?.image ?? student}
              alt="Student"
              className="mx-auto"
            />
            <h3 className="text-xl font-bold mt-4 text-center">
              {currentChild?.firstName} {currentChild?.lastName}
            </h3>
            {/* <p className="text-gray-500 text-center">Class</p> */}
          </div>
        </div>
      </section>
    </>
  );
}
