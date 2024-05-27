const ExperienceCard = ({ data }) => {
    console.log(data);

    console.log(data.thumbnail);

    const {
        company_name,
        start_date,
        end_date,
        role,
        Description,
        skill_tags,
        thumbnail,
    } = data;

    function formatDateRange(start_date, end_date) {
        // Parse start and end dates
        const startDateObj = new Date(start_date);
        const endDateObj = new Date(end_date);

        // Get month and year for start and end dates
        const startMonth = startDateObj.toLocaleString("default", {
            month: "long",
        });
        const startYear = startDateObj.getFullYear();
        const endMonth = endDateObj.toLocaleString("default", {
            month: "long",
        });
        const endYear = endDateObj.getFullYear();

        // Format the date range
        const formattedDateRange = `${startMonth} ${startYear} - ${endMonth} ${endYear}`;

        return formattedDateRange;
    }

    const theWizStyle = (data) => {
        if (data.company_name == "The Wizards") {
            return "w-32";
        }
    };
    return (
        <div>
            <div className="intern1 shadow-md rounded-xl p-6 bg-gray-50">
                <img className={`mx-auto pt-6 ${theWizStyle(data)}`} src={thumbnail} />

                <div className="my-auto mt-5">
                    <p className="font-semiboldld text-lg mt-4">
                        {company_name}
                    </p>
                    <p className="mt-1 text-gray-600">
                        {formatDateRange(start_date, end_date)}
                    </p>
                </div>
                <p className="mt-2 font-medium text-gray-600 text-lg">{role}</p>

                <ul>
                    {Description.map((description, index) => {
                        return (
                            <div key={index} className="">
                                <li className="flex items-start my-2">
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
                            </div>
                        );
                    })}
                </ul>

                <div className="pt-4 pb-2">
                    {skill_tags.map((tag, index) => {
                        return (
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-[550px] text-gray-700 mr-2 mb-2"
                                key={index}
                            >
                                # {tag}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
