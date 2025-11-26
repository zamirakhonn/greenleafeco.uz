"use client";

import React from "react";
import { Calendar } from "lucide-react";
import HTMLFlipBook from "react-pageflip";

const NewslettersSection = () => {
  const baseNewsletters = [
    { title: "Eco Lifestyle: Living in Harmony with Nature", description: "", date: "March 15, 2025", category: "Lifestyle", image: "/images/team/oblojka.png" },
    { title: "Health & Wellness: Natural Remedies", description: "", date: "March 10, 2025", category: "Health", image: "/images/team/oblojka.png" },
    { title: "Beauty Innovations: Clean Cosmetics Revolution", description: "", date: "March 5, 2025", category: "Beauty", image: "/images/team/oblojka.png" },
    { title: "Home & Garden: Creating Green Spaces", description: "", date: "February 28, 2025", category: "Home", image: "/images/team/oblojka.png" },
    { title: "Sustainable Travel: Explore Responsibly", description: "", date: "February 20, 2025", category: "Travel", image: "/images/team/oblojka.png" },
    { title: "Green Technology: Innovations for a Cleaner Planet", description: "", date: "February 15, 2025", category: "Tech", image: "/images/team/oblojka.png" },
    { title: "Plant-Based Living: Delicious Recipes", description: "", date: "February 10, 2025", category: "Food", image: "/images/team/oblojka.png" },
    { title: "Eco Fashion: Sustainable Style", description: "", date: "February 5, 2025", category: "Fashion", image: "/images/team/oblojka.png" },
  ];

  const newsletters = [...baseNewsletters, ...baseNewsletters.slice(0, 10)];

  return (
    <section id="newsletters" className="py-20 bg-gradient-to-b from-gray-100 to-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            So‘nggi nashr etilgan jurnallar
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Ekologik hayot, sog‘lom turmush, go‘zallik va barqarorlik bo‘yicha so‘nggi maqolalarimizdan xabardor bo‘ling.
          </p>
        </div>

        {/* Flipbook */}
        <div className="flex justify-center items-center">
          <HTMLFlipBook
            width={380}
            height={820}
            minWidth={240}
            maxWidth={600}
            minHeight={320}
            maxHeight={650}
            drawShadow={true}
            flippingTime={900}
            useMouseEvents={true}
            autoSize={true}
            size="stretch"
            className="rounded-xl shadow-xl overflow-hidden border border-gray-300 bg-white"
            maxShadowOpacity={0.4}
            showCover={true}
            mobileScrollSupport={true}
          >
            {newsletters.map((newsletter, index) => (
              <div
                key={`${newsletter.title}-${index}`}
                className="page bg-white p-5 md:p-8 flex flex-col justify-between rounded-xl shadow-md"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg shadow-sm mb-4">
                  <img
                    src={newsletter.image}
                    alt={newsletter.title}
                    className="w-full h-60 md:h-80 object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                  />
                  {/* Badge */}
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded shadow-md">
                    {newsletter.category}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {newsletter.date}
                  </div>
                  <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                    {newsletter.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {newsletter.description || "No description available."}
                  </p>
                </div>

                {/* Footer Button */}
                <div className="mt-4 text-right">
                  <button className="text-blue-700 hover:bg-blue-100 px-4 py-2 rounded transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#products">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full shadow-md transition-all">
              Do you want to buy our eco journals?
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewslettersSection;
