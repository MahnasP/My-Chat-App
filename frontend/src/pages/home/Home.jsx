import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

function Home() {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] overflow-hidden  bg-orange-50 rounded-lg 
    bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-orange-100"
    >
      <Sidebar/>
      <MessageContainer/>
    </div>
  );
}

export default Home;
