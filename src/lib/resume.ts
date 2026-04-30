
import { siteConfig } from "@/lib/config";

export async function fetchResume() {
    const res = await fetch(siteConfig.resumeURL, {
        next: { tags: ["resume"], revalidate: 3600 },
    });

    if (!res.ok || !res.body) {
        throw new Error(
            `Failed to fetch resume: ${res.status} ${res.statusText}`
        );
    }

    return res;
}

export function getResumeFilename(download: boolean = false) {
    const formattedName = siteConfig.name.replace(/\s+/g, "_");
    const roleAbbreviation = siteConfig.roleAbbeviation;

    return download
        ? `${formattedName}_${roleAbbreviation}_Resume.pdf`
        : `${siteConfig.name}'s Resume.pdf`;
}
