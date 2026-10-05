import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { categoryType } from "../Type/Category";
import NavLinks from "./Home/NavLinks";

const newsCategories = async (): Promise<categoryType[]> => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
    next: { revalidate: 120 },
  });
  const data = await res.json();

  const categories = data.data;
  return categories;
};

const Header = async () => {
  const currentTime = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  const categories = await newsCategories();

  console.log(categories);

  return (
    <>
      <div className="container mx-auto flex justify-end items-center py-5">
        <div className="flex justify-between items-center w-[calc(50%+85px)]">
          <div className="logo">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
            <span className="text-sm text-center text-gray-400">
              {currentTime}
            </span>
          </div>
          <div className="button-group flex items-center gap-1">
            <Link href="/" className="px-3 py-1 hover:text-[#EF1D20]">
              সাইন ইন
            </Link>
            <Link
              href="/"
              className="bg-[#EF1D20] px-3 py-1 rounded-sm text-white text-base"
            >
              সাইন আপ
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-center items-center gap-3 mt-2">
        <Suspense>
          {categories.map((category, index) => (
            <NavLinks key={index} category={category}></NavLinks>
          ))}
        </Suspense>
      </div>
    </>
  );
};

export default Header;
