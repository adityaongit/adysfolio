import { NextResponse, type NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
    const secret = process.env.RESUME_REVALIDATE_SECRET;
    if (!secret) {
        return NextResponse.json(
            { ok: false, error: "Server is not configured for revalidation." },
            { status: 500 }
        );
    }

    const auth = req.headers.get("authorization") ?? "";
    const provided = auth.startsWith("Bearer ") ? auth.slice(7) : auth;
    if (provided !== secret) {
        return NextResponse.json(
            { ok: false, error: "Unauthorized" },
            { status: 401 }
        );
    }

    revalidateTag("resume", "max");
    revalidatePath("/api/resume");
    revalidatePath("/api/resume/download");
    revalidatePath("/resume");

    return NextResponse.json({ ok: true, revalidated: ["resume"], at: Date.now() });
}
