// Images
import { useEffect, useState } from "react";
import { MdBook, MdSearch } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Images
import book from "../../../../../assets/images/book.png";
import video from "../../../../../assets/images/video.png";

export default function TeacherResourceLibrary() {
  const [videos, setVideos] = useState();
  const [books, setBooks] = useState();
  async function fetchVideos() {
    // API REQUEST TO GET VIDEOS
    // SET VIDEOS STATE
  }
  async function fetchBooks() {
    // API REQUEST TO GET BOOKS
    // SET BOOKS STATE
  }
  useEffect(() => {
    fetchVideos();
    fetchBooks();
  }, []);

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
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
                <div className="h-[200px] w-[120px] min-w-[120px]">
                  <img
                    src={book}
                    alt=""
                    className="h-[150px] max-h-[150px] min-h-[150px] w-[120px] object-cover"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Essential Grammar in use
                    </p>
                    <small className="text-gray-400">Raymond Murphy</small>
                  </div>
                </div>
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
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
                    </p>
                  </div>
                </div>
                <div className="h-[120px] w-[200px] min-w-[200px]">
                  <img
                    src={video}
                    alt=""
                    className="h-[100px] max-h-[100px] min-h-[80px] w-[200px] object-cover rounded-lg"
                  />

                  <div className="">
                    <p className="font-semibold text-sm mt-2 text-black">
                      Quantum Physics
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
      </section>
    </>
  );
}
