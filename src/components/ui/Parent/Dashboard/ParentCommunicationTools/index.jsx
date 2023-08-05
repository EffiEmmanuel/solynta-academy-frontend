import { useContext } from "react";
import { ParentContext } from "..";
import ParentChat from "../ParentChat";

export default function ParentCommunicationTools() {
  const { user, projects } = useContext(ParentContext);
  return (
    <>
      {/* LATEST ACTIVITY */}
      <section className="mt-20 relative bg-white rounded-xl text-black">
        <ParentChat />
      </section>
    </>
  );
}
