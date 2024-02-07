"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`\\${query}`);
  };

  return (
    <div className="bg-[url(./assets/background-image.jpg)] bg-no-repeat bg-cover">
      <div className="z-[10] h-screen flex">
        <form className="w-[50vw] h-[20vh] mx-auto my-auto flex flex-col justify-center items-center">
          <input
            className="peer w-[15rem] bg-gray-900 text-white placeholder-gray-100 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-2 transition-all placeholder-shown:border placeholder-shown:border-white-200 placeholder-shown:border-white-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-white-200 focus:border-gray-200"
            placeholder="Search for your favourite songs..."
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          ></input>
          <button
            className="mt-3 bg-white w-[5rem] border-radius-0"
            onClick={handleClick}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
