export const siteConfig = {
    name: "Aditya Jindal",
    domain: "adysfolio.vercel.app",
    role: "Software Engineer",
    roleAbbeviation: "SWE",
    email: "work.adityajindal@gmail.com",
    description:
        "Backend engineer building distributed AI systems with clarity, structure, and rigor.",
    baseUrl:
        process.env.NEXT_PUBLIC_BASE_URL ??
        (process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
            ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
            : "http://localhost:3000"),
    availableForHire: true,
    handle: "adityaongit",
    sameAs: [
        "https://github.com/adityaongit",
        "https://www.linkedin.com/in/adityaonin/",
        "https://leetcode.com/u/adysleetcode/",
        "https://www.geeksforgeeks.org/profile/adysgfg?tab=activity",
    ] as const,
    resumeURL:
        "https://github.com/adityaongit/resume/releases/latest/download/Aditya_SWE_Resume_2YOE.pdf",
    nav: [
        { href: "/blogs", label: "Blogs" },
        { href: "/resume", label: "Resume" },
    ] as const,
    social: [
        {
            platform: "github",
            href: "https://github.com/adityaongit",
            label: "GitHub",
        },
        {
            platform: "linkedin",
            href: "https://www.linkedin.com/in/adityaonin/",
            label: "LinkedIn",
        },
        {
            platform: "leetcode",
            href: "https://leetcode.com/u/adysleetcode/",
            label: "LeetCode",
        },
        {
            platform: "geeksforgeeks",
            href: "https://www.geeksforgeeks.org/profile/adysgfg?tab=activity",
            label: "GeeksforGeeks",
        },
    ] as const,
} as const;

export const certifications = [
    {
        id: "aws-solutions-architect",
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        year: "2024",
        url: "https://www.coursera.org/account/accomplishments/professional-cert/3V2Q2RD4X7NG",
    },
    {
        id: "gcp-ace",
        name: "Google Associate Cloud Engineer",
        issuer: "Google Cloud",
        year: "2023",
        url: "https://drive.google.com/file/d/1AAtIxFsjt6rqrTe52p9mTzh7wxzh2sQR/view",
    },
] as const;

export type Project = {
    title: string;
    description: string;
    highlights: string[];
    live: string | null;
    github: string;
    wip?: boolean;
};

export const projects: readonly Project[] = [
    {
        title: "PitchPad",
        description:
            "A cold outreach toolkit for job seekers — template management with variable substitution, AI-powered resume tailoring, and bulk email campaigns sent directly through your own Gmail account via OAuth.",
        highlights: ["Next.js", "MongoDB", "Gmail API", "LLMs", "Better Auth"],
        live: "https://pitchpad.vercel.app/",
        github: "https://github.com/adityaongit/cold-craft",
        wip: true,
    },
    {
        title: "Soteira",
        description:
            "A real-time video inference engine that responds to natural-language prompts. Point it at a stream, ask what's happening, get an answer in ~150ms — running entirely on CPU.",
        highlights: ["Python", "OpenCV", "YOLO", "LLMs", "ML"],
        live: null,
        github: "https://github.com/adityaongit/soteira",
    },
    {
        title: "SplitWatt",
        description:
            "An open-source electricity bill splitter that handles the math nobody wants to do — submeter-based cost splitting, UPI integration, and a Lighthouse 100 score across all four categories.",
        highlights: ["Next.js", "Better Auth", "TypeScript", "Umami"],
        live: "https://splitwatt.vercel.app/",
        github: "https://github.com/adityaongit/electricity-bill-split",
    },
    {
        title: "Pair Code",
        description:
            "A collaborative coding environment where teams write and run code together in real time. Built-in compiler, multi-language support, and no setup required — just share a link and start.",
        highlights: ["Node.js", "WebSockets", "React.js"],
        live: "https://paircode-dev.vercel.app/",
        github: "https://github.com/adityaongit/paircode",
    },
];
