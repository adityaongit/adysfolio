import { useState, useEffect } from "react";
import ExperienceCard from "./ExperienceCard.jsx";
import { supabase } from "../createClient.js";

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const { data, error } = await supabase
                    .from("experience")
                    .select("*")
                    .order("start_date", { ascending: false });
                if (error) {
                    setError(error.message);
                } else {
                    setExperiences(data);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchExperiences();
    }, []);

    return (
        <>
            <div>
                {error && <div>Error: {error}</div>}
                {experiences.length > 0 ? (
                    <div>
                        <div
                            id="experience"
                            className="container mx-auto mt-16"
                        >
                            <h1 className="text-3xl font-bold mb-4">
                                Experience
                            </h1>
                            <p className="mb-10">
                                Some of the internships that I've done:
                            </p>
                        </div>
                        <div className="projects grid gap-12 lg:grid-cols-2">
                            {experiences.map((experience) => (
                                <ExperienceCard
                                    key={experience.id}
                                    data={experience}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </>
    );
};

export default Experience;
