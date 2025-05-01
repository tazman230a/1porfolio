"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { navLinks } from "@/constants";


const MobileNav = () => {
    const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="flex mt-6 mb-10 text-2xl"> 
            <Image src="/assets/logo1.svg" alt="logo" height={45} width={50} className="pr-3" />
            <p className="text-white text-sm">
              <span className="text-red-600">T</span>ax
              <span className="text-red-600">M</span>ethods <br />
              <span className="text-red-600">C</span>ompany A.T.C.
            </p>
        </div>
        <nav className="flex flex-col justify-center items-center gap-7">
          {navLinks.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`
                            ${
                              link.path === pathname &&
                              "text-accent border-b-2 border-accent"
                            } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
