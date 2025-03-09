import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import { FaTimes } from "react-icons/fa";

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleConversationSelect = () => {
    setShowSidebar(false);
  };

  return (
    <div
      className="flex h-full w-full md:h-5/6 md:w-5/6 overflow-hidden bg-orange-50 rounded-lg 
    bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-orange-100"
    >
      {/* Mobile-only sidebar overlay when open */}
      {showSidebar && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-30 z-20"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar with mobile responsive behavior */}
      <div
        className={`
          w-[280px] lg:w-[320px]
          ${showSidebar ? "bg-orange-50" : "bg-orange-50/90"} lg:bg-orange-50/10
          backdrop-blur-md
          border-r border-orange-100
          transition-all duration-300 ease-in-out
          lg:static lg:translate-x-0
          fixed top-0 left-0 h-full z-30
          ${
            showSidebar
              ? "translate-x-0 text-gray-700"
              : "-translate-x-full text-gray-200"
          }
          lg:text-gray-200
        `}
      >
        {/* Close button - positioned outside the sidebar to the right */}
        {showSidebar && (
          <button
            className="lg:hidden absolute -right-12 top-3 p-2 rounded-full text-orange-300"
            onClick={toggleSidebar}
            aria-label="Close sidebar"
          >
            <FaTimes size={20} />
          </button>
        )}

        <Sidebar onSelectConversation={handleConversationSelect} />
      </div>

      <MessageContainer toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Home;
