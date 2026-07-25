"use client";

export default function Marquee({
  children,
  className = "",
  reverse = false,
  pauseOnHover = false,
  speed = 30,
}) {
  return (
    <div
      className={`flex overflow-hidden ${className}`}
      data-pause={pauseOnHover ? "" : undefined}
      style={{ "--marquee-speed": `${speed}s` }}
    >
      <div
        className="flex w-max shrink-0 items-center gap-4 animate-marquee"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
