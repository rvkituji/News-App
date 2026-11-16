import data from "@/app/data/news.json";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/app/components/ArticleCard";

const ArticleDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const article = data.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const initials = article.author
    .trim()
    .split(/\s+/)
    .map((name) => name[0])
    .join("")
    .toUpperCase();

  const moreArticles = data.filter(
    (item) => item.category === article.category && item.slug !== slug,
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
      <div>
        <Link href="/" className="h-[61px] gap-3 flex items-center">
          <span className="text-xs font-bold text-[#22241f]">
            ← All stories
          </span>
          <span className="text-xs text-[#65675f]">/</span>
          <span className="text-xs text-[#65675f]">{article.category}</span>
        </Link>
      </div>

      <div className="border-t border-[#e2e2da]" />

      <div className="mx-auto max-w-5xl pt-10 pb-8 sm:pt-14 sm:pb-10">
        <div className="gap-3 mb-5 flex items-center">
          <div className="bg-[#ECFDF5] rounded-md px-3 py-1.5 text-[10px] font-bold text-[#065f46]">
            {article.category}
          </div>

          <div className="text-[11px] text-[#56575f]">— THE DAILY</div>
        </div>

        <h1 className="max-w-4xl text-4xl sm:text-[60px] font-bold text-[#0c0a09] tracking-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-xl text-[#57534e] mt-6">
          {article.description}
        </p>

        <div className="border-t border-[#e2e2da] w-full mt-5" />

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mt-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#ecfdf5] rounded-full text-sm font-bold text-[#065f46] flex items-center justify-center">
              {initials}
            </div>

            <div className="flex flex-col gap-1">
              <div className="text-[10px] font-bold text-[#65675f]">
                WRITTEN BY
              </div>

              <div className="text-sm font-bold text-[#22241f]">
                {article.author}
              </div>
            </div>
          </div>

          <div className="flex gap-6">
            <div>
              <div className="text-[10px] font-bold text-[#65675f]">
                PUBLISHED
              </div>
              <div className="text-sm text-[#22241f]">{article.date}</div>
            </div>

            <div>
              <div className="text-[10px] font-bold text-[#65675f]">
                READING TIME
              </div>
              <div className="text-sm text-[#22241f]">1 min read</div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={article.image}
        alt={article.imageAlt}
        className="w-full h-[250px] sm:h-[515px] object-cover rounded-2xl"
      />

      <div className="w-full py-[56px] flex flex-col justify-center items-center">
        <div className="w-full max-w-[768px] border border-[#e2e2da] rounded-[16px] p-6 sm:p-[40px] gap-[24px] flex flex-col">
          <div className="font-bold text-[10px] text-[#c44724]">
            ━━ THE STORY
          </div>

          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-[18px] sm:text-[20px] text-[#44403c] font-normal font-serif leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <div className="text-[#c44724] font-bold text-[16px] flex items-center justify-center">
            • • •
          </div>
        </div>

        <div className="w-full max-w-[694px] min-h-[98px] border border-[#fff7ed] bg-[#fff7ed] mt-[48px] rounded-[16px] flex flex-col sm:flex-row items-center justify-between gap-4 p-6">
          <div className="flex flex-col gap-1">
            <div className="font-semibold text-[18px] text-[#22241f]">
              A little more curiosity?
            </div>

            <div className="font-normal text-[14px] text-[#65675f]">
              Your next good read is just around the corner.
            </div>
          </div>

          <Link
            href="/"
            className="shrink-0 border border-[#22241f] bg-[#22241f] rounded-full py-[10px] px-4 flex items-center justify-center text-white text-[12px]"
          >
            All stories ↗
          </Link>
        </div>
      </div>

      <div className="w-full pt-[40px] pb-[64px] gap-[28px] flex flex-col">
        <div className="w-full">
          <div className="text-[10px] text-[#c44724] font-bold">
            KEEP YOUR CURIOSITY GOING
          </div>

          <div className="font-bold text-[30px] text-[#22241f]">
            More to discover.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[28px]">
          {moreArticles.slice(0, 3).map((item) => (
            <ArticleCard key={item.id} {...item} />
          ))}
        </div>
      </div>

      <footer className="w-full border-t border-[#e2e2da] flex flex-col sm:flex-row justify-between gap-4 py-[36px]">
        <div className="flex flex-col">
          <div className="text-[30px] font-bold text-[#22241f]">
            the daily ▧
          </div>

          <div className="text-[12px] text-[#65675f]">
            A fresh perspective. Every day.
          </div>
        </div>

        <Link href="#top" className="text-[12px] text-[#22241f]">
          Back to top ↑
        </Link>
      </footer>
    </main>
  );
};

export default ArticleDetailPage;
