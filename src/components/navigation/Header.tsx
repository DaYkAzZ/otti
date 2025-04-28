import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/16/solid";
import { CurrencyEuroIcon } from "@heroicons/react/16/solid";

export default function Header() {
  return (
    <div className="sticky top-5  p-6 w-[1200px] m-auto my-8 text-white rounded-full">
      <nav className="flex justify-between items-center">
        <div>
          <Image
            src={"/assets/images/logo.png"}
            width={70}
            height={70}
            alt=""
          />
        </div>
        <ul className="flex items-center">
          <div className="mx-8 text-slate-200 flex items-center">
            <HomeIcon className="h-6 w-6 text-white m-1" />
            <Link href={"/"}>Accueil</Link>
          </div>
          <div className="mx-8 text-slate-200 flex items-center">
            <CurrencyEuroIcon className="h-6 w-6 text-white m-1" />
            <Link href={"/"}>Pricing</Link>
          </div>
          <div className="mx-8 text-slate-200 bg-[#176CD1] p-2 rounded-md">
            <Link href={"/"}>Product</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
