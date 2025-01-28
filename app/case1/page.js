'use client';

import Link from "next/link"; // Import Link for navigation
import Navbar from "../components/navbar"; // Import your Navbar component
import { Display, H1, H2, TitleSemi, H4, TitleLight } from "../components/typography"; // Import typography components
import { PrimaryButton, AccentLink, SecondaryButton } from "../components/buttons";
import PageHeader from "../components/pageheader";
import './page.css'; // Import the CSS file

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <PageHeader imageSrc="/logoCobre.png" title="Unity Design System" />

      {/* Main Content */}
      <div className="flex flex-col w-full mx-auto px-4" style={{ marginTop: "170px" }}>
        {/* Hero Section */}
        <div className="flex flex-row w-full max-w-[1120px] mx-auto mb-40">
          <div className="space-y-3">
            <H4>From chaos to cohesion:</H4>
            <Display>Building a scalable design system for a fast-paced startup</Display>
            <img src="/unitymain.png" alt="Hero" className="w-full max-w-[1120px]" />
          </div>
        </div>

        {/* The Problem Section */}
        <div className="flex flex-col w-[648px] mx-auto mb-40">
          <div className="space-y-3">
            <TitleLight>The problem:</TitleLight>
            <H4>
              Cobre lacked a design system, leading to inefficiencies and roadblocks. Teams were aware of the need for a solution, but competing priorities made it challenging to address the issue.
            </H4>
            <img src="/error.png" alt="Problem" className="w-full max-w-[1120px]" />
          </div>
        </div>

        {/* Research Section */}
        <div className="flex flex-col w-[648px] mx-auto p-12 bg-[#f1f0ec] gap-10">
          <div className="space-y-6">
            <H2>Research: Asking the right questions</H2>
            <p className="text-[#575655] text-base leading-snug">
              To build an effective and scalable design system, it was essential to understand the needs, challenges, and goals of both our users and internal teams. During the discovery phase, I collaborated closely with designers and developers at Cobre to delve deep into our existing processes and identify areas for improvement.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "16", label: "Team member interviews" },
              { value: "10", label: "Competitor audits" },
              { value: "6", label: "User Flows analyzed" },
              { value: "37", label: "Possible components identified" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
                <H4 className="text-[#212121] text-5xl">{item.value}</H4>
                <p className="text-[#575655] text-sm">{item.label}</p>
              </div>
            ))}
            <img src="/Research.png" />
          </div>
        </div>

        {/* Insights Section */}
        <div className="flex flex-col w-[648px] mx-auto p-12 bg-[#f1f0ec] gap-10">
          <div className="space-y-6">
            <H2>Insights</H2>
            {[
              {
                title: "Inconsistent UI elements",
                description: "Buttons, spacing, and typography varied across screens, disrupting the user experience and creating confusion for users.",
              },
              {
                title: "Inefficient workflows",
                description: "Designers and developers spent time rebuilding components from scratch instead of focusing on innovation and delivering value.",
              },
              {
                title: "Misaligned expectations",
                description: "Teams struggled to maintain consistency across projects, leading to fragmented user interfaces and slower iteration cycles.",
              },
              {
                title: "Scalability challenges",
                description: "As the product grew, the lack of standardization made it harder to align design and development, impacting productivity and collaboration.",
              },
            ].map((insight, index) => (
              <div key={index}>
                <H4>{insight.title}</H4>
                <p className="text-[#575655] text-sm">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Style Guide Development Section */}
        <div className="flex flex-col w-[648px] mx-auto p-12 gap-6">

        <H2>Building Unity: The Design System</H2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#ffc5db] rounded-full">
                <div className="text-[#ea4c89] text-lg font-medium">1</div>
              </div>
              <TitleSemi>Style Guide Development</TitleSemi>
            </div>
            <div className="space-y-2">
              <p className="text-[#575655] text-sm">
                Defined foundations for colors, typography, layout grids, and design tokens.
              </p>
              <p className="text-[#575655] text-sm">
                Ensured responsiveness and accessibility.
              </p>
              <img src="/styleguide.png" alt="Hero" className="w-full max-w-[1120px]" />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#ffc5db] rounded-full">
                <div className="text-[#ea4c89] text-lg font-medium">2</div>
              </div>
              <TitleSemi>Component library creation</TitleSemi>
            </div>
            <div className="space-y-2">
              <p className="text-[#575655] text-sm">Followed Atomic Design principles to create reusable Figma components (e.g., buttons, inputs, dropdowns).</p>
              <p className="text-[#575655] text-sm">
              Ensured components aligned with branding and usability standards.  
               </p>
              <img src="/component.png" alt="Hero" className="w-full max-w-[1120px]" />

            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-[#ffc5db] rounded-full">
                <div className="text-[#ea4c89] text-lg font-medium">3</div>
              </div>
              <TitleSemi>Integration with developers</TitleSemi>
            </div>
            <div className="space-y-2">
              <p className="text-[#575655] text-sm">
              Collaborated closely with developers to implement the library in Storybook. 
              </p>
              
              <p className="text-[#575655] text-sm">
              Created a feedback loop to refine and validate components.              </p>
              <img src="/integration.png" alt="Hero" className="w-full max-w-[1120px]" />

            </div>
          </div>
     {/* Design tokens Section */}
     <div className="flex flex-col w-[648px] mx-auto p-12 bg-[#f1f0ec] gap-10">
          <div className="space-y-6">
            <H2>Desig Tokens: The Key to Scalability</H2>
            <p className="text-[#575655] text-base leading-snug">
            Maintaining consistency across products became time-consuming and error-prone, especially with frequent updates and rebranding needs.            </p>
          </div>

          <div class="h-24 p-4 bg-[#ffdeeb] rounded-2xl flex items-start gap-3">
            <div class="h-12 px-8 py-2.5 bg-[#ffc5db] rounded-full flex items-center justify-center">
              <div class="w-6 h-6 flex items-center justify-center"></div>
            </div>
            <div class="flex flex-col gap-1">
              <H4 class="text-[#212121] text-xl font-medium leading-normal">
                The solution: Design tokens
              </H4>
              <p class="text-[#575655] text-sm font-normal leading-tight">
                Centralized variables for colors, typography, and spacing. Tokens bridged design and development, ensuring consistent implementation across platforms.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[648px] mx-auto p-12 gap-10">
          <H4>How the design tokens worked:</H4>
            
            <TitleSemi>Foundation Tokens: Defined core styles (colors, typography, spacing) in Figma and code.</TitleSemi>
            <TitleSemi>Flexibility: Enabled seamless rebranding for white-label products.</TitleSemi>
            <TitleSemi>Collaboration: Integrated tokens into Storybook for developer-ready handoff.</TitleSemi>
         
            <img src="/tokens.png" alt="Hero" className="w-full max-w-[1120px]" />

          </div>
        
        <div className="flex flex-col w-[648px] mx-auto p-12 gap-10">
          <H2>Project Outcomes: The Impact of Unity Design System</H2>
          <TitleSemi>Inconsistency across design iterations led to inefficiencies, slow development cycles, and fragmented user experiences.</TitleSemi>
          <TitleSemi>Starting designs from scratch diverted focus from innovation.</TitleSemi>
          </div>
        </div>

        <div class="w-[575.92px] h-[148.67px] p-[22.84px] rounded-[22.84px] justify-start items-center gap-10 inline-flex">
            <div class="justify-start items-start flex">
              <div class="text-[#212121] text-[68.51px] font-normal font-['Inter'] leading-[102.77px]">🚀</div>
            </div>
            <div><span class="text-[#212121] text-[22.84px] font-medium font-['Inter'] leading-[34.26px]">50%</span><span class="text-[#212121] text-[22.84px] font-light font-['Inter'] leading-[34.26px]"> faster design-to-development cycle</span></div>
          </div>
        </div>

        <div class="w-[575.92px] h-[148.67px] p-[22.84px] rounded-[22.84px] justify-start items-center gap-10 inline-flex">
          <div class="justify-start items-start flex">
            <div class="text-[#212121] text-[68.51px] font-normal font-['Inter'] leading-[102.77px]">🏃‍♀️</div>
          </div>
          <div class="text-[#212121] text-[22.84px] font-light font-['Inter'] leading-[34.26px]">Increased speed to market</div>
        </div>

        <div class="w-[575.92px] h-[148.67px] p-[22.84px] rounded-[22.84px] justify-start items-center gap-10 inline-flex">
          <div class="justify-start items-start flex">
            <div class="text-[#212121] text-[68.51px] font-normal font-['Inter'] leading-[102.77px]">⏰</div>
          </div>
          <div><span class="text-[#212121] text-[22.84px] font-medium font-['Inter'] leading-[34.26px]">30%</span><span class="text-[#212121] text-[22.84px] font-light font-['Inter'] leading-[34.26px]"> reduction in QA time</span></div>
        </div>

        <div class="w-[575.92px] h-[148.67px] p-[22.84px] rounded-[22.84px] justify-start items-center gap-10 inline-flex">
          <div class="justify-start items-start flex">
            <div class="text-[#212121] text-[68.51px] font-normal font-['Inter'] leading-[102.77px]">👩‍💻</div>
          </div>
          <div class="text-[#212121] text-[22.84px] font-light font-['Inter'] leading-[34.26px]">Less code changes</div>
        </div>

      </div>
    </>
  );
}


