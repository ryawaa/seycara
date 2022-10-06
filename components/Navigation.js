import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import NavLinks from "./NavLinks";
import Image from "next/image";

export default function Navigation({ children }) {
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    // todo: code
  });

  return (
    <div>
      <div className="flex flex-row justify-center items-center z-50 fixed  py-2  w-full space-x-96 m-auto bg-[#161817]">
        <div className="flex flex-row items-center m-2">
          <Image
            src="/../public/logo.webp"
            width="100"
            height="50"
            alt="logo"
          />
          <div className="flex flex-col justify-items start">
            <h3 className="text-xl">Seycara</h3>
            <h4 className="text-xs">MUSIC AND ART PRODUCTIONS</h4>
          </div>
        </div>
        <div className="flex flex-row justify-items-end items-center gap-2">
          {NavLinks.map(([title, url], x) => (
            <Link href={url} key={x}>
              {x == 5 ? (
                <div className="rounded-xl bg-white p-2 text-black items-center">
                  <a className="text-md font-bold text-right cursor-pointer m-2">
                    {title}
                  </a>
                </div>
              ) : (
                <a className="text-md font-bold text-right cursor-pointer m-2">
                  {title}
                </a>
              )}
            </Link>
          ))}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
