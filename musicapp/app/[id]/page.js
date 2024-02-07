"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { searchQuery } from "../utils/apiUtils";
import { useRef } from "react";
import Image from "next/image";

const Page = () => {
  const audioRef = useRef();
  const id = usePathname().substring(1);
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState([]);
  const [songUrl, setSongUrl] = useState("a");
  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    } else {
      // Throw error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchQuery(id);
        setImageUrls(data[1]);
        setSongUrl(data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="mx-auto w-[50vw]">Loading ...</div>;
  }

  play();
  return (
    <div>
      <h1>Results for: {id}</h1>
      <div className="flex flex-col justify-center items-center">
        <audio ref={audioRef} src={songUrl} />
        {imageUrls.map((url) => (
          <Image src={url} height={300} width={300} />
        ))}
      </div>
    </div>
  );
};

export default Page;
