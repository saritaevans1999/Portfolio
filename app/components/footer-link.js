import React from 'react';

const FooterLink = () => {
  return (
    <div className="flex w-full justify-center items-center gap-12 font-open-sans text-sm leading-6 mb-20 py-4 font-medium">
      <a
        href="https://www.linkedin.com/in/sarita-evans-5432b6231"
        target="_blank"
      >
        Linkedin
      </a>
      <a href="mailto:saritaevansb@gmail.com" target="_blank">
        Email
      </a>
      <a href="/Sarita Evans Resume.pdf" target="_blank">
        See full CV
      </a>
    </div>
  );
};

export default FooterLink;
