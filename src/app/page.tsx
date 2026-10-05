import Image from "next/image";
import { mostReadType } from "./Type/MostRead";
import { Suspense } from "react";
import MostRead from "./Components/Home/MostRead";

const mostReadNews = async (): Promise<mostReadType[]> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  return data.data;
};

export default async function Home() {
  const mostReads = await mostReadNews();

  return (
    <>
      <section className="main container mx-auto flex items-center gap-10 lg:flex-row flex-col">
        <div className="w-2/3"></div>

        <div className="most-read w-1/3 border border-gray-400 rounded-md p-5">
          <h3 className="text-xl font-medium mb-5">সর্বাধিক পঠিত</h3>
          <Suspense>
            {mostReads.map((mostRead, index) => (
              <MostRead key={index} moestRead={mostRead} index={index} />
            ))}
          </Suspense>
        </div>
      </section>
    </>
  );
}
