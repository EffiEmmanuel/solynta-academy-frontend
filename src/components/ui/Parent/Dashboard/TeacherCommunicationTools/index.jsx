import { useContext } from "react";
import { UserContext } from "../../Dashboard";
import TeacherChat from "../TeacherChat";

export default function TeacherCommunicationTools() {
  const { user, projects } = useContext(UserContext);
  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative bg-white rounded-xl text-black">
        <TeacherChat />
      </section>
    </>
  );
}
