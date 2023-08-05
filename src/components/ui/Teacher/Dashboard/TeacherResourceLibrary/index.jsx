// Images
import { useContext, useEffect, useState } from "react";
import { MdBook, MdSearch } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TeacherContext } from "..";

// Images
import bookImage from "../../../../../assets/images/book.png";
import videoImage from "../../../../../assets/images/video.png";
import axios from "axios";

export default function TeacherResourceLibrary() {
  const { teacher } = useContext(TeacherContext);
  const [videos, setVideos] = useState();
  const [books, setBooks] = useState();

  async function fetchVideos() {
    // API REQUEST TO GET VIDEOS
    await axios
      .get(`http://localhost:3001/teacher/get-teacher-videos/${teacher?._id}`)
      .then((res) => {
        console.log("RESPONSE:", res.data);
        setVideos(res.data.Data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  }
  async function fetchBooks() {
    // API REQUEST TO GET BOOKS
    await axios
      .get(`http://localhost:3001/teacher/get-teacher-books/${teacher?._id}`)
      .then((res) => {
        console.log("RESPONSE:", res.data);
        setBooks(res.data.Data);
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
    // SET BOOKS STATE
  }
  useEffect(() => {
    fetchVideos();
    fetchBooks();
  }, [teacher]);

  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative">
        <div className="flex justify-between items-center">
          <div className="flex bg-solyntaBlueFaded h-10 rounded-lg p-2">
            <MdSearch size={20} className="text-gray-600 my-auto" />
            <input
              type="text"
              name="search"
              className="bg-transparent text-sm placeholder:text-xs my-auto ml-2"
              placeholder="Search..."
            />
          </div>

          <GiSettingsKnobs
            onClick={() => {}}
            size={20}
            className="text-white"
          />
        </div>

        <div className="mt-20">
          <div className="bg-white rounded-xl p-10">
            <div className="flex gap-x-1 text-solyntaBlue items-center mb-7">
              <MdBook size={24} />
              <h4 className="text-xl font-semibold">Books:</h4>
            </div>
            <div className=" flex justify-between items-center">
              <div className="">
                <AiOutlineLeft size={32} color="#000" className="" />
              </div>
              <div className="flex gap-x-5 items-center overflow-x-scroll max-w-full overflow-y-hidden">
                {books?.map((book) => (
                  <div className="h-[200px] w-[120px] min-w-[120px]">
                    <img
                      src={book?.image ?? bookImage}
                      alt=""
                      className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                    />

                    <div className="">
                      <p className="font-semibold text-sm mt-2 text-black">
                        {book?.title}
                      </p>
                      <small className="text-gray-400">{book?.author}</small>
                    </div>
                  </div>
                ))}

                {books?.length == 0 && (
                  <p className="text-black my-5">
                    There are no books here for now
                  </p>
                )}
              </div>
              <div className="">
                <AiOutlineRight size={32} color="#000" className="" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-10 mt-20">
            <div className="flex gap-x-1 text-solyntaBlue items-center mb-7">
              <MdBook size={24} />
              <h4 className="text-xl font-semibold">Videos:</h4>
            </div>
            <div className=" flex justify-between items-center">
              <div className="">
                <AiOutlineLeft size={32} color="#000" className="" />
              </div>
              <div className="flex gap-x-5 items-center overflow-x-scroll max-w-full overflow-y-hidden">
                {videos?.map((video) => (
                  <a
                    href={video?.link}
                    target="_blank"
                    className="h-[120px] w-[200px] min-w-[200px]"
                  >
                    <img
                      src={video?.image ?? videoImage}
                      alt=""
                      className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                    />

                    <div className="">
                      <p className="font-semibold text-sm mt-2 text-black">
                        {video?.title}
                      </p>
                    </div>
                  </a>
                ))}

                {videos?.length == 0 && (
                  <p className="text-black my-5">
                    There are no videos here for now
                  </p>
                )}
              </div>
              <div className="">
                <AiOutlineRight size={32} color="#000" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
