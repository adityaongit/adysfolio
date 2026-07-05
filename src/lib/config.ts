export const siteConfig = {
    name: "Aditya Jindal",
    domain: "aditya.portlabs.in",
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
    instagram: {
        handle: "googlestudents",
        verified: true,
        avatar: "/instagram/googlestudents-avatar.jpg",
        postUrl: "https://www.instagram.com/p/CwC-3dnPjIc/",
        date: "Aug 2023",
        caption: "From my SWE internship at Google, Bengaluru.",
        slides: [
            {
                src: "/instagram/google-office.jpg",
                alt: "Aditya in front of the illuminated Google logo wall at the Google office in Bengaluru",
            },
            {
                src: "/instagram/google-cloud-office.jpg",
                alt: "Aditya in front of the Google Cloud logo at the Google office",
            },
        ],
    },
    nav: [
        { href: "/blogs", label: "Blogs" },
        { href: "/certifications", label: "Certifications" },
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
        id: "computer-vision-mathworks",
        name: "Computer Vision",
        issuer: "MathWorks",
        year: "Aug 2023",
        url: "https://www.coursera.org/account/accomplishments/specialization/certificate/ARUUGQ6N2LEG",
    },
    {
        id: "data-mining-iitkgp",
        name: "Data Mining",
        issuer: "IIT Kharagpur",
        year: "May 2023",
        url: "https://drive.google.com/file/d/1MiZEoeUe83GNy9ELWP_dT_i7v9OF4TT-/view?usp=sharing",
    },
    {
        id: "gcp-ace",
        name: "Associate Cloud Engineer (Learning Path)",
        issuer: "Google Cloud Skills Boost",
        year: "Apr 2023",
        url: "https://drive.google.com/file/d/1AAtIxFsjt6rqrTe52p9mTzh7wxzh2sQR/view",
    },
    {
        id: "google-tech-support",
        name: "Technical Support Fundamentals",
        issuer: "Google",
        year: "Jan 2023",
        url: "https://www.coursera.org/account/accomplishments/certificate/N9ADLTKK2NWX",
    },
    {
        id: "software-testing-iiitb",
        name: "Software Testing",
        issuer: "IIIT Bangalore",
        year: "Nov 2022",
        url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS61S10467220610054809",
    },
    {
        id: "angular-infosys",
        name: "Angular",
        issuer: "Infosys Springboard",
        year: "Sep 2022",
        url: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_20858515543254600000_shared/1-e84d5437-419f-4b51-81e0-ef0bd37582bd.pdf",
    },
    {
        id: "typescript-infosys",
        name: "TypeScript Essentials",
        issuer: "Infosys Springboard",
        year: "Sep 2022",
        url: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_auth_0127562264098324481391_shared/1-d8bc604b-b3dc-40d0-94d2-e57bc06f6b35.pdf",
    },
    {
        id: "node-express-mongo-hkust",
        name: "Server-side Development with NodeJS, Express and MongoDB",
        issuer: "HKUST",
        year: "Mar 2022",
        url: "https://www.coursera.org/account/accomplishments/certificate/HXWE6GC34VAJ",
    },
    {
        id: "java-basic-hackerrank",
        name: "Java (Basic)",
        issuer: "HackerRank",
        year: "Feb 2022",
        url: "https://www.hackerrank.com/certificates/90caf9b3b2e4",
    },
    {
        id: "angular-hkust",
        name: "Front-End JavaScript Frameworks: Angular",
        issuer: "HKUST",
        year: "Dec 2021",
        url: "https://www.coursera.org/account/accomplishments/certificate/KNLYGL4KHLDV",
    },
    {
        id: "html-css-js-jhu",
        name: "HTML, CSS, and JavaScript for Web Developers",
        issuer: "Johns Hopkins University",
        year: "Mar 2021",
        url: "https://www.coursera.org/account/accomplishments/certificate/PSVMZRYK4YXY",
    },
] as const;
