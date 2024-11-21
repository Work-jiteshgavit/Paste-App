

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch
import { addToPastes, updateToPaste } from '../redux/pasteSlice';
import { Copy, PlusCircle } from "lucide-react";
import toast from 'react-hot-toast';

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch(); // Get the dispatch function
  const pasteId = searchParams.get("pasteId");
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }

  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPaste(paste)); // Dispatch the update action
    } else {
      dispatch(addToPastes(paste)); // Dispatch the add action
    }

    setTitle('');
    setValue('');
    setSearchParams({});
  }

  const resetPaste = () => {
    setTitle("");
    setValue("");
    setSearchParams({});
    // navigate("/");
  };

  return (
    <div className='container mx-auto p-4'>
      <div className={'flex flex-row gap-7 justify-between items-center mb-4'}>
        <input
          className='p-2 rounded-2xl border-2 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 mt-2 pl-4 w-[80%]'
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={createPaste}
          className={`p-2 rounded-2xl mt-2 bg-[#2563EB] text-white hover:bg-blue-600 transition duration-300 ease-in-out`}>
          {pasteId ? "Update my Paste" : "Create my Paste"}
        </button>

        {pasteId && (
          <button
            className="p-2 rounded-lg mt-2 bg-[#2563EB] text-white hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={resetPaste}
          >
            <PlusCircle size={20} />
          </button>
        )}
      </div>

      <div
        className={`w-full flex flex-col items-start relative rounded bg-opacity-10 border border-[rgba(128,121,121,0.3)] backdrop-blur-2xl shadow-md`}
      >
        <div
          className={`w-full rounded-t flex items-center justify-between gap-x-4 px-4 py-2 bg-gray-100 border-b border-gray-300`}
        >
          <div className="w-full flex gap-x-[6px] items-center select-none">
            <div className="w-[13px] h-[13px] rounded-full bg-red-500" />
            <div className="w-[13px] h-[13px] rounded-full bg-yellow-500" />
            <div className="w-[13px] h-[13px] rounded-full bg-green-500" />
          </div>

          {/* Circle and copy btn */}
          <div className={`w-fit rounded-t flex items-center justify-between gap-x-4`}>
            {/* Copy button */}
            <button
              className={`flex justify-center items-center transition-all duration-300 ease-in-out group`}
              onClick={() => {
                navigator.clipboard.writeText(value);
                toast.success("Copied to Clipboard", {
                  position: "top-right",
                });
              }}
            >
              <Copy className="group-hover:text-green-500" size={20} />
            </button>
          </div>
        </div>

        {/* TextArea */}
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write Your Content Here...."
          className="w-full p-3 border-0 focus:ring-0 rounded-b"
          style={{
            caretColor: "#000",
          }}
          rows={20}
        />
      </div>
    </div>
  );
};

export default Home;
