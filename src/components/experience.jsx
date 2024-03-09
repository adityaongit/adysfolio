import { useState } from "react";
import { useEffect } from "react";
import ExperienceCard from "./ExperienceCard.jsx";

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(
            "https://adysfolio.onrender.com/api/experiences?populate=*"
        );
        const json = await data.json();

        console.log(json.data);
        setExperiences(json.data);
    }

    return (
        <div>
            <div id="experience" className="container mx-auto mt-16">
                <h1 className="text-3xl font-bold mb-4">Experience</h1>
                <p className="mb-10">
                    Some of the <span id="intern">Internships</span> that
                    I&apos;ve did:
                </p>
            </div>
            <div className="projects grid gap-12 lg:grid-cols-2">
                {experiences.map((exp) => {
                    return (
                        <ExperienceCard key={exp.id} data={exp.attributes} />
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
