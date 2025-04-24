import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-zinc-900 p-8 w-[1200px] m-auto my-8 text-white rounded-full">
      <nav className="flex justify-between items-center">
        <div>{/* <Image src={"#"} width={0} height={0} /> */}</div>
        <ul className="flex items-center">
          <div className="mx-8 text-slate-200">
            <Link href={"/"}>Accueil</Link>
          </div>
          <div className="mx-8 text-slate-200">
            <Link href={"/"}>Calculer</Link>
          </div>
          <div className="mx-8 text-slate-200">
            <Link href={"/"}>Pricing</Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}
