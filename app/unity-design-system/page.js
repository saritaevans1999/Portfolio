'use client';

import '../styles/globals.css'; // Ensure your global styles are included
import Image from 'next/image';
import Navbar from '../components/navbar';
import {
  Display,
  H2,
  BodyMedium,
  BodyLargeMid,
  TitleLight,
  TitleReg,
} from '../components/typography';
import PageHeader from '../components/pageheader';
import './page.css';
import useHighlightText from '../hooks/use-highlight-text';
import FooterLink from '../components/footer-link';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function HomePage() {
  useHighlightText();

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto text-left px-4">
        <div className="mt-10">
          <PageHeader
            imageSrc="/logoCobre.png"
            title="Unity Design System"
            width={97}
            height={50}
          />
        </div>
        <div className="space-y-2 mb-30">
          <TitleLight>From chaos to cohesion:</TitleLight>
          <Display className="mb-3">
            Building a scalable design system for a fast-paced startup
          </Display>
        </div>
        <Image
          src="/unitymain.png"
          alt="Hero"
          width={1120}
          height={630}
          className="w-full max-w-[1120px] pt-[120px] rounded-lg"
        />
      </div>

      {/* ⚠️ The Problem Section */}
      <div className="flex flex-col w-full mx-auto px-4 py-[80px] max-w-[800px]">
        <div className="w-full text-left space-y-8">
          <H2>
            <span className="highlight-text">The Problem</span>
          </H2>
          <BodyMedium>
            Cobre lacked a design system, leading to inefficiencies and
            roadblocks. Teams were aware of the need for a solution, but
            competing priorities made it challenging to address the issue.
          </BodyMedium>
          <div className="bg-[#FAF9F5] rounded-[36px] text-center p-[28px]">
            <h3 className="font-inter font-semibold text-6xl mb-5">404</h3>
            <TitleReg className="text-[#575655] mb-12 !font-normal">
              Design system not found
            </TitleReg>
            <DotLottieReact
              src="/404.lottie"
              className="w-[350px] mx-auto"
              loop
              autoplay
            />
          </div>
        </div>
      </div>

      {/* 🔍 Research Section */}
      <div className="w-full bg-[#f1f0ec] py-12 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">
              Research: Asking the right questions
            </span>
          </H2>
          <BodyMedium>
            To build an effective and scalable design system, it was essential
            to understand the needs, challenges, and goals of both our users and
            internal teams. During the discovery phase, I collaborated closely
            with designers and developers at Cobre to delve deep into our
            existing processes and identify areas for improvement.
          </BodyMedium>
        </div>

        {/* Research Stats + Image Block */}
        <div className="w-full flex justify-center max-w-[800px] mx-auto mb-[70px]">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-10 w-full mt-10">
            {/* Research Stats Blocks */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '16', label: 'Team members interviews' },
                { value: '10', label: 'Competitor audits' },
                { value: '6', label: 'User Flows analyzed' },
                { value: '37', label: 'Possible components identified' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white rounded-xl px-2 py-6 shadow"
                >
                  <Display className="text-[#212121] lg:text-[60px]">
                    {item.value}
                  </Display>
                  <BodyMedium className="text-center text-[13px]">
                    {item.label}
                  </BodyMedium>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Image */}
        <Image
          src="/research.png"
          alt="Research"
          width={500}
          height={400}
          className="rounded-lg w-full mx-auto max-w-[800px]"
        />
      </div>

      {/* 💡 Insights Section */}
      <div className="w-full bg-[#f1f0ec] py-12 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">Insights</span>
          </H2>
          {[
            {
              title: 'Inconsistent UI elements',
              description:
                'Buttons, spacing, and typography varied across screens, disrupting the user experience and creating confusion for users.',
            },
            {
              title: 'Inefficient workflows',
              description:
                'Designers and developers spent time rebuilding components from scratch instead of focusing on innovation and delivering value.',
            },
            {
              title: 'Misaligned expectations',
              description:
                'Teams struggled to maintain consistency across projects, leading to fragmented user interfaces and slower iteration cycles.',
            },
            {
              title: 'Scalability challenges',
              description:
                'As the product grew, the lack of standardization made it harder to align design and development, impacting productivity and collaboration.',
            },
          ].map((insight, index, arr) => (
            <div
              key={index}
              className={`space-y-3 pb-4 border-[#C1C0BD] ${
                index !== arr.length - 1 ? 'border-b' : ''
              }`}
            >
              <BodyLargeMid className="text-[#212121]">
                {insight.title}
              </BodyLargeMid>
              <BodyMedium>{insight.description}</BodyMedium>
            </div>
          ))}
        </div>
      </div>

      {/* 🛠 Building Unity Section */}
      <div className="w-full py-12 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">
              Building Unity: The Design System
            </span>
          </H2>
          {[
            {
              step: '1',
              title: 'Style Guide Development',
              points: [
                'Defined foundations for colors, typography, layout grids, and design tokens.',
                'Ensured responsiveness and accessibility.',
              ],
              image: '/styleguide.png',
            },
            {
              step: '2',
              title: 'Component Library Creation',
              points: [
                'Followed Atomic Design principles to create reusable Figma components.',
                'Ensured components aligned with branding and usability standards.',
              ],
              image: '/component.png',
            },
            {
              step: '3',
              title: 'Integration with Developers',
              points: [
                'Collaborated closely with developers to implement the library in Storybook.',
                'Created a feedback loop to refine and validate components.',
              ],
              image: '/integration.png',
            },
          ].map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-[#ffc5db] rounded-full">
                  <div className="text-[#ea4c89] text-lg font-medium">
                    {item.step}
                  </div>
                </div>
                <BodyLargeMid>{item.title}</BodyLargeMid>
              </div>
              <ul className="list-disc pl-10 space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="text-[#575655] text-sm">
                    {point}
                  </li>
                ))}
              </ul>
              <Image
                src={item.image}
                alt={item.title}
                width={1120}
                height={630}
                className="w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 🎨 Design Tokens Section */}
      <div className="w-full py-12 bg-[#F1F0EC] max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">
              Design Tokens: The Key to Scalability
            </span>
          </H2>
          <BodyMedium>
            Maintaining consistency across products became time-consuming and
            error-prone, especially with frequent updates and rebranding needs.
          </BodyMedium>
          <div className="p-4 rounded-2xl bg-[#FFDFEB] flex gap-3">
            <div className="">
              <Image
                src="/star-icon.png"
                width={96}
                height={96}
                className="aspect-square max-lg:w-8"
                alt="Star Icon"
              />
            </div>
            <div className="flex-1">
              <BodyLargeMid className="mb-1">
                The solution: Design tokens
              </BodyLargeMid>
              <BodyMedium>
                Centralized variables for colors, typography, and spacing.
                Tokens bridged design and development, ensuring consistent
                implementation across platforms.
              </BodyMedium>
            </div>
          </div>
          <div>
            <BodyLargeMid className="mb-6">
              How the design tokens worked:
            </BodyLargeMid>
            <ul className="list-disc ml-4 flex flex-col">
              <li>
                <BodyMedium>
                  Foundation Tokens: Defined core styles (colors, typography,
                  spacing) in Figma and code.
                </BodyMedium>
              </li>
              <li>
                <BodyMedium>
                  Flexibility: Enabled seamless rebranding for white-label
                  products.
                </BodyMedium>
              </li>
              <li>
                <BodyMedium>
                  Collaboration: Integrated tokens into Storybook for
                  developer-readyBodyMedium handoff.
                </BodyMedium>
              </li>
            </ul>
          </div>
          <Image
            src="/color-palette.png"
            width={1388}
            height={925}
            alt="Color Palette"
            className="w-full"
          />
        </div>
      </div>

      {/* 🚀 Project Outcomes Section */}
      <div className="w-full py-12 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">
              Project Outcomes: The Impact of Unity Design System
            </span>
          </H2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <BodyMedium>
                Inconsistency across design iterations led to inefficiencies,
                slow development cycles, and fragmented user experiences.
              </BodyMedium>
            </li>
            <li>
              <BodyMedium>
                Starting designs from scratch diverted focus from innovation.
              </BodyMedium>
            </li>
          </ul>
          {[
            {
              emoji: '🚀',
              title: '50% faster',
              description: 'design-to-development cycle',
            },
            { emoji: '🏃‍♀️', title: 'Increased speed', description: 'to market' },
            { emoji: '⏰', title: '30% reduction', description: 'in QA time' },
            { emoji: '👩‍💻', title: 'Less code', description: 'changes' },
          ].map((outcome, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="text-[40px]">{outcome.emoji}</div>
              <div className="flex flex-col">
                <TitleLight>
                  {outcome.title} {outcome.description}
                </TitleLight>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FooterLink />
    </>
  );
}
