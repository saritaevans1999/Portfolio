export const H1 = ({ children, className = '' }) => (
  <h1
    className={`text-[40px] lg:text-[56px] font-medium font-blacker leading-[1] ${className}`}
  >
    {children}
  </h1>
);

export const H2 = ({ children, className = '' }) => (
  <h2
    className={`text-[24px] lg:text-[32px] font-medium font-blacker ${className}`}
  >
    {children}
  </h2>
);

export const Display = ({ children, className = '' }) => (
  <h5
    className={`text-[32px] lg:text-[40px] font-semibold font-inter ${className}`}
  >
    {children}
  </h5>
);

export const TitleSemi = ({ children, className = '' }) => (
  <h3
    className={`text-[24px] lg:text-[32px] font-semibold font-inter ${className}`}
  >
    {children}
  </h3>
);

export const TitleReg = ({ children, className = '' }) => (
  <h6
    className={`text-[24px] lg:text-[32px] font-semibold font-inter ${className}`}
  >
    {children}
  </h6>
);

export const TitleLight = ({ children, className = '' }) => (
  <h4
    className={`text-[24px] lg:text-[32px] font-light font-inter ${className}`}
  >
    {children}
  </h4>
);

export const H4 = ({ children, className = '' }) => (
  <h4
    className={`text-[20px] lg:text-[28px] font-normal font-inter ${className}`}
  >
    {children}
  </h4>
);

export const Subtitle = ({ children, className = '' }) => (
  <h5
    className={`text-[18px] lg:text-[24px] font-normal font-inter ${className}`}
  >
    {children}
  </h5>
);

export const BodyLarge = ({ children, className = '' }) => (
  <p
    className={`text-[#575655] text-lg lg:text-xl font-normal font-inter ${className}`}
  >
    {children}
  </p>
);

export const BodyMedium = ({ children, className = '' }) => (
  <p
    className={`text-[#575655] text-base lg:text-lg font-normal font-inter ${className}`}
  >
    {children}
  </p>
);

export const BodyLargeMid = ({ children, className = '' }) => (
  <p
    className={`text-[#212121] text-lg lg:text-xl font-medium font-inter ${className}`}
  >
    {children}
  </p>
);
