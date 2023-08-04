import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaPlaneDeparture } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client";
import { UserContext } from "../../Dashboard";
import Chat from "./Chat";
import { MdSearch } from "react-icons/md";
import student from "../../../../../assets/images/student.png";
import { TbRobot } from "react-icons/tb";

// SOCKET.IO CONFIG
// const socket = io.connect("http://localhost:3001");
// const socket = io.connect("https://www.corset-backend.vercel.app");

export default function StudentAiChat(props) {
  const { user } = useContext(UserContext);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  //   Ref to prevent useEffect from running twice
  const dataFetchRef = useRef(false);

  //   Load all messages from this chat room
  //   async function getMessages() {
  //     await axios
  //       .get(`http://localhost:3001/messages/${props?.chatRoom}/get-messages`)
  //       .then((res) => {
  //         console.log("MESSAGES FROM PROJECT CHAT COMP:", res.data);
  //         setMessages(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log("ERROR:", err);
  //       });
  //   }

  // Connect to Web Socket here to enable chat functionality
  //   function joinChatRoom() {
  //     socket.emit("join-room", `${props?.chatRoom}`);
  //   }
  // Use websocket to send message
  //   async function sendMessage() {
  //     if (!newMessage.replace(/\s/g, "").length) {
  //       toast.info("Message box cannot contain only whitespaces");
  //       return;
  //     } else {
  //       await axios
  //         .post(`http://localhost:3001/student/ai-chat`, {message: newMessage})
  //         .then((res) => {
  //           console.log("MESSAGES FROM PROJECT CHAT COMP:", res.data);
  //           setMessages((message) => {
  //             console.log("MESSAGE OOOO:", message);
  //             return [
  //               ...message,
  //               {
  //                 message: newMessage,
  //                 chatRoom: props?.project?.chatRoom,
  //                 sender: user,
  //                 modelType: "User",
  //               },
  //             ];
  //           });
  //         })
  //         .catch((err) => {
  //           console.log("ERROR:", err);
  //         });

  //       console.log("SEND MESSAGE:", messages);
  //       //   Reset input field
  //       setNewMessage("");
  //     }
  //   }

  //   useEffect(() => {
  //     getMessages();
  //     joinChatRoom();
  //   }, []);

  //   async function updateMessages(data) {
  //     setMessages((message) => [
  //       ...message,
  //       {
  //         _id: data._id,
  //         message: data.message,
  //         sender: {
  //           _id: data.sender._id,
  //           firstName: data.sender.firstName,
  //           lastName: data.sender.lastName,
  //           email: data.sender.email,
  //         },
  //       },
  //     ]);
  //     return;
  //   }

  //   Listen to changes on socket server
  //   useEffect(() => {
  //     socket.on("receive-message", async (data) => {
  //       if (dataFetchRef.current) return;
  //       dataFetchRef.current = true;
  //       updateMessages(data);
  //     });
  //   }, [socket]);

  //   Listen to changes on socket server

  return (
    <>
      <ToastContainer />
      {/* OVERVIEW */}
      <div className="flex justify-between bg-white text-black rounded-lg">
        <div className="border-[.5px] p-7 h-[600px] w-full relative rounded-lg">
          <div className="border-b-[.5px] pb-3">
            <h1 className="text-xl font-bold">
              {props?.project?.engineerAssigned?.firstName}{" "}
              {props?.project?.engineerAssigned?.lastName}
            </h1>
            <div className="flex gap-1 items-center">
              <TbRobot size={30} className="" />
              <p className="font-semibold">Ai</p>
            </div>
            {/* <div className="flex gap-1">
            <div className="h-[5px] w-[5px] my-auto bg-gray-400 rounded-full"></div>
            <p className="text-xs my-auto mt-[1.5px]">Offline</p>
          </div> */}
          </div>

          {/* CHAT */}
          <Chat role={user} messages={messages} project={props?.project} />

          <form
            className="absolute bottom-4 left-0 right-0 mx-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex h-12 align-middle border-[.5px] px-4">
              <input
                type="text"
                name="message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="w-full h-full border-gray-400  px-8 text-black text-sm rounded-lg rounded-bl-lg focus:outline-none"
              />
              <button type="submit" onClick={() => {}}>
                <FaPaperPlane className="text-lg my-auto self-center" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}