'use client';

import { Subtitle } from "./typography";
import Image from 'next/image'

export default function PageHeader({ imageSrc, title }) {
  return (
    <div className="flex flex-row items-center justify-between w-full mb-10">
      {/* Image on the left */}
      <div className="w-[97.4px] flex justify-start">
        <Image
          src={imageSrc}
          alt={title}
          width={97}
          height={97}
          className="w-full max-w-[445px]"
        /> 
      </div>

      {/* Title on the right */}
      <div className="pl-8">
        <Subtitle>{title}</Subtitle>
      </div>
    </div>
  );
}
