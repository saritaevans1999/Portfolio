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
} from '../components/typography';
import PageHeader from '../components/pageheader';
import useHighlightText from '../hooks/use-highlight-text';
import FooterLink from '../components/footer-link';
import Timeline from '../components/timeline';
import { HiArrowDown } from 'react-icons/hi2';
import { LAYING_THE_FOUNDATIONS } from './constants';

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
            title="Portal version 3.0"
            width={97}
            height={50}
          />
        </div>
        <div className="space-y-2 mb-[120px]">
          <TitleLight>Complexity to clarity:</TitleLight>
          <Display className="mb-3">
            Redesigning Cobre’s Costumer Portal for scalable growth
          </Display>
        </div>
        <div className="shadow-xl rounded-[32px] overflow-hidden max-w-[1120px]">
          <Image
            src="/portalmain.png"
            alt="Hero"
            width={2242}
            height={1187}
            className="w-full "
          />
        </div>
      </div>

      <div className="flex flex-col w-full mx-auto px-4 py-[80px] max-w-[800px]">
        <div className="w-full text-left space-y-8">
          <H2>
            <span className="highlight-text">
              Cobre Portal: Empowering B2B Payments in LATAM
            </span>
          </H2>
          <div className="mb-10">
            <BodyLargeMid className="mb-3">About Cobre’s Portal</BodyLargeMid>
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                <BodyMedium>
                  Simplifies financial operations by connecting and integrating
                  multiple banking systems, payment methods, and financial tools
                  into one cohesive platform.
                </BodyMedium>
              </li>
              <li>
                <BodyMedium>
                  A central platform for managing interoperable payments and
                  centralizing treasury operations.
                </BodyMedium>
              </li>
            </ul>
          </div>
          <div className="mb-10">
            <BodyLargeMid className="mb-3">Key features</BodyLargeMid>
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                <BodyMedium>Payment management</BodyMedium>
              </li>
              <li>
                <BodyMedium>Real-time reconciliation</BodyMedium>
              </li>
              <li>
                <BodyMedium>Treasury centralization</BodyMedium>
              </li>
              <li>
                <BodyMedium>Universal banking integration</BodyMedium>
              </li>
            </ul>
          </div>
          <Image
            src="/key-feature-portal.png"
            alt="Key Feature"
            width={1412}
            height={813}
            className="w-full rounded-[32px] overflow-hidden"
          />
        </div>
      </div>

      <div className="w-full bg-[#f1f0ec] py-12 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left">
          <H2 className="mb-24">
            <span className="highlight-text">
              The Challenge: Adopt an API-first approach
            </span>
          </H2>
          <div className="p-5 pb-20 pt-7 rounded-2xl bg-white flex gap-3">
            <div className="">
              <Image
                src="/info-icon.png"
                width={96}
                height={96}
                className="aspect-square max-lg:w-8 w-11"
                alt="Star Icon"
              />
            </div>
            <div className="flex-1">
              <BodyLargeMid className="mb-4 mt-2">The challenge</BodyLargeMid>
              <ul className="list-disc ml-5 flex flex-col gap-3">
                <li>
                  <BodyMedium>
                    The original product was designed with a portal-first
                    approach, and APIs were developed as an afterthought.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    This structure lacked the scalability and flexibility
                    required for international expansion.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    As the company grew, a significant number of clients became
                    API-focused, prioritizing integration over the portal’s user
                    interface.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    The portal was neither designed nor built to support an
                    API-first model, creating inefficiencies and limitations for
                    these users.
                  </BodyMedium>
                </li>
              </ul>
            </div>
          </div>
          <HiArrowDown className="text-4xl mx-auto my-6" />
          <div className="p-5 pb-20 pt-7 rounded-2xl bg-[#FFDFEB] flex gap-3">
            <div className="">
              <Image
                src="/star-icon.png"
                width={96}
                height={96}
                className="aspect-square max-lg:w-8 w-11"
                alt="Star Icon"
              />
            </div>
            <div className="flex-1">
              <BodyLargeMid className="mb-4 mt-2">The goal</BodyLargeMid>
              <ul className="list-disc ml-5 flex flex-col gap-3">
                <li>
                  <BodyMedium>
                    Meet Client Expectations: Adapt to the growing demand for
                    robust API integrations from international clients, shifting
                    priorities to focus on interoperability and flexibility.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    Enable Scalability: Redesign the portal architecture to
                    support cross-border operations and seamless integration
                    with multiple financial partners.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    Drive Market Expansion: Build a solution capable of scaling
                    with Cobre&apos;s ambitions to dominate the LATAM market and
                    expand into global fintech ecosystems.
                  </BodyMedium>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 pb-20 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">
              Research Phase: Laying the Foundation
            </span>
          </H2>
          <BodyMedium>
            The research phase began by uncovering user needs, analyzing
            competitors, and mapping an initial structure to guide the redesign.
            This work set the stage for a scalable and user-focused solution.
          </BodyMedium>
          <Timeline items={LAYING_THE_FOUNDATIONS} />
        </div>
      </div>

      <div className="w-full py-12 bg-[#F1F0EC] max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left">
          <H2>
            <span className="highlight-text">Research Phase: Insights</span>
          </H2>
          <BodyLargeMid className="mt-14">
            Our research revealed essential priorities for the redesign:
          </BodyLargeMid>
          <ul className="list-disc ml-5 flex flex-col gap-3 mt-6 mb-16">
            <li>
              <BodyMedium>
                Users need a simplified navigation structure to handle high
                transaction volumes seamlessly.
              </BodyMedium>
            </li>
            <li>
              <BodyMedium>
                A focus on interoperability is critical to accommodate diverse
                banking and financial systems.
              </BodyMedium>
            </li>
            <li>
              <BodyMedium>
                The design must prioritize scalability to integrate future
                features like Cobre Connect.
              </BodyMedium>
            </li>
          </ul>
          <div className="flex gap-6">
            <div className="w-1/2 relative aspect-square">
              <Image
                src="/portal-insight-1.png"
                width={662}
                height={655}
                className="w-full h-full object-cover"
                alt="Insight 1"
              />
            </div>
            <div className="w-1/2 relative aspect-square">
              <Image
                src="/portal-insight-2.png"
                width={662}
                height={655}
                className="w-full h-full object-cover"
                alt="Insight 2"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-12 pb-20 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">
              The Approach: from Vision to Execution
            </span>
          </H2>
          <BodyMedium>
            Armed with insights from research, we devised a strategic approach
            to redesign the portal, balancing user needs, technical scalability,
            and business objectives. Our method focused on iterative design,
            seamless collaboration, and prioritizing key features for an
            API-first framework.
          </BodyMedium>
          <div className="mb-10">
            <BodyLargeMid className="mb-6">
              Refining Information Architecture:
            </BodyLargeMid>
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                <BodyMedium>
                  Used feedback from stakeholders and research to finalize the
                  portal&apos;s structure.
                </BodyMedium>
              </li>
              <li>
                <BodyMedium>
                  Ensured sections like Payments, Reports, and Accounts were
                  intuitive and scalable.
                </BodyMedium>
              </li>
            </ul>
          </div>
          <Image
            src="/portal-vision-to-execution-1.png"
            width={1368}
            height={1057}
            alt="Vision to Execution"
            className="w-full"
          />
          <div className="mb-16 mt-20">
            <BodyLargeMid className="mb-6">
              Wireframe testing and iteration:
            </BodyLargeMid>
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                <BodyMedium>
                  Conducted usability tests with low-fidelity wireframes to
                  validate workflows.
                </BodyMedium>
              </li>
              <li>
                <BodyMedium>
                  Refined layouts and flows based on feedback from users and
                  internal teams.
                </BodyMedium>
              </li>
            </ul>
          </div>
          <Image
            src="/portal-vision-to-execution-2.png"
            width={1436}
            height={846}
            alt="Vision to Execution"
            className="w-full"
          />
        </div>
      </div>

      {/* 🚀 Project Outcomes Section */}
      <div className="w-full py-12 max-lg:px-4 bg-[#F1F0EC] mb-10">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">Project Outcomes</span>
          </H2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <BodyMedium>
                The redesign of the Cobre Portal delivered impactful
                improvements, setting a new benchmark for scalability,
                efficiency, and user-centric design. Here&apos;s a snapshot of
                the transformation:
              </BodyMedium>
            </li>
          </ul>
          {[
            {
              emoji: '/portal-outcome-1.png',
              title: (
                <span>
                  <strong>70%</strong> increase in task efficiency
                </span>
              ),
              description:
                'Simplified workflows reduced user clicks from 14 to 4',
            },
            {
              emoji: '/portal-outcome-2.png',
              title: (
                <span>
                  Over <strong>50+</strong> API endpoint integrations
                </span>
              ),
              description:
                'Seamlessly connected banks, payment systems, and treasury tools.',
            },
            {
              emoji: '/portal-outcome-3.png',
              title: (
                <span>
                  <strong>Scalable</strong> design system
                </span>
              ),
              description:
                'Supported 70+ user flows with modular, reusable components',
            },
            {
              emoji: '/portal-outcome-4.png',
              title: (
                <span>
                  <strong>30k+</strong> payments being processed biweekly
                </span>
              ),
              description:
                'Built to handle high transaction volumes across geographies.',
            },
          ].map((outcome, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={outcome.emoji}
                className="w-10 aspect-square"
                width={160}
                height={160}
                alt="Emoji"
              />
              <div className="flex flex-col">
                <TitleLight>{outcome.title}</TitleLight>
                <BodyMedium>{outcome.description}</BodyMedium>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterLink />
    </>
  );
}
