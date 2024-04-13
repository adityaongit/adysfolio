import { useEffect, useState } from "react";
import { supabase } from "../createClient";
import ProjectCard from "./ProjectCard";

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data, error } = await supabase
                    .from("projects")
                    .select("*")
                    .order("id", { ascending: true });
                if (error) {
                    setError(error.message);
                } else {
                    setProjects(data);
                }
            } catch (error) {
                setError(error.message);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            <div>
                {error && <div>Error: {error}</div>}
                {projects.length > 0 ? (
                    <div>
                        <div id="projects" className="container mx-auto mt-16">
                            <h1 className="text-3xl font-bold mb-2">
                                Projects
                            </h1>
                            <p className="mb-10">
                                Some of the projects that I've worked on:
                            </p>
                        </div>
                        <div className="projects grid gap-12 lg:grid-cols-2">
                            {projects.map((project) => (
                                <ProjectCard key={project.id} data={project} />
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

export default Project;
