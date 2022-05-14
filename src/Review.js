import React, { useState } from "react";
import reviews from "./Data";
import { FaQuoteLeft } from "react-icons/fa";
import { FaForward, FaBackward } from "react-icons/fa";

function Review() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const { name, job, image, text, id } = reviews[reviewIndex];
  const loop = (index) => {
    if (index > reviews.length - 1) {
      return 0;
    }
    if (index < 0) {
      return reviews.length - 1;
    }
    return index;
  };
  const handleForward = () => {
    setReviewIndex((reviewIndex) => {
      let newIndex = reviewIndex + 1;
      return loop(newIndex);
    });
  };
  const handlebackward = () => {
    setReviewIndex((reviewIndex) => {
      let newIndex = reviewIndex - 1;
      return loop(newIndex);
    });
  };
  const random = () => {
    setReviewIndex((reviewIndex) => {
      let randomRev = Math.floor(Math.random() * reviews.length);
      return loop(randomRev);
    });
  };
  return (
    <div className=" w-screen h-screen border-2 flex justify-center items-center">
      <div className="container max-w-sm md:max-w-md h-auto border-2 shadow-lg bg-slate-200 rounded-md border-blue-500 relative p-5">
        <div className=" flex justify-center">
          <img
            className="img rounded-full object-cover w-40 h-40 md:w-44 md:h-44 border-t-8 border-blue-400 flex align-middle"
            src={image}
            alt="Image"
          />
        </div>
        <FaQuoteLeft className="absolute top-9 left-32  text-blue-400 font-bold text-2xl " />
        <div className="text-center">
          <h1 className="font-bold text-2xl">
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </h1>
          <h4 className="text-lg text-blue-400">{job.toUpperCase()}</h4>
          <p className="p-3">{text}</p>
        </div>
        <div className="flex justify-center space-x-5">
          <FaBackward
            className=" text-2xl cursor-pointer hover:text-blue-300 text-blue-500"
            onClick={handlebackward}
          />
          <FaForward
            className="text-2xl cursor-pointer hover:text-blue-300 text-blue-500"
            onClick={handleForward}
          />
        </div>
        <div className="text-center py-4">
          <button
            className="bg-blue-500 hover:bg-blue-300 text-white p-2 rounded-md shadow-md"
            onClick={random}>
            {" "}
            Random Reviews
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
