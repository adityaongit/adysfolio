import { OGImage } from "@/components/shared/OG";
import { ImageResponse } from "@takumi-rs/image-response";
import { NextRequest } from "next/server";

const truncate = (str: string, max: number) =>
  str.length > max ? str.slice(0, max - 1).trimEnd() + "…" : str;

function getParam(
  params: URLSearchParams,
  key: string,
  fallback: string,
  max: number,
) {
  return truncate(params.get(key) ?? fallback, max);
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const title = getParam(
      searchParams,
      "title",
      "Building distributed AI systems with clarity and rigor",
      100,
    );
    const description = getParam(
      searchParams,
      "description",
      "Backend engineer building distributed AI systems with clarity, structure, and rigor.",
      130,
    );
    const name = getParam(searchParams, "name", "Aditya Jindal", 40);
    const domain = getParam(searchParams, "domain", "adysfolio.vercel.app", 50);
    const path = getParam(searchParams, "path", "home / blog", 60);
    const role = getParam(searchParams, "role", "Software Engineer", 50);

    const tags = (searchParams.get("tags")?.split(",").filter(Boolean) ?? [])
      .slice(0, 4)
      .map((t) => truncate(decodeURIComponent(t.trim()), 20));

    const image = new ImageResponse(
      <OGImage
        title={title}
        description={description}
        name={name}
        domain={domain}
        path={path}
        role={role}
        tags={tags}
      />,
      {
        width: 1200,
        height: 630,
      },
    );

    return new Response(image.body, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control":
          "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800, immutable",
      },
    });
  } catch (err) {
    console.error("[OG] Failed to generate image:", err);

    return new Response("Failed to generate OG image", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
