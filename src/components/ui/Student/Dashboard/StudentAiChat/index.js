// @ts-nocheck
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { FaPaperPlane, FaPlaneDeparture } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../Dashboard";
import Chat from "./Chat";
import { TbRobot } from "react-icons/tb";

export default function StudentAiChat(props) {
  const { user } = useContext(UserContext);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  //   Ref to prevent useEffect from running twice
  const dataFetchRef = useRef(false);

  async function sendMessage() {
    if (!newMessage.replace(/\s/g, "").length) {
      toast.info("Message box cannot contain only whitespaces");
      return;
    } else {
      await axios
        .post(`http://localhost:3001/student/ai-chat`, { message: newMessage })
        .then((res) => {
          console.log("MESSAGES FROM PROJECT CHAT COMP:", res.data);
          console.log(
            "RESPONSE CHAT COMP:",
            res.data?.data?.choices[0]?.message?.content
          );
          setMessages([
            ...messages,
            {
              message: newMessage,
              sender: user,
              modelType: "User",
            },
            {
              message: res.data?.data?.choices[0]?.message?.content,
              //   sender: user,
              isAi: true,
            },
          ]);
          //   setMessages((message) => {
          //     console.log("MESSAGE OOOO:", message);
          //     return [
          //       ...message,
          //       {
          //         message: newMessage,
          //         sender: user,
          //         modelType: "User",
          //       },
          //     ];
          //   });
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });

      console.log("SEND MESSAGE:", messages);
      //   Reset input field
      setNewMessage("");
    }
  }

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
              <p className="font-semibold">Solynta Ai</p>
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
              <button type="submit" onClick={sendMessage}>
                <FaPaperPlane className="text-lg my-auto self-center" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
