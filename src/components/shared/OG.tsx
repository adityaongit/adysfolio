const theme = {
  background: "#0d0d10",
  backgroundAlt: "#141417",
  foreground: "#f5f5f7",
  primary: "#e8e8ec",
  muted: "#6b6b80",
  mutedBright: "#9999aa",
  border: "rgba(255, 255, 255, 0.06)",
  borderBright: "rgba(255, 255, 255, 0.12)",
  accent: "#2a2a35",
  purpleAccent: "#8b7cf8",
  purpleLight: "#a78bfa",
  purpleGlow: "rgba(139, 124, 248, 0.15)",
};

function LogoGlyph({ size = 32, color }: { size?: number; color: string }) {
  const scaledWidth = Math.round((50 / 64) * size);
  return (
    <svg
      viewBox="14 0 50 64"
      width={scaledWidth}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="32,4 48,60 40.5,60 32,14 23.5,60 16,60" fill={color} />
      <rect x="18" y="36" width="11" height="5" rx="2.5" fill={color} />
      <rect x="35" y="36" width="11" height="5" rx="2.5" fill={color} />
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
  if (len < 20) return 72;
  if (len < 35) return 58;
  if (len < 50) return 48;
  if (len < 70) return 38;
  return 30;
}

function getDescFontSize(desc: string): number {
  const len = desc.length;
  if (len < 80) return 22;
  if (len < 140) return 18;
  return 15;
}

// Helper to check if title is essentially the same as name (avoiding visual duplication)
function isTitleSameAsName(title: string, name: string): boolean {
  const normalizedTitle = title.toLowerCase().trim();
  const normalizedName = name.toLowerCase().trim();
  return normalizedTitle === normalizedName || normalizedTitle.includes(normalizedName);
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
        fontFamily: "'Geist', sans-serif",
      }}
    >
      {/* Top gradient accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${theme.purpleAccent} 0%, ${theme.purpleLight} 50%, transparent 100%)`,
        }}
      />

      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large background watermark with name (when title would duplicate name) */}
      {titleIsName && (
        <div
          style={{
            position: "absolute",
            bottom: -20,
            right: -40,
            fontSize: 280,
            fontWeight: 900,
            color: theme.purpleAccent,
            opacity: 0.04,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {name.toUpperCase()}
        </div>
      )}

      {/* Diagonal purple glow accent */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -200,
          width: 700,
          height: 700,
          background: `radial-gradient(circle, ${theme.purpleGlow} 0%, transparent 60%)`,
          pointerEvents: "none",
        }}
      />

      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: titleIsName ? "1fr" : "240px 1fr",
          height: "100%",
        }}
      >
        {/* Left sidebar - only shown when title is different from name */}
        {!titleIsName && (
          <div
            style={{
              padding: "48px 0 48px 48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              borderRight: `1px solid ${theme.border}`,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: theme.purpleAccent,
                  fontFamily: "'Geist Mono', monospace",
                }}
              >
                {role}
              </span>
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 700,
                  color: theme.foreground,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                {name}
              </span>
              <div
                style={{
                  width: 32,
                  height: 2,
                  background: theme.purpleAccent,
                  marginTop: 12,
                }}
              />
            </div>
          </div>
        )}

        {/* Main content area */}
        <div
          style={{
            padding: titleIsName ? "60px 80px 60px 80px" : "48px 80px 48px 60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <LogoGlyph size={28} color={theme.purpleAccent} />
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: "0.18em",
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
                fontSize: 16,
                color: theme.muted,
                opacity: 0.7,
              }}
            >
              {domain}
            </span>
          </div>

          {/* Center content - title and description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "center",
              padding: titleIsName ? "40px 0" : "20px 0",
            }}
          >
            {/* Tags */}
            {tags.length > 0 && (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "4px 10px",
                      fontSize: 10,
                      fontFamily: "'Geist Mono', monospace",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      border: `1px solid ${theme.purpleAccent}`,
                      backgroundColor: theme.purpleGlow,
                      color: theme.purpleLight,
                      borderRadius: 4,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Title */}
            <div
              style={{
                fontSize: getTitleFontSize(title),
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.04em",
                color: theme.foreground,
              }}
            >
              {truncate(title, 100)}
            </div>

            {/* Description */}
            {description && (
              <div
                style={{
                  fontSize: getDescFontSize(description),
                  color: theme.mutedBright,
                  maxWidth: "80%",
                  lineHeight: 1.6,
                }}
              >
                {truncate(description, 180)}
              </div>
            )}
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 20,
              borderTop: `1px solid ${theme.border}`,
            }}
          >
            {/* When title IS name, show subtle role/name here */}
            {titleIsName && (
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.3em",
                    color: theme.purpleAccent,
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {role}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: theme.muted,
                  }}
                >
                  {name}
                </span>
              </div>
            )}

            {/* When title is NOT name, show copyright here */}
            {!titleIsName && (
              <span
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 13,
                  color: theme.muted,
                  letterSpacing: "0.1em",
                  opacity: 0.6,
                }}
              >
                © {new Date().getFullYear()}
              </span>
            )}

            {/* Decorative element */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 24,
                  height: 1,
                  background: theme.purpleAccent,
                  opacity: 0.5,
                }}
              />
              <LogoGlyph size={20} color={theme.purpleAccent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
