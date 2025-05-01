
import Photo from "@/components/Photo";
import Social from "@/components/Social";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl font-primary">Tax Accountant</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent font-primary">Mr. Fred Minter</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Specialize in helping small businesses with tax and financial
              needs. I am an enrolled agent authorized to practice before the
              IRS. Extensive background in credit, financing and business
              turnaround situations. Overall been doing this type of work over
              40 years.
            </p>
            {/* button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="mb-8 xl:mb-8">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
     
    </section>
  );
}
