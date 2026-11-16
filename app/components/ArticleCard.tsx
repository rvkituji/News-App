import React from "react";
import Link from "next/link";

type ArticleCardType = {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  imageAlt: string;
  author: string;
  date: string;
  content: string[];
};

const colors = [
  {
    bg: "bg-purple-50",
    text: "text-purple-700",
    border: "border-purple-200",
  },
  {
    bg: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
  },
  {
    bg: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
  },
  {
    bg: "bg-orange-50",
    text: "text-orange-700",
    border: "border-orange-200",
  },
];

const getColor = (id: number, extra: number) => {
  const index = (id * 7 + extra * 3 + Math.floor(id / 3)) % colors.length;
  return colors[index];
};

export const ArticleCard = (props: ArticleCardType) => {
  const {
    id,
    title,
    description,
    author,
    date,
    image,
    category,
    imageAlt,
    slug,
  } = props;

  const initials = author
    .trim()
    .split(/\s+/)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const categoryColor = getColor(id, 1);
  const authorColor = getColor(id, 2);

  return (
    <Link href={`/news/${slug}`} className="block h-full group">
      <article className="w-full min-w-0 min-h-[500px] border border-[#e7e5e4] rounded-[16px] bg-white flex flex-col overflow-hidden cursor-pointer group-hover:border-[#C44724] group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-200">
        <div className="w-full h-[220px] sm:h-[235px] relative overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />

          <div
            className={`absolute top-4 left-4 min-h-[27px] border ${categoryColor.bg} ${categoryColor.border} px-3 py-1.5 rounded-full flex items-center justify-center text-[10px] font-bold ${categoryColor.text}`}
          >
            {category}
          </div>

          <div className="absolute left-4 bottom-4 text-white text-xs flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            1 min read
          </div>  
        </div>

        <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-[18px] sm:text-[20px] leading-snug text-[#1c1917] font-bold line-clamp-2 group-hover:text-[#C44724] transition-colors duration-200">
              {title}
            </h2>

            <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#57534e] line-clamp-2">
              {description}
            </p>
          </div>

          <div>
            <div className="w-full h-px bg-[#e2e2da] mb-4" />

            <div className="flex items-center gap-3">
              <div
                className={`h-10 w-10 shrink-0 border ${authorColor.border} rounded-full ${authorColor.bg} text-xs ${authorColor.text} font-bold items-center justify-center flex`}
              >
                {initials}
              </div>

              <div className="min-w-0 flex-1 flex flex-col gap-1">
                <div className="truncate text-[#292524] text-xs font-bold">
                  {author}
                </div>

                <div className="text-[11px] text-[#78716c]">{date}</div>
              </div>

              <div className="h-9 w-9 shrink-0 rounded-full bg-[#fff7ed] flex items-center justify-center group-hover:bg-[#C44724] transition-all duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#C44724] group-hover:text-white transition-colors duration-200"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
