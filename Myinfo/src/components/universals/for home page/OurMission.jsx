import React, { useState } from "react";

const missions = [
  {
    title: "Real-time population counting",
    details:
      "আমরা এমন একটি সিস্টেম গড়ে তুলছি যা বাস্তব সময়ে দেশের মোট জনসংখ্যা গণনা করতে পারবে। এতে জন্ম, মৃত্যু ও স্থানান্তরের তথ্য স্বয়ংক্রিয়ভাবে আপডেট হবে। এটি প্রশাসনিক সিদ্ধান্ত গ্রহণ, সম্পদ বরাদ্দ ও জরুরি পরিস্থিতি মোকাবেলায় সহায়ক হবে।"
  },
  {
    title: "Identify unemployment",
    details:
      "এই ফিচারটির মাধ্যমে বেকার জনগণের তথ্য সংগ্রহ করে তাদের স্কিল, শিক্ষাগত যোগ্যতা ও আগ্রহ অনুযায়ী ডেটাবেইস তৈরি করা হবে। ফলে সরকার কিংবা বেসরকারি প্রতিষ্ঠান তাদের জন্য চাকরি বা প্রশিক্ষণ কর্মসূচির ব্যবস্থা নিতে পারবে।"
  },
  {
    title: "Female & male detection",
    details:
      "এই সিস্টেম স্বয়ংক্রিয়ভাবে পুরুষ ও নারীর অনুপাত গণনা করতে পারবে। এতে এলাকাভিত্তিক লিঙ্গভিত্তিক পরিসংখ্যান তৈরি হবে, যা সামাজিক উন্নয়ন এবং নারীর ক্ষমতায়নের কাজে সহায়ক হবে।"
  },
  {
    title: "Government allowance control",
    details:
      "সরকারি ভাতা প্রদান ব্যবস্থাকে স্বচ্ছ ও আধুনিক করতে আমরা একটি মনিটরিং এবং কন্ট্রোল সিস্টেম তৈরি করছি। এতে উপকারভোগীর তথ্য যাচাই, ভাতা বিতরণের স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত হবে।"
  },
  {
    title: "Educational development",
    details:
      "শিক্ষার মান উন্নয়নে শিক্ষার্থীর উপস্থিতি, ফলাফল, শ্রেণিকক্ষ পরিসংখ্যান ইত্যাদি অ্যানালাইসিস করে সরকার ও শিক্ষা প্রতিষ্ঠানের জন্য কার্যকর ডেটা প্রদান করা হবে। এতে শিক্ষা খাতের পরিকল্পনা আরও কার্যকর হবে।"
  },
  {
    title: "Geo-location integration",
    details:
      "এই প্রযুক্তির মাধ্যমে প্রতিটি নাগরিক বা ব্যবহারকারীর অবস্থান (location) GPS বা মানচিত্রের মাধ্যমে শনাক্ত করা যাবে। এটি নাগরিক সেবা, জরুরি সহায়তা, স্থানভিত্তিক পরিসংখ্যান ইত্যাদিতে গুরুত্বপূর্ণ ভূমিকা রাখবে।"
  },
  {
    title: "Certification issue solve",
    details:
      "জন্ম, মৃত্যু, জাতীয়তা ও বিবাহ নিবন্ধন সনদ পেতে অনেক জটিলতা থাকে। আমাদের ডিজিটাল সিস্টেম এসব সনদ পেতে সহায়তা করবে, ভুল সংশোধন, আবেদন ট্র্যাকিং ও সময়মতো ডেলিভারির ব্যবস্থা করবে।"
  },
];


export default function OurMission() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Mission</h2>
        <div className="space-y-4">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-50 flex justify-between items-center"
              >
                {mission.title}
                <span className="text-blue-500 text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {mission.details}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
