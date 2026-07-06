const theme = {
  background: "#09090b",
  foreground: "#fafafa",
  muted: "#a1a1aa",
  faint: "#52525b",
  border: "rgba(255, 255, 255, 0.09)",
  gridLine: "rgba(255, 255, 255, 0.03)",
  accent: "#43CA80",
  accentDim: "rgba(67, 202, 128, 0.14)",
};

function OrbitalMarkGlyph({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 8 L16 58 M32 8 L48 58"
        stroke={theme.foreground}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="32" cy="8" r="5.5" fill={theme.foreground} />
      <ellipse
        cx="32"
        cy="36"
        rx="26"
        ry="9"
        transform="rotate(-14 32 36)"
        stroke={theme.foreground}
        strokeWidth="2"
        strokeDasharray="2.5 3.5"
        opacity="0.75"
      />
      <circle cx="57.2" cy="29.7" r="4.5" fill={theme.accent} />
    </svg>
  );
}

function OrbitalPlate({
  size,
  style,
}: {
  size: number;
  style: Record<string, string | number>;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", ...style }}
    >
      <circle cx="200" cy="200" r="4" fill={theme.accent} opacity="0.8" />
      <circle
        cx="200"
        cy="200"
        r="70"
        stroke={theme.foreground}
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.22"
      />
      <circle
        cx="200"
        cy="200"
        r="130"
        stroke={theme.foreground}
        strokeWidth="1"
        strokeDasharray="2 6"
        opacity="0.16"
      />
      <circle
        cx="200"
        cy="200"
        r="190"
        stroke={theme.foreground}
        strokeWidth="1"
        strokeDasharray="1 8"
        opacity="0.12"
      />
      <circle cx="270" cy="200" r="3.5" fill={theme.foreground} opacity="0.4" />
      <circle cx="200" cy="70" r="3" fill={theme.accent} opacity="0.7" />
      <circle cx="66" cy="255" r="2.5" fill={theme.foreground} opacity="0.35" />
    </svg>
  );
}

function PlusMarker({ style }: { style: Record<string, string | number> }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", ...style }}
    >
      <path
        d="M12 2 V22 M2 12 H22"
        stroke={theme.foreground}
        strokeWidth="1.5"
        opacity="0.35"
      />
    </svg>
  );
}

export interface OGImageProps {
  title: string;
  description: string;
  name: string;
  role: string;
  domain: string;
  path: string;
  tags: string[];
}

function truncate(str: string, max: number): string {
  return str.length > max ? str.slice(0, max).trimEnd() + "…" : str;
}

function getTitleFontSize(title: string): number {
  const len = title.length;
  if (len < 25) return 84;
  if (len < 45) return 68;
  if (len < 65) return 54;
  return 42;
}

function getDescFontSize(desc: string): number {
  const len = desc.length;
  if (len < 80) return 24;
  if (len < 140) return 20;
  return 17;
}

function isTitleSameAsName(title: string, name: string): boolean {
  const normalizedTitle = title.toLowerCase().trim();
  const normalizedName = name.toLowerCase().trim();
  return (
    normalizedTitle === normalizedName || normalizedTitle.includes(normalizedName)
  );
}

export function OGImage({
  title,
  description,
  name,
  role,
  domain,
  path,
  tags,
}: OGImageProps) {
  const titleIsName = isTitleSameAsName(title, name);

  return (
    <div
      style={{
        width: 1200,
        height: 630,
        backgroundColor: theme.background,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        fontFamily: "'Geist', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(${theme.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${theme.gridLine} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <OrbitalPlate size={560} style={{ top: -210, right: -170 }} />
      <OrbitalPlate size={420} style={{ bottom: -230, left: -140 }} />

      <div
        style={{
          position: "absolute",
          top: 40,
          left: 56,
          right: 56,
          bottom: 40,
          border: `1px solid ${theme.border}`,
          display: "flex",
        }}
      />
      <PlusMarker style={{ top: 29, left: 45 }} />
      <PlusMarker style={{ top: 29, right: 45 }} />
      <PlusMarker style={{ bottom: 29, left: 45 }} />
      <PlusMarker style={{ bottom: 29, right: 45 }} />

      <div
        style={{
          position: "absolute",
          top: 40,
          left: 56,
          right: 56,
          bottom: 40,
          padding: "40px 56px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <OrbitalMarkGlyph size={34} />
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontWeight: 600,
                fontSize: 13,
                letterSpacing: "0.25em",
                color: theme.muted,
                textTransform: "uppercase",
              }}
            >
              {path}
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 15,
              color: theme.faint,
            }}
          >
            {domain}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    fontSize: 12,
                    fontFamily: "'Geist Mono', monospace",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    border: `1px solid ${theme.border}`,
                    color: theme.muted,
                    borderRadius: 999,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div
            style={{
              fontSize: getTitleFontSize(title),
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: theme.foreground,
              maxWidth: "94%",
            }}
          >
            {truncate(title, 120)}
          </div>

          {description && (
            <div
              style={{
                fontSize: getDescFontSize(description),
                color: theme.muted,
                maxWidth: "78%",
                lineHeight: 1.55,
              }}
            >
              {truncate(description, 200)}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: `1px solid ${theme.border}`,
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: theme.accent,
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: theme.muted,
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              {role}
            </span>
          </div>

          {!titleIsName && (
            <span
              style={{
                fontSize: 26,
                fontWeight: 700,
                color: theme.foreground,
                letterSpacing: "-0.02em",
              }}
            >
              {name}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
