import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

function Sidebar({ onSelectConversation }) {
  return (
    <div className="h-full p-4 flex flex-col">
      <SearchInput onSelectConversation={onSelectConversation} />

      <div className="divider px-3"></div>

      <div className="flex-1 overflow-auto">
        <Conversations onSelectConversation={onSelectConversation} />
      </div>

      <LogoutBtn />
    </div>
  );
}

export default Sidebar;
