"use client";

interface FlickerCharProps {
  char: string;
  x: number;
  dur: string;
  values: string;
  keyTimes: string;
  asLogo?: boolean;
  logoScale?: number;
  logoX?: number;
  logoY?: number;
}

function FlickerChar({
  char,
  x,
  dur,
  values,
  keyTimes,
  asLogo = false,
  logoScale = 1.375,
  logoX = 0,
  logoY = 0,
}: FlickerCharProps) {
  return (
    <g aria-hidden="true">
      {asLogo ? (
        <g
          transform={`translate(${logoX}, ${logoY}) scale(${logoScale}) translate(-7, 0)`}
        >
          <circle
            cx="32"
            cy="32"
            r="22"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 5"
            fill="none"
            opacity="0.55"
          />
          <circle cx="32" cy="32" r="5" fill="currentColor" opacity="0.85" />
          <g>
            <circle cx="54" cy="32" r="4" fill="currentColor" />
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 32 32"
              to="360 32 32"
              dur="9s"
              repeatCount="indefinite"
            />
          </g>
        </g>
      ) : (
        <text className="flicker-n" x={x} y="88" textAnchor="middle">
          {char}
        </text>
      )}
      <animate
        attributeName="opacity"
        calcMode="discrete"
        values={values}
        keyTimes={keyTimes}
        dur={dur}
        repeatCount="indefinite"
      />
    </g>
  );
}

interface FlickerTextProps {
  chars: ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "logo")[];
  charWidth?: number;
  className?: string;
  label?: string;
}

const FLICKER_PRESETS = [
  {
    values: "1;1;1;1;0.15;1;1;0.9;1;1;1;0.1;1;1;1;1;0.8;0.1;1;1",
    keyTimes:
      "0;0.05;0.1;0.15;0.17;0.19;0.3;0.31;0.33;0.4;0.5;0.52;0.54;0.6;0.7;0.75;0.76;0.77;0.79;1",
    dur: "4s",
  },
  {
    values: "1;0.05;1;1;0.1;0.9;0.05;1;0.8;0.05;1;1;0.1;1;0.05;0.9;1;0.05;1;1",
    keyTimes:
      "0;0.08;0.1;0.2;0.22;0.24;0.26;0.28;0.4;0.42;0.44;0.5;0.55;0.57;0.6;0.62;0.7;0.85;0.87;1",
    dur: "3.2s",
  },
  {
    values: "1;1;1;0.2;1;1;1;1;0.1;0.8;0.1;1;1;1;0.15;1;1;1;0.05;1",
    keyTimes:
      "0;0.1;0.2;0.22;0.24;0.3;0.4;0.45;0.47;0.49;0.51;0.53;0.6;0.65;0.67;0.69;0.8;0.9;0.92;1",
    dur: "3.7s",
  },
] as const;

export function FlickerText({
  chars,
  charWidth = 76,
  className,
  label,
}: FlickerTextProps) {
  const totalWidth = chars.length * charWidth;
  const resolvedLabel =
    label ?? chars.map((c) => (c === "logo" ? "0" : c)).join("");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${totalWidth} 96`}
      width={totalWidth}
      height={96}
      fill="none"
      role="img"
      aria-label={resolvedLabel}
      className={className}
    >
      <title>{resolvedLabel}</title>
      <defs>
        <style>{`
          .flicker-n {
            font-family: var(--font-geist-mono), ui-monospace, monospace;
            font-size: 96px;
            font-weight: 600;
            letter-spacing: -0.03em;
            fill: currentColor;
          }
        `}</style>
      </defs>

      {chars.map((char, i) => {
        const preset = FLICKER_PRESETS[i % FLICKER_PRESETS.length];
        const x = i * charWidth;

        if (char === "logo") {
          const scale = 1.571;
          const logoX = x + (charWidth - 50 * scale) / 2;
          const logoY = 5;
          return (
            <FlickerChar
              key={i}
              char="logo"
              x={x}
              dur={preset.dur}
              values={preset.values}
              keyTimes={preset.keyTimes}
              asLogo
              logoScale={scale}
              logoX={logoX}
              logoY={logoY}
            />
          );
        }

        return (
          <FlickerChar
            key={i}
            char={char}
            x={x + charWidth / 2}
            dur={preset.dur}
            values={preset.values}
            keyTimes={preset.keyTimes}
          />
        );
      })}
    </svg>
  );
}
