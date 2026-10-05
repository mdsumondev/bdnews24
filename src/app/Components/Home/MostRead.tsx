import { mostReadType } from "@/app/Type/MostRead";
import Link from "next/link";
import React from "react";

const MostRead = ({
  moestRead,
  index,
}: {
  moestRead: mostReadType;
  index: number;
}) => {
  return (
    <>
      <li className="mb-4 list-none flex items-start ">
        <span className="font-bold text-xl text-[#EF1D20] mr-2">
          {index + 1}
        </span>
        <Link
          className="text-base hover:text-[#EF1D20]"
          href={`${moestRead.id}`}
        >
          {moestRead.title}
        </Link>
      </li>
    </>
  );
};

export default MostRead;
