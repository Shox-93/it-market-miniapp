import type { ReactNode } from "react";

type HeroCardProps = {
  title: string;
  text: string;
  stat: string;
  statLabel: string;
  icon?: ReactNode;
  buttonText?: string;
  secondaryButtonText?: string;
  className?: string;
};

export const HeroCard = ({
  title,
  text,
  stat,
  statLabel,
  icon,
  buttonText,
  secondaryButtonText,
  className,
}: HeroCardProps) => {
  return (
    <article
      className={[
        "group overflow-hidden rounded-[28px] border border-white/50 bg-white/[0.07] shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[14px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="grid min-h-56 grid-cols-[1fr_180px]">
        <div className="relative border-r border-white/20 px-7 py-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_100%)]" />
            <div className="absolute left-1/3 top-0 h-40 w-40 rounded-full bg-[#39ff64]/10 blur-3xl" />
            <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-white/6 blur-3xl" />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            {icon && (
              <div className="mb-5 [&>svg]:h-11 [&>svg]:w-11">
                {icon}
              </div>
            )}

            <h3 className="mb-4 text-[17px] font-extrabold uppercase leading-none tracking-[0.01em] text-white">
              {title}
            </h3>

            <p className="max-w-130 text-[15px] leading-7 text-white/90">
              {text}
            </p>

            {(buttonText || secondaryButtonText) && (
              <div className="mt-8 flex items-center gap-4">
                {buttonText && (
                  <button type="button" className="inline-flex h-11.5 whitespace-nowrap items-center rounded-full border border-white/80 px-6 text-[15px] font-semibold text-white transition hover:bg-white hover:text-black">
                    {buttonText}
                  </button>
                )}

                {secondaryButtonText && (
                  <button type="button" className="inline-flex h-11.5 whitespace-nowrap items-center rounded-full border border-white/80 px-6 text-[15px] font-semibold text-white transition hover:bg-white hover:text-black">
                    {secondaryButtonText}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center px-5 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_100%)]" />

          <div className="relative z-10 text-[60px] font-extralight leading-none tracking-[-0.05em] text-white">
            {stat}
          </div>

          <div className="relative z-10 mt-2 text-[15px] font-bold leading-tight text-white">
            {statLabel}
          </div>
        </div>
      </div>
    </article>
  );
};