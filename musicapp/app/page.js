"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import search from "./assets/search.png";
import header from "./assets/header.svg";
import logo from "./assets/logo.svg";

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`\\${query}`);
  };

  return (
    <div className="bg-gradient-to-b from-[#2e1956] to-black bg-cover w-screen h-screen">
      <div className="absolute top-3 left-3">
        <a href="./">
          <Image width={200} height={200} src={header} />
        </a>
      </div>
      <div className="z-[10] h-screen flex">
        <form className="sm:w-[70vw] lg:w-[50vw] h-[20vh] mx-auto my-auto flex flex-col justify-center items-center">
          <div className="w-[50vw] my-3 p-3">
            <Image style={{ objectFit: "contain" }} src={logo} />
          </div>
          <div className="relative">
            <input
              className="w-[60vw] outline-white outline-1 focused:outline-none focused:border-[1px] focused:border-white text-white rounded-full font-roboto placeholder:text-[#646464] bg-[#292929] px-4 py-4 pl-[5rem]"
              placeholder="Search for your favourite songs..."
              type="text"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            ></input>
            <button type="submit" onClick={handleClick} className="">
              <Image
                height={44}
                width={44}
                className="absolute left-0 top-0 mt-2 ml-3 hover:scale-105"
                src={search}
              />
            </button>
          </div>
        </form>
        <div className="absolute bottom-[20vh] left-[35vw]">
          <div className="w-[30rem] flex flex-col justify-center items-center">
            <p className="text-center font-roboto text-gray-600 sm:flex hidden">
              This was made for a technical assessment. Made by Kevin Xiao.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
