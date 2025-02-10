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
            title="Payment Tracker"
            width={97}
            height={50}
          />
        </div>
        <div className="space-y-2 mb-[120px]">
          <TitleLight>Empowering Payment Management:</TitleLight>
          <Display className="mb-3">
            Crafting a Reliable Tool for Tracking Customer Payments
          </Display>
        </div>
        <div className="shadow-xl rounded-[32px] overflow-hidden max-w-[1120px]">
          <Image
            src="/payment-tracker-hero.png"
            alt="Hero"
            width={2368}
            height={1130}
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
            src="/payment-tracker-hero-2.png"
            alt="Payment Tracker 2"
            width={1407}
            height={938}
            className="w-full rounded-[32px] overflow-hidden"
          />
        </div>
      </div>

      <div className="w-full bg-[#f1f0ec] py-12 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left">
          <H2 className="mb-24">
            <span className="highlight-text">
              The Challenge: Improve Payment Timeline Transparency
            </span>
          </H2>
          <div className="p-5 pb-20 pt-7 rounded-2xl bg-white flex gap-3">
            <div className="">
              <Image
                src="/info-icon.png"
                width={96}
                height={96}
                className="aspect-square max-lg:w-8 w-11"
                alt="Info Icon"
              />
            </div>
            <div className="flex-1">
              <BodyLargeMid className="mb-4 mt-2">The challenge</BodyLargeMid>
              <ul className="list-disc ml-5 flex flex-col gap-3">
                <li>
                  <BodyMedium>
                    Users face frustration due to a lack of visibility into
                    payment response times, especially during contingency
                    scenarios.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    The absence of clear timelines leads to confusion and
                    increased customer support requests.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    A significant portion of support tickets (41%) is related to
                    “Payment processing status,” indicating the need for better
                    communication of payment updates.
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
                    Provide users with clear visibility into payment timelines
                    under both normal and contingency conditions.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    Minimize friction by reducing uncertainty and confusion
                    about payment statuses.
                  </BodyMedium>
                </li>
                <li>
                  <BodyMedium>
                    Decrease support tickets related to payment inquiries by at
                    least 30% within the first month.
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
            The research began by analyzing user pain points and support data to
            pinpoint the core challenges. The insights gained informed the
            foundational structure for addressing user frustrations. Here&apos;s
            what we uncovered:
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
                Users need clear, real-time visibility into payment timelines,
                including history and contingencies.
              </BodyMedium>
            </li>
            <li>
              <BodyMedium>
                A better design will reduce confusion, improve satisfaction, and
                decrease support ticket volume.
              </BodyMedium>
            </li>
            <li>
              <BodyMedium>
                A focus on clarity will directly impact user trust and
                retention.
              </BodyMedium>
            </li>
          </ul>
          <Image
            src="/payment-tracker-insight.png"
            width={1368}
            height={563}
            className="w-full h-full object-cover"
            alt="Payment Tracker Insight"
          />
        </div>
      </div>

      <div className="w-full py-12 pb-20 max-lg:px-4">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">
              The Approach: From Vision to Results
            </span>
          </H2>
          <BodyMedium>
            Armed with user feedback and iterative design, our efforts delivered
            measurable outcomes that enhanced user experience and operational
            efficiency.
          </BodyMedium>
          <div className="mb-10">
            <BodyLargeMid className="mb-6">Key results</BodyLargeMid>
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                <BodyMedium>
                  Reduced Support Tickets: Achieved a milestone by reducing
                  tickets associated with payment processing status to just 10%
                  of the overall volume by November 2023.
                </BodyMedium>
              </li>
              <li>
                <BodyMedium>
                  Increased Engagement: Reached an impressive engagement rate of
                  65% by November 2023, showcasing strong user interaction and
                  adoption of the new functionality.
                </BodyMedium>
              </li>
            </ul>
          </div>
          <div className="mb-10">
            <BodyLargeMid className="mb-6">Success metrics</BodyLargeMid>
            <ul className="list-disc ml-5 flex flex-col gap-3">
              <li>
                <BodyMedium>
                  Improved transparency and clarity in payment processing,
                  driving user satisfaction.
                </BodyMedium>
              </li>
              <li>
                <BodyMedium>
                  Lowered the burden on customer support teams, freeing
                  resources for higher-value tasks.
                </BodyMedium>
              </li>
            </ul>
          </div>
          <Image
            src="/payment-tracker-approach.png"
            width={1458}
            height={1337}
            alt="Approach"
            className="w-full"
          />
        </div>
      </div>

      {/* 🚀 Project Outcomes Section */}
      <div className="w-full py-12 max-lg:px-4 bg-[#F1F0EC]">
        <div className="max-w-[800px] w-full mx-auto text-left space-y-10">
          <H2>
            <span className="highlight-text">Project Outcomes</span>
          </H2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <BodyMedium>
                The development of the Payment Tracker improved financial
                transparency, giving users clearer, real-time insights into
                their transactions and account activity. Here’s a snapshot of
                its impact:
              </BodyMedium>
            </li>
          </ul>
          {[
            {
              emoji: '/payment-tracker-outcome-1.png',
              title: (
                <span>
                  Reduced payment processing tickets to <strong>10%</strong>
                </span>
              ),
            },
            {
              emoji: '/payment-tracker-outcome-2.png',
              title: (
                <span>
                  <strong>65%</strong> user engagement rates
                </span>
              ),
            },
            {
              emoji: '/payment-tracker-outcome-3.png',
              title: (
                <span>
                  <strong>30%</strong> fewer support tickets in month 1
                </span>
              ),
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
      <div className="max-w-[800px] my-10 w-full mx-auto relative aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          src="https://embed.figma.com/proto/U1LOymuiCR5AJgofoQnrcb/Portfolio?page-id=45%3A3728&node-id=412-31433&viewport=-33509%2C-28572%2C0.97&scaling=min-zoom&content-scaling=fixed&embed-host=share"
          allowFullScreen
        ></iframe>
      </div>
      <FooterLink />
    </>
  );
}
