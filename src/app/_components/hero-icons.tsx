type IconProps = {
  className?: string;
};

const baseClass =
  "h-12 w-12 text-[#39ff64] drop-shadow-[0_0_14px_rgba(57,255,100,0.35)]";

export const ResidentIcon = ({ className = "" }: IconProps) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${baseClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="18" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M20 50c0-7 5.5-12 12-12s12 5 12 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 54h36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 27l-4 8v15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M46 27l4 8v15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const OfficeIcon = ({ className = "" }: IconProps) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${baseClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="18"
        width="18"
        height="32"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="36"
        y="10"
        width="18"
        height="40"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M19 26h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M19 34h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M19 42h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45 18h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45 26h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45 34h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M45 42h0.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M6 50h52"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ContractorIcon = ({ className = "" }: IconProps) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${baseClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="14"
        y="10"
        width="24"
        height="40"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M22 18h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22 26h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22 34h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M22 42h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="46" cy="42" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M52 48l6 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const CustomerIcon = ({ className = "" }: IconProps) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${baseClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="12"
        width="24"
        height="34"
        rx="2"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M18 20h12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 28h12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M18 36h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="46" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M38 44c1.5-4.5 5-7 8-7s6.5 2.5 8 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const SpecialistIcon = ({ className = "" }: IconProps) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${baseClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="20"
        width="44"
        height="26"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M24 20v-4c0-3 2-6 8-6s8 3 8 6v4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path d="M10 32h44" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M30 32v6h4v-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const EmployerIcon = ({ className = "" }: IconProps) => {
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
<svg
      viewBox="0 0 64 64"
      fill="none"
      className={`${baseClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="22" cy="20" r="7" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M12 42c1.5-6 5.5-10 10-10s8.5 4 10 10"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="45" cy="24" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M37 42c1-4.5 4.5-7.5 8-7.5s7 3 8 7.5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M30 14h8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M34 10v8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
