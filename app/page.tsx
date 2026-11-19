"use client";

import { useState } from "react";
import data from "@/data/news.json";
import { ArticleCard } from "@/components/ArticleCard";
import Link from "next/link";

const categories = [
  "All stories",
  "World",
  "Technology",
  "Culture",
  "Travel",
  "Design",
  "Science",
  "Business",
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All stories");

  const filteredArticles =
    activeCategory === "All stories"
      ? data
      : data.filter(
          (article) =>
            article.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 py-6 sm:py-10">
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6">
        <div>
          <div className="text-[10px] text-[#c44724] font-bold tracking-wider">
            STAY CURIOUS
          </div>

          <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] text-[#222d1f] font-bold">
            The Latest Stories
          </h1>
        </div>

        <p className="text-xs text-[#65675f]">
          Big ideas. Fresh voices. Worth your time
        </p>
      </header>

      <div className="w-full h-px bg-[#e2e2da]" />

      <nav className="flex items-center gap-3 sm:gap-4 py-5 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`shrink-0 text-xs px-4 py-3 rounded transition-all duration-200 ${
              activeCategory === category
                ? "bg-[#22241f] text-white"
                : "text-[#65675f] hover:bg-[#dce8d5] hover:text-[#22241f]"
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))
        ) : (
          <p className="col-span-full text-sm text-[#65675f] py-10 text-center">
            No articles found in this category.
          </p>
        )}
      </section>

      <footer>
        <div className="w-full h-px bg-[#e2e2da] my-[20px]" />

        <div className="w-full min-h-[133px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 py-[36px]">
          <div className="w-[220px] h-[61px] flex flex-col">
            <div className="w-[158px] h-[44px] font-bold text-[30px] text-[#22241f]">
              the daily ▧
            </div>

            <div className="w-[177px] h-[17px] text-[12px] text-[#65675f]">
              A fresh perspective. Every day.
            </div>
          </div>

          <Link
            href="#top"
            className="text-xs text-[#22241f] hover:text-[#65675f] transition-colors"
          >
            Back to top ↑
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Home;
