import React from "react";
import data from "@/data/Post.json";
import Card from "@/components/Card";

export default function mainPage() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid md:grid-cols-3 gap-10 sm:grid-cols-1">
        {data.map((post) => (
          <Card data={post} />
        ))}
      </div>
    </div>
  );
}
