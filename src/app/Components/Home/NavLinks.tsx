import { categoryType } from "@/app/Type/Category";
import Link from "next/link";
import React from "react";

const NavLinks = ({ category }: { category: categoryType }) => {
  return (
    <>
      <li className="list-none">
        <Link className="text-base" href={`${category.slug}`}>
          {category.title}
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
