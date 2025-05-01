
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: ""},
    {icon: <FaLinkedinIn />, path: ""},
    {icon: <FaYoutube />, path: ""},
    {icon: <FaTwitter />, path: ""},
]

const Social = () => {
  return (
    <div className="flex gap-2 relative right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none ">
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className="text-white ml-3 text-2xl">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
