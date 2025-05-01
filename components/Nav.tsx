"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";



const Nav = () => {
    const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {navLinks.map((navLink, index) => {
        return (
            <Link 
                href={navLink.path} 
                key={index} 
                className={`${navLink.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-semibold text-xl ml-11 hover:text-accent transition-all` }>
                  {navLink.name}
            </Link>
        )
      })}
      
    </nav>
  )
};

export default Nav;
