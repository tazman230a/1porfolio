
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-3 xl:py-6 text-white border-b-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="flex">
          <Image 
            src="/assets/logo1.svg" 
            alt="logo" 
            width={60} 
            height={50} 
            
          />
          <p className="px-3">
            <span className="text-red-500">T</span>ax{" "}
             <span className="text-red-500">M</span>ethods<br />
            <span className="text-red-500">C</span>ompany A.T.C.
          </p>
        </Link>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8 ">
          <Nav />
          <Link href="/contact">
            <Button>Let&apos;s talk</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
