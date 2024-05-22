import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { setSelectedConversation } from "../../store/conversationSlice";

function SearchInput() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
    if (conversation) {
      dispatch(setSelectedConversation(conversation));
      setSearch("");
    }
    else {
      toast.error("No such user found!");
    }
  }

  return (
    <form className=" flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search.."
        className="input input-bordered input-accent w-full max-w-xs"
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
          <button className="btn btn-circle bg-accent hover:bg-orange-200">
          <BiSearchAlt2 className=" w-6 h-6 outline-none"/>
          </button>
    </form>
  );
}

export default SearchInput;
