"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { searchQuery } from "../utils/apiUtils";
import Slider from "../components/Slider";

const Page = () => {
  const id = usePathname().substring(1);
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
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="bg-black">
        <div className="mx-auto w-[50vw]">Loading ...</div>
      </div>
    );
  }

  return (
    <div className="bg-black h-[100vh]">
      {/* <div className="invisible"> */}
      <audio loop autoPlay src={songUrl} />
      {/* </div> */}
      <Slider imageUrls={imageUrls} />
    </div>
  );
};

export default Page;
