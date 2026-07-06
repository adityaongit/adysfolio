const theme = {
  background: "#09090b",
  foreground: "#fafafa",
  muted: "#a1a1aa",
  faint: "#52525b",
  border: "rgba(255, 255, 255, 0.09)",
  gridLine: "rgba(255, 255, 255, 0.035)",
  accent: "#43CA80",
  accentInk: "#06130c",
  accentDim: "rgba(67, 202, 128, 0.14)",
};

/** The orbital-A mark at the heart of the hero plate, rings around it. */
function HeroPlate() {
  return (
    <svg
      viewBox="0 0 640 630"
      width={640}
      height={630}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", right: -70, top: 0 }}
    >
      <circle
        cx="360"
        cy="315"
        r="95"
        stroke={theme.foreground}
        strokeWidth="1.2"
        strokeDasharray="2 7"
        opacity="0.35"
      />
      <circle
        cx="360"
        cy="315"
        r="160"
        stroke={theme.foreground}
        strokeWidth="1.2"
        strokeDasharray="2 7"
        opacity="0.26"
      />
      <circle
        cx="360"
        cy="315"
        r="225"
        stroke={theme.foreground}
        strokeWidth="1.2"
        strokeDasharray="1 9"
        opacity="0.18"
      />

      <g transform="translate(309 264) scale(1.6)">
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
        <circle cx="57.2" cy="29.7" r="4" fill={theme.accent} />
      </g>

      <circle cx="491" cy="223" r="22" fill={theme.accent} opacity="0.1" />
      <circle cx="491" cy="223" r="13" fill={theme.accent} opacity="0.22" />
      <circle cx="491" cy="223" r="7" fill={theme.accent} />

      <circle cx="278" cy="362" r="5" fill={theme.foreground} opacity="0.5" />
      <circle cx="564" cy="410" r="6" fill={theme.foreground} opacity="0.45" />
      <ellipse
        cx="564"
        cy="410"
        rx="14"
        ry="4.5"
        stroke={theme.foreground}
        strokeWidth="1.2"
        opacity="0.45"
        transform="rotate(-18 564 410)"
      />

      <circle cx="250" cy="150" r="2" fill={theme.foreground} opacity="0.35" />
      <circle cx="440" cy="500" r="2" fill={theme.foreground} opacity="0.3" />
      <circle cx="180" cy="470" r="1.5" fill={theme.foreground} opacity="0.3" />
      <circle cx="580" cy="180" r="1.5" fill={theme.foreground} opacity="0.35" />
      <circle cx="320" cy="80" r="1.5" fill={theme.foreground} opacity="0.3" />
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
  if (len < 20) return 92;
  if (len < 40) return 72;
  if (len < 60) return 58;
  return 46;
}

function getDescFontSize(desc: string): number {
  const len = desc.length;
  if (len < 80) return 26;
  if (len < 140) return 22;
  return 18;
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

      <div
        style={{
          position: "absolute",
          top: -40,
          right: -180,
          width: 760,
          height: 760,
          background: `radial-gradient(circle, ${theme.accentDim} 0%, rgba(67,202,128,0.05) 40%, transparent 68%)`,
        }}
      />

      <HeroPlate />

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
          padding: "38px 56px",
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
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.22em",
              color: theme.accentInk,
              textTransform: "uppercase",
              backgroundColor: theme.accent,
              padding: "6px 14px",
              borderRadius: 4,
            }}
          >
            {path}
          </span>
          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontSize: 16,
              color: theme.muted,
            }}
          >
            {domain}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            maxWidth: titleIsName ? 700 : 720,
          }}
        >
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "6px 14px",
                    fontSize: 13,
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

          {titleIsName && (
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: 999,
                  backgroundColor: theme.accent,
                  display: "flex",
                }}
              />
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: theme.accent,
                }}
              >
                {role} · Open to work
              </span>
            </div>
          )}

          <div
            style={{
              fontSize: getTitleFontSize(title),
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.045em",
              color: theme.foreground,
            }}
          >
            {truncate(title, 110)}
          </div>

          {description && (
            <div
              style={{
                fontSize: getDescFontSize(description),
                color: theme.muted,
                maxWidth: 620,
                lineHeight: 1.55,
              }}
            >
              {truncate(description, 180)}
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
            {titleIsName ? (
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 15,
                  color: theme.muted,
                }}
              >
                Backend · Distributed systems · AI
              </span>
            ) : (
              <>
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
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: theme.muted,
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {role}
                </span>
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: theme.foreground,
                    letterSpacing: "-0.02em",
                    marginLeft: 10,
                  }}
                >
                  {name}
                </span>
              </>
            )}
          </div>

          <span
            style={{
              fontFamily: "'Geist Mono', monospace",
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: "0.06em",
              color: theme.accentInk,
              backgroundColor: theme.accent,
              padding: "8px 18px",
              borderRadius: 999,
            }}
          >
            {`Visit ${domain} →`}
          </span>
        </div>
      </div>
    </div>
  );
}
