export const siteConfig = {
    name: "Aditya Jindal",
    domain: "adityajindal.com",
    role: "Software Engineer",
    email: "work.adityajindal@gmail.com",
    description:
        "Software Engineer building with clarity, structure, and a bias toward automation.",
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
    ] as const,
    resumeURL:
        "https://github.com/adityaongit/resume/releases/latest/download/Aditya_Jindal_Resume.pdf",
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
    ] as const,
} as const;

export const projects = [
    {
        title: "SplitWatt",
        description:
            "An open-source electricity bill splitter that handles the math nobody wants to do — submeter-based cost splitting, UPI integration, and a Lighthouse 100 score across all four categories.",
        highlights: ["Next.js", "Better Auth", "TypeScript", "Umami"],
        live: "https://splitwatt.vercel.app/",
        github: "https://github.com/adityaongit/electricity-bill-split",
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
        title: "Pair Code",
        description:
            "A collaborative coding environment where teams write and run code together in real time. Built-in compiler, multi-language support, and no setup required — just share a link and start.",
        highlights: ["Node.js", "WebSockets", "React.js"],
        live: "https://paircode-dev.vercel.app/",
        github: "https://github.com/adityaongit/paircode",
    },
    {
        title: "ColdCraft",
        description:
            "A cold outreach toolkit for job seekers — template management with variable substitution, AI-powered resume tailoring, and bulk email campaigns sent directly through your own Gmail account via OAuth.",
        highlights: ["Next.js", "MongoDB", "Gmail API", "LLMs", "Better Auth"],
        live: null,
        github: "https://github.com/adityaongit/cold-craft",
        wip: true,
    },
];
