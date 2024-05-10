import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

function Home() {
  return (
    <div
      className="flex sm:h-[450px] md:h-[550px] overflow-hidden  bg-orange-50 rounded-lg 
    bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-orange-100"
    >
      <Sidebar/>
      
    </div>
  );
}

export default Home;
