
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="flex">
          <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
          <p className="px-3">
            <span className="text-red-600">T</span>ax{" "}
             <span className="text-red-600">M</span>ethods<br />
            <span className="text-red-600">C</span>ompany A.T.C.
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
