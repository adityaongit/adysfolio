import Screen from "./Screen";

const ProjectCard = ({ data }) => {
    // Convert the object to an array of values
    const dataArray = Object.values(data);

    // Sort the data array based on the 'id' field
    // const sortedData = dataArray.sort((a, b) => a[0] - b[0]);
    console.log(dataArray[0]);
    // console.log(sortedData)

    const { liveUrl, githubUrl } = data;

    const hrefValue = liveUrl ? liveUrl : githubUrl;

    return (
        <>
            <div className="project1 shadow-md rounded-xl p-6 bg-gray-50">
                {/* <img
                    className="rounded-lg border border-gray-300 mx-auto"
                    src={data.thumbnail}
                    alt=""
                /> */}
                <Screen src={data.thumbnail} />
                <p className="font-bold text-lg mt-4">{data.Title}</p>
                <ul className="mt-2">
                    {data.Description.map((description, index) => (
                        <li key={index} className="flex items-start my-2">
                            <svg
                                className="w-3.5 h-3.5 mr-2 mt-[6px] text-green-500 dark:text-green-400 flex-shrink-0"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            {description}
                        </li>
                    ))}
                </ul>

                <div className="pt-4 pb-2">
                    {data.skillTag.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-[550px] text-gray-700 mr-2 mb-2"
                        >
                            # {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-5">
                    <a
                        className="text-gray-500 font-medium"
                        href={hrefValue}
                        target="_blank"
                    >
                        View Project
                    </a>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;
