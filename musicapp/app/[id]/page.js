"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { searchQuery } from "../utils/apiUtils";
import Image from "next/image";

const Page = () => {
  const id = usePathname().substring(1);
  const [loading, setLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState([]);
  const [songUrl, setSongUrl] = useState("");

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
    return <div>Loading ...</div>;
  }

  console.log(imageUrls);
  return (
    <div>
      <h1>Results for: {id}</h1>
      <div className="flex flex-col justify-center items-center">
        {songUrl}
        {imageUrls.map((url) => (
          <Image src={url} height={300} width={300} />
        ))}
      </div>
    </div>
  );
};

export default Page;
