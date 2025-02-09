'use client';

import '../styles/globals.css'; // Ensure your global styles are included
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

      {/* Hero Section */}
        <div className="max-w-[1200px] mx-auto text-left px-4">
          <div className="mt-10">
            <PageHeader imageSrc="/logoCobre.png" title="Unity Design System" width={97} height={50} />
          </div>
          <div className="space-y-2 mb-30">
            <TitleLight>From chaos to cohesion:</TitleLight>
            <Display className="mb-3">Building a scalable design system for a fast-paced startup</Display>
          </div>
          <Image src="/unitymain.png" alt="Hero" width={1120} height={630} className="w-full max-w-[1120px] pt-[120px] rounded-lg" />
        </div>

      {/* ⚠️ The Problem Section */}
      <div className="flex flex-col w-full mx-auto px-4 py-[80px] max-w-[800px]">
        <div className="w-full text-left space-y-8">
          <H2>The Problem</H2>
          <BodyMedium>
            Cobre lacked a design system, leading to inefficiencies and roadblocks. Teams were aware of the need for a solution, but competing priorities made it challenging to address the issue.
          </BodyMedium>
          <Image src="/error.png" alt="Problem" width={684} height={384} className="w-full rounded-lg" />
        </div>
      </div>

      {/* 🔍 Research Section */}
      <div className="w-full bg-[#f1f0ec] py-12">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>Research: Asking the right questions</H2>
          <BodyMedium>
            To build an effective and scalable design system, it was essential to understand the needs, challenges, and goals of both our users and internal teams. During the discovery phase, I collaborated closely with designers and developers at Cobre to delve deep into our existing processes and identify areas for improvement.
          </BodyMedium>
        </div>

        {/* Research Stats + Image Block */}
        <div className="w-full flex justify-center">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-10 max-w-[1120px] w-full px-6">
            
            {/* Research Stats Blocks */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "16", label: "Team members interviews" },
                { value: "10", label: "Competitor audits" },
                { value: "6", label: "User Flows analyzed" },
                { value: "37", label: "Possible components identified" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-xl p-6 shadow">
                  <Display className="text-[#212121] text-4xl">{item.value}</Display>
                  <BodyMedium className="text-center">{item.label}</BodyMedium>
                </div>
              ))}
            </div>

            {/* Research Image */}
            <Image src="/research.png" alt="Research" width={500} height={400} className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* 💡 Insights Section */}
      <div className="w-full bg-[#f1f0ec] py-12">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>Insights</H2>
          {[
            { title: "Inconsistent UI elements", description: "Buttons, spacing, and typography varied across screens, disrupting the user experience and creating confusion for users." },
            { title: "Inefficient workflows", description: "Designers and developers spent time rebuilding components from scratch instead of focusing on innovation and delivering value." },
            { title: "Misaligned expectations", description: "Teams struggled to maintain consistency across projects, leading to fragmented user interfaces and slower iteration cycles." },
            { title: "Scalability challenges", description: "As the product grew, the lack of standardization made it harder to align design and development, impacting productivity and collaboration." },
          ].map((insight, index) => (
            <div key={index} className="space-y-3 pb-4 border-b border-[#C1C0BD]">
              <BodyLargeMid className="text-[#212121]">{insight.title}</BodyLargeMid>
              <BodyMedium>{insight.description}</BodyMedium>
            </div>
          ))}
        </div>
      </div>

      {/* 🛠 Building Unity Section */}
      <div className="w-full py-12">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>Building Unity: The Design System</H2>
          {[ 
            { step: "1", title: "Style Guide Development", points: ["Defined foundations for colors, typography, layout grids, and design tokens.", "Ensured responsiveness and accessibility."], image: "/styleguide.png" },
            { step: "2", title: "Component Library Creation", points: ["Followed Atomic Design principles to create reusable Figma components.", "Ensured components aligned with branding and usability standards."], image: "/component.png" },
            { step: "3", title: "Integration with Developers", points: ["Collaborated closely with developers to implement the library in Storybook.", "Created a feedback loop to refine and validate components."], image: "/integration.png" }
          ].map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#ffc5db] rounded-full">
                  <div className="text-[#ea4c89] text-lg font-medium">{item.step}</div>
                </div>
                <BodyLargeMid>{item.title}</BodyLargeMid>
              </div>
              <ul className="list-disc pl-10 space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="text-[#575655] text-sm">{point}</li>
                ))}
              </ul>
              <Image src={item.image} alt={item.title} width={1120} height={630} className="w-full rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* 🎨 Design Tokens Section */}
      <div className="w-full py-12">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>Design Tokens</H2>
          <BodyMedium>Design tokens are the visual design atoms of the design system.</BodyMedium>
        </div>
      </div>

      {/* 🚀 Project Outcomes Section */}
      <div className="w-full py-12">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>Project Outcomes: The Impact of Unity Design System</H2>
          <ul className="list-disc pl-5 space-y-2">
            <li><BodyMedium>Inconsistency across design iterations led to inefficiencies, slow development cycles, and fragmented user experiences.</BodyMedium></li>
            <li><BodyMedium>Starting designs from scratch diverted focus from innovation.</BodyMedium></li>
          </ul>
          {[
            { emoji: "🚀", title: "50% faster", description: "design-to-development cycle" },
            { emoji: "🏃‍♀️", title: "Increased speed", description: "to market" },
            { emoji: "⏰", title: "30% reduction", description: "in QA time" },
            { emoji: "👩‍💻", title: "Less code", description: "changes" }
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