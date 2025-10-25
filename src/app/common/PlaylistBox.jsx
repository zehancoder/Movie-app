import React, { useEffect } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { removeSavedMovies, savedMovies } from "../../redux/dataFetch";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";


import ParagraphText from "./ParagraphText";
function PlaylistBox() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const newSavedData = useSelector((state) => state.newPlayListItem);

  const [savedPlaylist, setSavePlaylist] = useState("Saved Playlist");
  const [onplayListBox, setOnplayListBox] = useState(false);
  useEffect(() => {
    if (newSavedData === "") {
      setSavePlaylist("New Playlist");
    }
    if (newSavedData !== "") {
      setOnplayListBox(true);
    }
  }, [newSavedData]);

  const addNewSaved = () => {
    if (newSavedData !== "") {
      if (input !== "") {
        dispatch(savedMovies({ name: input, data: newSavedData }));
        setInput('')
      }
    }
  };

  const savedDataFromstore = useSelector((state) => state.savedMovies);

  

  return (
    <>
      {/* add saved videos divs */}
      <div
        className={`fixed font-manrope shadow-lg top-[50%] md:w-auto w-[76%] sm2:w-[60%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] z-40 md:px-8 px-6 lg:px-12 py-4 md:py-6 lg:py-8 bg-[#bb0000] rounded-lg ${
          onplayListBox ? "block" : "hidden"
        }`}
      >
        <div className="relative">
          <IoClose
            onClick={() => setOnplayListBox(false)}
            className="text-white font-medium md:text-xl cursor-pointer text-lg lg:text-2xl absolute -top-2 -right-3 md:-top-4 md:-right-6 lg:-top-6 lg:-right-9"
          />

          <div className="flex items-center gap-3 mb-5 px-2 py-2 bg-[#0F0F0F] rounded-lg border-[#1F1F1F] w-fit mx-auto">
            <div onClick={() => setSavePlaylist("Saved Playlist")}>
              <Button
                className={`${
                  savedPlaylist === "Saved Playlist"
                    ? "bg-[#e50000]"
                    : "bg-[#1a1a1a]"
                } lg:tracking-wider lg:text-[14px] text-[11px] md:text-[12px] lg:px-3 lg:py-3`}
              >
                Saved Playlist
              </Button>
            </div>

            <div onClick={() => setSavePlaylist("New Playlist")}>
              <Button
                className={`${
                  savedPlaylist === "New Playlist"
                    ? "bg-[#e50000]"
                    : "bg-[#1a1a1a]"
                } lg:tracking-wider lg:text-[14px] text-[11px] md:text-[12px] lg:px-3 lg:py-3`}
              >
                New Playlist
              </Button>
            </div>
          </div>
          <div
            className={`${
              savedPlaylist === "New Playlist" ? "block" : "hidden"
            }`}
          >
            <p className="mb-2 text-[15px] font-medium text-white">
              Add New Playlist
            </p>
            <input
              type="text"
              value={input}
              className="px-3 py-2.5 border border-white rounded-lg text-[15px] font-bold text-white w-full outline-none"
              placeholder="Write new playlist"
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="text-center mt-6" onClick={addNewSaved}>
              <Button className={"bg-[#1a1a1a] mx-auto "}>Add</Button>
            </div>
          </div>

          <div
            className={`${
              savedPlaylist === "Saved Playlist" ? "block" : "hidden"
            }`}
          >
            <p className="mb-2 text-[15px] font-medium text-white">
              Your Playlist
            </p>

            <div>
              {savedDataFromstore.length > 0 &&
                savedDataFromstore.map(({ name, data }, idx) => {
                  return (
                    <div className="px-3 text-[#999] mt-1 flex items-center justify-between py-2 bg-[#0F0F0F] rounded-md border border-[#1F1F1F]">
                      <div>
                        <p className="text-[14px]  font-medium">{name}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <MdDelete className=" cursor-pointer" onClick={() => dispatch(removeSavedMovies(savedDataFromstore[idx]))}/>
                        <FiPlus className=" cursor-pointer" />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaylistBox;
