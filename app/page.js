'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/navbar';
import { H1, H2, TitleSemi } from './components/typography';
import {
  PrimaryButton,
  AccentLink,
  SecondaryButton,
} from './components/buttons';
import FooterLink from './components/footer-link';
import { useState } from 'react';
import PlayButton from './components/play-button';
import VideoPlayer from './components/video-player';
import useHighlighText from './hooks/use-highlight-text';
import { HiArrowDown } from 'react-icons/hi2';

export default function HomePage() {
  const [isIntroductionVideoOpen, setIsIntroductionVideoOpen] = useState(false);

  useHighlighText();

  const handleScrollToWork = () => {
    const element = document.getElementById('selected-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <VideoPlayer
        videoUrl="/videos/introduction-video.mp4"
        isOpen={isIntroductionVideoOpen}
        onClose={() => setIsIntroductionVideoOpen(false)}
      />

      {/* Main Content */}
      <div className="layout-container flex flex-col mx-auto px-4 mt-16 lg:mt-[170px]">
        {/* Hero Section */}
        <div
          id="hero-section"
          className="flex flex-col lg:flex-row justify-between w-full"
        >
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-8 mb-8 lg:mb-0">
            <H1>
              Hi, <span className="highlight-text">I&apos;m Sarita.</span>
            </H1>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              Currently helping shape the future of payments in LATAM at{' '}
              <AccentLink href="https://www.cobre.co/">Cobre</AccentLink>.<br />
              Aspiring to join Georgia Tech&apos;s HCI MS.
            </p>
            <div className="hidden lg:block w-full">
              <PrimaryButton
                className="w-full max-w-full flex gap-3 items-center"
                onClick={handleScrollToWork}
              >
                See selected work <HiArrowDown />
              </PrimaryButton>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-start">
            <div className="relative">
              <Image
                src="/video_thumbnail.webp"
                alt="Sarita Evans"
                width={1920}
                height={1080}
                className="max-w-[445px] w-full h-auto object-contain rounded-xl"
                onClick={() => setIsIntroductionVideoOpen(true)}
              />
              <PlayButton onClick={() => setIsIntroductionVideoOpen(true)} />
            </div>
          </div>
          <div className="w-full block lg:hidden mt-8">
            <PrimaryButton className="w-full" onClick={handleScrollToWork}>
              See selected work
            </PrimaryButton>
          </div>
        </div>

        {/* Selected Work Section */}
        <div
          id="selected-work"
          className="flex flex-col w-full space-y-10 mt-[170px]"
        >
          {/* Title */}
          <div className="mb-[40px]">
            <H2>Selected Work</H2>
          </div>

          {/* Rows */}
          {[
            {
              title: 'Unity Design System',
              description: [
                '50% faster design-to-development cycle.',
                '30% reduction in QA time.',
              ],
              image: '/Unity.png',
              link: '/unity-design-system',
            },
            {
              title: 'Cobre portal version 3.0',
              description: ['30k+ payments being processed biweekly.'],
              image: '/Cobre v3.png',
              link: '/case2',
            },
            {
              title: 'Payment tracker',
              description: ['30k+ payments being processed biweekly.'],
              image: '/Tracker.png',
              link: '/case3',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full mb-[40px] min-h-[392px] h-auto"
            >
              <div className="flex flex-col lg:flex-row justify-between">
                {/* Text Column */}
                <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 max-w-full lg:max-w-[446px]">
                  <TitleSemi>
                    <span className="highlight-text">{item.title}</span>
                  </TitleSemi>
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
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
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
              {index < 2 && <div className="flex justify-between"></div>}
            </div>
          ))}
        </div>

        {/* About Me Section */}
        <div
          id="about-me"
          className="flex flex-col lg:flex-row justify-between mt-[170px] mb-[170px]"
        >
          {/* Left Column */}
          <div className="w-full lg:w-[640px] space-y-8 mb-8 lg:mb-0">
            <H2>About Me</H2>
            <TitleSemi>My journey in Product Design</TitleSemi>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              I have over{' '}
              <span className="font-semibold">
                3 years of experience as a product designer
              </span>
              , specializing in design systems, user research, and experience
              design. <span className="font-semibold">At Cobre</span>, a leading
              Colombian fintech startup, I most notably built a scalable design
              system from scratch and helped launch Colombia&apos;s first
              instant payment railway.
            </p>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              <span className="font-semibold">
                My work combines creativity and technology
              </span>{' '}
              to solve complex problems and empower users. I&apos;m passionate
              about creating meaningful products that balance functionality with
              business goals.
            </p>
            <p className="text-[16px] font-inter text-[#575655] leading-[1.5]">
              When I&apos;m not designing,{' '}
              <span className="font-semibold">
                you&apos;ll find me practicing contemporary dancing
              </span>
              , expressing myself through movement.
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[360px]">
            <Image
              src="/Sarita about me.png"
              alt="About Me"
              width={360}
              height={200}
              className="max-w-full lg:max-w-[360px] w-full lg:w-[360px] h-auto rounded-lg shadow-lg object-left ml-0"
            />
          </div>
        </div>

        <FooterLink />
      </div>
    </>
  );
}
