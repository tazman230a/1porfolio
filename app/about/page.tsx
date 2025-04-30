"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Incorporations",
    description:
      "Incorporation is the process of forming a corporation, a legal entity separate from its owners. Corporations have their own assets and liabilities separate from their owners, who are not personally liable for the corporation’s debts. Incorporating can be complicated and lengthy, but following this guide helps you learn the steps and makes it effortless.",
    href: "",
  },
  {
    num: "02",
    title: "Audits",
    description:
      "The auditor should be careful in issuing the audit report as there is are a large number of people placing reliance on such report and taking decisions accordingly. The report should be issued by being unbiased and objective in discharging the functions.",
    href: "",
  },
  {
    num: "03",
    title: "llc's",
    description:
      "Find out what an LLC is and learn why so many businesses choose to structure themselves that way.",
    href: "",
  },
  {
    num: "04",
    title: "Financial Reporting",
    description:
      "in any type of reporting, you always need to QA. I don't take it for granted that we have greater output, and more accurate end results. We always have checks and balances in place.",
    href: "",
  },
];


const About = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <h1 className="text-center text-6xl text-[#93d8bc] pb-6">About Us</h1>
        <div className="border-b-2 pb-5" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 pt-7 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
