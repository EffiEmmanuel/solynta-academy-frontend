import { useContext } from "react";
import { UserContext } from "../../Dashboard";
import StudentChat from "../StudentChat";

export default function StudentCommunicationTools() {
  const { user, projects } = useContext(UserContext);
  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative bg-white rounded-xl text-black">
        <StudentChat />
      </section>
    </>
  );
}
