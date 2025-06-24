import React from "react";

export default function Notice() {
  return (
    <div>
      <div class="w-full bg-red-600 text-white overflow-hidden whitespace-nowrap">
        <marquee class="inline-block animate-marquee px-4">
          🚨 জরুরি ঘোষণা: আগামীকাল সকল শিক্ষা প্রতিষ্ঠান বন্ধ থাকবে। দয়া করে
          সকলকে জানিয়ে দিন।
        </marquee>
      </div>
    </div>
  );
}
