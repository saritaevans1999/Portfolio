import React from 'react';
import { BodyLargeMid, BodyMedium } from './typography';

const Timeline = ({ items }) => {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, index) => (
        <TimelineItem
          key={item.title}
          item={item}
          index={index}
          isLastItem={index === items.length - 1}
        />
      ))}
    </ul>
  );
};

const TimelineItem = ({ item, index, isLastItem }) => {
  const { title, list } = item;

  return (
    <li className="flex gap-4">
      <div className="flex flex-col items-center gap-3">
        <div className="bg-[#FFC6DC] rounded-full flex items-center justify-center w-10 aspect-square">
          <h3 className="text-[#EA4C89]">{index + 1}</h3>
        </div>
        {!isLastItem && <TimelineArrow height={item.arrowHeight} />}
      </div>
      <div>
        <BodyLargeMid className="mt-2">{title}</BodyLargeMid>
        <ul className="list-disc ml-5 flex flex-col gap-3 mt-6 mb-12">
          {list.map((text) => (
            <li key={text}>
              <BodyMedium>{text}</BodyMedium>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const TimelineArrow = ({ height = 91 }) => {
  return (
    <svg
      width="19"
      height={height}
      viewBox={`0 0 19 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M9.5 1V${height - 1}M9.5 ${height - 1}L18.4 ${height - 10}M9.5 ${
          height - 1
        }L0.6 ${height - 10}`}
        stroke="#212121"
        strokeOpacity="0.5"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Timeline;
