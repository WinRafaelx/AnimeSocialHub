"use client";

import React, { useState } from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

export default function Card({ data }) {
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full">
          <img
            className="rounded-t-lg object-cover h-80 w-96"
            src={data.url}
            loading="lazy"
            alt=""
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.topic}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-24">
            {data.description}
          </p>
          <div className="grid grid-cols-3">
            <buttun
              href="#"
              className="inline-flex align-middle items-center py-2 text-sm font-medium text-center text-white mx-auto hover:bg-gray-600 hover:rounded-lg hover:p-2"
            >
              <ThumbUpIcon sx={{ fontSize: 20, mr: 1 }} />
              {data.likes} Like
            </buttun>
            <button
              href="#"
              className="inline-flex align-middle items-center py-2 text-sm font-medium text-center text-white mx-auto hover:bg-gray-600 hover:rounded-lg hover:p-2"
              onClick={() => setShowComments(!showComments)}
            >
              <MapsUgcIcon sx={{ fontSize: 20, mr: 1 }} />
              {data.comments.length} Comments
            </button>
            <button
              href="#"
              className="inline-flex align-middle items-center py-2 text-sm font-medium text-center text-white mx-auto hover:bg-gray-600 hover:rounded-lg hover:p-2"
            >
              <IosShareIcon sx={{ fontSize: 20, mr: 1 }} />
              Share
            </button>
          </div>
        </div>
        {showComments &&
          data.comments.map((comment) => (
            <div className="p-5">
              <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                "{comment}"
              </h5>
            </div>
          ))}
      </div>
    </div>
  );
}
