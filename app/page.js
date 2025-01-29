'use client';

import Link from "next/link"; // Import Link for navigation
import Image from "next/image";
import Navbar from "./components/navbar"; // Import your Navbar component
import { H1, H2, TitleSemi } from "./components/typography"; // Import typography components
import { PrimaryButton, AccentLink, SecondaryButton } from "./components/buttons";
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const textElements = document.querySelectorAll('.highlight-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    textElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="layout-container flex flex-col w-full mx-auto px-4" style={{ marginTop: "170px" }}>
        {/* Hero Section */}
        <div id="hero-section" className="flex flex-row justify-between w-full" style={{ marginBottom: "170px" }}>
          {/* Left Column */}
          <div className="w-1/2 space-y-8">
            <H1>
              Hi, <span className="highlight-text">I&apos;m Sarita.</span>
            </H1>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              Currently helping shape the future of payments in LATAM at{" "}
              <AccentLink href="https://www.cobre.co/">Cobre</AccentLink>.<br/>
              Aspiring to join Georgia Tech&apos;s HCI MS.
            </p>
            <PrimaryButton>See selected work</PrimaryButton>
          </div>

          {/* Right Column */}
          <div className="w-1/2 flex justify-end items-start">
            <Image
              src="/video_thumbnail.png"
              alt="Sarita Evans"
              width={445}
              height={250}
              className="max-w-[445px] w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Selected Work Section */}
        <div id="selected-work" className="flex flex-col w-full space-y-10">
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
              <div className="flex justify-between">
                {/* Text Column */}
                <div className="w-1/2 pr-8" style={{ maxWidth: "446px" }}>
                  <TitleSemi><span className="highlight-text">{item.title}</span></TitleSemi>
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
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={446}
                    height={250}
                    className="w-full rounded-lg shadow-lg object-left"
                  />
                </div>
              </div>

              {/* Divider */}
              {index < 2 && (
                <div className="flex justify-between"></div>
              )}
            </div>
          ))}
        </div>

        {/* About Me Section */}
        <div
          id="about-me"
          className="flex justify-between"
          style={{ marginTop: "170px", marginBottom: "170px" }}
        >
          {/* Left Column */}
          <div className="w-[640px] space-y-8">
            <H2>About Me</H2>
            <TitleSemi>My journey in Product Design</TitleSemi>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              I have over <span className="font-semibold">3 years of experience as a product designer</span>, specializing in
              design systems, user research, and experience design. <span className="font-semibold">At Cobre</span>, a leading
              Colombian fintech startup, I most notably built a scalable design system
              from scratch and helped launch Colombia&apos;s first instant payment railway.
            </p>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              <span className="font-semibold">My work combines creativity and technology</span> to solve complex problems and
              empower users. I&apos;m passionate about creating meaningful products that
              balance functionality with business goals.
            </p>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              When I&apos;m not designing, <span className="font-semibold">you&apos;ll find me practicing contemporary dancing</span>,
              expressing myself through movement.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-[360px]">
            <Image
              src="/Sarita about me.png"
              alt="About Me"
              width={360}
              height={200}
              className="max-w-[360px] w-[360px] h-auto rounded-lg shadow-lg object-left"
              style={{ marginLeft: "0" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

