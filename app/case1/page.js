'use client';

import Image from "next/image";
import Navbar from "../components/navbar";
import { Display, H2, BodyMedium, BodyLargeMid, TitleLight } from "../components/typography"; 
import PageHeader from "../components/pageheader";
import './page.css';

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <PageHeader imageSrc="/logoCobre.png" title="Unity Design System" />

      {/* Main Content */}
      <div className="flex flex-col w-full mx-auto px-4 mt-40">
        
        {/* 🏆 Hero Section */}
        <div className="w-full flex justify-center">
          <div className="max-w-[1120px] w-full text-left">
            <div className="space-y-2 mb-30">
              <TitleLight>From chaos to cohesion:</TitleLight>
              <Display className="mb-3">Building a scalable design system for a fast-paced startup</Display>
            </div>
            <Image
              src="/unitymain.png"
              alt="Hero"
              width={1120}
              height={630}
              className="w-full max-w-[1120px] pt-[120px] rounded-lg"
            />
          </div>
        </div>

        {/* ⚠️ The Problem Section */}
        <div className="w-full flex justify-center py-[80px]">
          <div className="max-w-[684px] w-full text-left space-y-8">
            <H2>The Problem</H2>
            <BodyMedium>
              Cobre lacked a design system, leading to inefficiencies and roadblocks. Teams were aware of the need for a solution, but competing priorities made it challenging to address the issue.
            </BodyMedium>
            <Image
              src="/error.png"
              alt="Problem"
              width={684}
              height={384}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* 💡 Insights Section */}
        <div className="w-full bg-[#f1f0ec] py-12">
          <div className="max-w-[684px] w-full mx-auto text-left space-y-10">
            <H2>Insights</H2>
            {[
              { title: "Inconsistent UI elements", description: "Buttons, spacing, and typography varied across screens, disrupting the user experience and creating confusion for users." },
              { title: "Inefficient workflows", description: "Designers and developers spent time rebuilding components from scratch instead of focusing on innovation and delivering value." },
              { title: "Misaligned expectations", description: "Teams struggled to maintain consistency across projects, leading to fragmented user interfaces and slower iteration cycles." },
              { title: "Scalability challenges", description: "As the product grew, the lack of standardization made it harder to align design and development, impacting productivity and collaboration." },
            ].map((insight, index) => (
              <div key={index} className="space-y-3">
                <BodyLargeMid>{insight.title}</BodyLargeMid>
                <BodyMedium>{insight.description}</BodyMedium>
                <div className="w-full h-[0.5px] bg-[#C1C0BD]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 🚀 Project Outcomes Section */}
        <div className="w-full py-12"></div>
          <div className="max-w-[684px] w-full mx-auto text-left space-y-10">
            <H2>Project Outcomes: The Impact of Unity Design System</H2>
            
            {/* List above emojis */}
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <BodyMedium>Inconsistency across design iterations led to inefficiencies, slow development cycles, and fragmented user experiences.</BodyMedium>
              </li>
              <li>
                <BodyMedium>Starting designs from scratch diverted focus from innovation.</BodyMedium>
              </li>
            </ul>

            {[
              { emoji: "🚀", title: "50% faster", description: "design-to-development cycle" },
              { emoji: "🏃‍♀️", title: "Increased speed", description: "to market" },
              { emoji: "⏰", title: "30% reduction", description: "in QA time" },
              { emoji: "👩‍💻", title: "Less code", description: "changes" },
            ].map((outcome, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-[68px]">{outcome.emoji}</div>
                <div className="flex flex-col">
                  <TitleLight>{outcome.title} {outcome.description}</TitleLight>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
}
