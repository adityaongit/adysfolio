import logo from "../assets/pic.jpg";

const Hero = () => {
    return (
        <div>
            <div id="about" className="flex mt-5 sm:mt-10 md:mt-[100px]">
                <div className="text lg:w-4/5">
                    <p className="font-bold text-4xl">
                        Hello! I&apos;m Aditya, a{" "}
                        <span id="xoogler">Xoogler</span> with interest in Cloud
                        and DevOps.
                    </p>
                    <div className="mt-5 sm:pr-10">
                        <div className="text-base">
                            I love building tools that are{" "}
                            <span id="uf">user-friendly,</span>{" "}
                            <span id="simple">simple</span> and{" "}
                            <span id="del">delightful.</span>
                        </div>
                        <div className="h-2"></div>
                        <div className="text-base">
                            I was a Cloud Engineering Intern{" "}
                            <span id="google">@Google</span> where I spent 3
                            months working on{" "}
                            <span id="tech1">Cloud Technologies</span> like
                            Kubernetes, Anthos, VPCs, Terraform (IaC) etc. My
                            competencies also include{" "}
                            <span id="tech2">front-end</span> and
                            <span id="tech3">back-end</span> web development,
                            which I demonstrated during my internship at a
                            startup <span id="wizards">The Wizards</span>.
                        </div>
                        <div className="h-2"></div>
                        <div className="">
                            Through these experiences, I had the opportunity to
                            work with both small and large, specialised and
                            cross-functional teams across different time zones
                            and developed a working style that leans towards{" "}
                            <span id="flex">flexiblity,</span>
                            <span id="clar"> clarity</span> and
                            <span id="colab">collaboration.</span>
                        </div>
                        <div className="h-2"></div>
                        <div>
                            I&apos;m currently looking for a new role as a
                            developer.{" "}
                            <span id="hire">
                                <a href="mailto:careers.ady@gmail.com">
                                    Hire me?
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="buttons mt-10 flex justify-between sm:block">
                        <button className="bg-black text-white py-[10px] px-6 rounded">
                            <a
                                href="https://www.linkedin.com/in/adityaonin"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View LinkedIn
                            </a>
                        </button>
                        <button className="py-[10px] px-6 rounded border-black border ml-3">
                            <a
                                target="_blank"
                                href="https://drive.google.com/file/d/1IjKkYLd5n3VaBRR2jognZnwupP-JdL53/view"
                                rel="noreferrer"
                            >
                                View Resume
                            </a>
                        </button>
                    </div>
                </div>
                <div className="image hidden lg:block lg:px-6">
                    <img
                        className="w-80 shadow-2xl rounded-xl"
                        src={logo}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
