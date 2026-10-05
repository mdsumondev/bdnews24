import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  const currentTime = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="container mx-auto flex justify-end items-center">
      <div className="flex justify-between items-center w-[60%]">
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
  );
};

export default Header;
