'use client';

import Link from "next/link"; // Import Link for navigation
import Navbar from "../components/navbar"; // Import your Navbar component
import { H1, H2, H3 } from "../components/typography"; // Import typography components
import { PrimaryButton, AccentLink, SecondaryButton } from "../components/buttons";

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col w-full mx-auto px-4" style={{ marginTop: "170px" }}>
        {/* Hero Section */}
        <div className="flex flex-row w-full max-w-[1120px] mx-auto" style={{ marginBottom: "170px" }}>
          {/* Left Column */}
          <div className="w-1/2 space-y-8">
            <H1>Hi, I’m Sarita.</H1>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              Currently helping shape the future of payments in LATAM at{" "}
              <AccentLink href="https://www.cobre.co/">Cobre</AccentLink>. Aspiring to join Georgia Tech’s HCI MS.
            </p>
            <PrimaryButton>See selected work</PrimaryButton>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex justify-start items-center">
            <img
              src="/video_thumbnail.png"
              alt="Sarita Evans"
              className="max-w-[445px] w-full h-auto object-left"
            />
          </div>
        </div>

        {/* Selected Work Section */}
        <div className="flex flex-col w-full max-w-[1120px] mx-auto space-y-10">
          {/* Title */}
          <div className="mb-[40px]">
            <H2>Selected Work</H2>
          </div>

          {/* Rows */}
          {[
            {
              title: "Unity Design System",
              description: [
                "50% faster design-to-development cycle.",
                "30% reduction in QA time.",
              ],
              image: "/Unity.png",
              link: "/case1",
            },
            {
              title: "Cobre portal version 3.0",
              description: ["30k+ payments being processed biweekly."],
              image: "/Cobre v3.png",
              link: "/case2",
            },
            {
              title: "Payment tracker",
              description: ["30k+ payments being processed biweekly."],
              image: "/Tracker.png",
              link: "/case3",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full mb-[40px]"
              style={{ height: "392px" }}
            >
              <div className="flex justify-between max-w-[1120px] mx-auto">
                {/* Text Column */}
                <div className="w-1/2 pr-8" style={{ maxWidth: "446px" }}>
                  <H3>{item.title}</H3>
                  <div className="mt-8 space-y-2">
                    {item.description.map((desc, idx) => (
                      <p key={idx} className="text-lg">
                        {desc}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link href={item.link}>
                      <SecondaryButton>View case study</SecondaryButton>
                    </Link>
                  </div>
                </div>

                {/* Image Column */}
                <div className="w-1/2 flex justify-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-lg shadow-lg object-left"
                  />
                </div>
              </div>

              {/* Divider */}
              {index < 2 && (
                <div className="flex justify-between max-w-[1120px] mx-auto"></div>
              )}
            </div>
          ))}
        </div>

        {/* About Me Section */}
        <div
          className="flex justify-between max-w-[1120px] mx-auto"
          style={{ marginTop: "170px", marginBottom: "170px" }}
        >
          {/* Left Column */}
          <div className="w-[640px] space-y-8">
            <H2>About Me</H2>
            <H3>My journey in Product Design</H3>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              I have over 3 years of experience as a product designer, specializing in
              design systems, user research, and experience design. At Cobre, a leading
              Colombian fintech startup, I most notably built a scalable design system
              from scratch and helped launch Colombia’s first instant payment railway.
            </p>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              My work combines creativity and technology to solve complex problems and
              empower users. I’m passionate about creating meaningful products that
              balance functionality with business goals.
            </p>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              When I’m not designing, you’ll find me practicing contemporary dancing,
              expressing myself through movement.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-[360px]">
            <img
              src="/Sarita about me.png"
              alt="About Me"
              className="max-w-[360px] w-[360px] h-auto rounded-lg shadow-lg object-left"
              style={{ marginLeft: "0" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}