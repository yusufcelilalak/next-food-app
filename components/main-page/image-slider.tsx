"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import firstFoodImg from "@/app/assets/food-1.jpg";
import secondFoodImg from "@/app/assets/food-2.jpg";
import thirdFoodImg from "@/app/assets/food-3.jpg";
import fourthFoodImg from "@/app/assets/food-4.jpg";
import fifthFoodImg from "@/app/assets/food-5.jpg";

const images = [
  { image: firstFoodImg, alt: "" },
  { image: secondFoodImg, alt: "" },
  { image: thirdFoodImg, alt: "" },
  { image: fourthFoodImg, alt: "" },
  { image: fifthFoodImg, alt: "" },
];

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-9/12 aspect-[6/6] relative overflow-hidden rounded-md shadow-2xl mx-auto ring-4 ring-primary/70">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-3000 ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 animate-zoomInOut"
              : "opacity-0"
          }`}
        >
          <Image
            src={image.image}
            alt={image.alt}
            className="object-cover w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}
