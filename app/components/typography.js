export const H1 = ({ children }) => (
  <h1 className="text-[40px] lg:text-[56px] font-medium font-blacker leading-[1]">{children}</h1>
);

export const H2 = ({ children }) => (
  <h2 className="text-[24px] lg:text-[32px] font-medium font-blacker">{children}</h2>
);

export const Display = ({ children }) => (
  <h5 className="text-[32px] lg:text-[40px] font-semibold font-inter">{children}</h5>
);

export const TitleSemi = ({ children }) => (
  <h3 className="text-[24px] lg:text-[32px] font-semibold font-inter">{children}</h3>
);

export const TitleReg = ({ children }) => (
  <h6 className="text-[24px] lg:text-[32px] font-semibold font-inter">{children}</h6>
);

export const TitleLight = ({ children }) => (
  <h4 className="text-[24px] lg:text-[32px] font-light font-inter">{children}</h4>
);

export const H4 = ({ children }) => (
  <h4 className="text-[20px] lg:text-[28px] font-normal font-inter">{children}</h4>
);

export const Subtitle = ({ children }) => (
  <h5 className="text-[18px] lg:text-[24px] font-normal font-inter">{children}</h5>
);

export const BodyLarge = ({ children }) => (
  <p className="text-[#575655] text-lg lg:text-xl font-normal font-inter">{children}</p>
);

export const BodyMedium = ({ children }) => (
  <p className="text-[#575655] text-base lg:text-lg font-normal font-inter">{children}</p>
);

export const BodyLargeMid = ({ children }) => (
  <p className="text-[#212121] text-lg lg:text-xl font-medium font-inter">{children}</p>
);
