"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { searchQuery } from "../utils/apiUtils";
import Slider from "../components/Slider";
import header from "../assets/header.svg";
import Image from "next/image";

const Page = () => {
  const id = decodeURI(usePathname().substring(1));
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState([]);
  const [songUrl, setSongUrl] = useState("a");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchQuery(id);
        setImageUrls(data[1]);
        setSongUrl(data[0]);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-b from-[#2e1956] to-black bg-cover">
        <div className="absolute top-3 left-3">
          <a href="./">
            <Image width={200} height={200} src={header} alt="header" />
          </a>
        </div>
        <div className="absolute top-[50vh] left-[25vw] animate-pulse text-center w-[50vw] font-roboto text-[#dddddd]">
          Loading ...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#2e1956] to-black bg-cover h-[100vh]">
      <div className="absolute top-3 left-3">
        <a href="./">
          <Image width={200} height={200} src={header} />
        </a>
      </div>
      <div className="absolute top-[10vh] lg:left-[35vw] left-[20vw]">
        <Slider data={{ imageUrls, id, songUrl }} />
      </div>
    </div>
  );
};

export default Page;
