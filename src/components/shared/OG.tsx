const theme = {
  background: "#0d0d10",
  foreground: "#f5f5f7",
  muted: "#6b6b80",
  mutedBright: "#9999aa",
  border: "rgba(255, 255, 255, 0.06)",
  purpleAccent: "#8b7cf8",
  purpleLight: "#a78bfa",
  purpleGlow: "rgba(139, 124, 248, 0.12)",
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
  if (len < 25) return 88;
  if (len < 45) return 72;
  if (len < 65) return 56;
  return 42;
}

function getDescFontSize(desc: string): number {
  const len = desc.length;
  if (len < 80) return 24;
  if (len < 140) return 20;
  return 16;
}

// Helper to check if title is essentially the same as name
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
      {/* Top gradient line */}
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

      {/* Subtle grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background watermark - subtle name pattern */}
      <div
        style={{
          position: "absolute",
          right: -60,
          bottom: -40,
          fontSize: 200,
          fontWeight: 900,
          color: theme.purpleAccent,
          opacity: 0.03,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        {name.toUpperCase()}
      </div>

      {/* Purple glow in corner */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -150,
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${theme.purpleGlow} 0%, transparent 65%)`,
          pointerEvents: "none",
        }}
      />

      {/* Bottom gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          height: "100%",
          padding: "0 80px",
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
            paddingTop: 48,
            paddingBottom: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <LogoGlyph size={26} color={theme.purpleAccent} />
            <div
              style={{
                width: 1,
                height: 14,
                background: theme.border,
              }}
            />
            <span
              style={{
                fontFamily: "'Geist Mono', monospace",
                fontWeight: 600,
                fontSize: 10,
                letterSpacing: "0.15em",
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
              fontSize: 14,
              color: theme.muted,
              opacity: 0.5,
            }}
          >
            {domain}
          </span>
        </div>

        {/* Main content - centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Tags */}
          {tags.length > 0 && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  style={{
                    padding: "5px 12px",
                    fontSize: 10,
                    fontFamily: "'Geist Mono', monospace",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    border: `1px solid rgba(139,124,248,0.25)`,
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

          {/* Title - large and bold */}
          <div
            style={{
              fontSize: getTitleFontSize(title),
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.05em",
              color: theme.foreground,
              maxWidth: "95%",
            }}
          >
            {truncate(title, 120)}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: getDescFontSize(description),
                color: theme.mutedBright,
                maxWidth: "75%",
                lineHeight: 1.5,
              }}
            >
              {truncate(description, 200)}
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingBottom: 48,
            borderTop: `1px solid ${theme.border}`,
            paddingTop: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.25em",
                color: theme.purpleAccent,
                fontFamily: "'Geist Mono', monospace",
              }}
            >
              {role}
            </span>
            {!titleIsName && (
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: theme.foreground,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                {name}
              </span>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div
              style={{
                width: 32,
                height: 1,
                background: theme.purpleAccent,
                opacity: 0.4,
              }}
            />
            <LogoGlyph size={18} color={theme.purpleAccent} />
          </div>
        </div>
      </div>
    </div>
  );
}
