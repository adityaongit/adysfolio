const ExperienceCard = ({ data }) => {
    console.log(data);

    const URL = "https://adysfolio.onrender.com/uploads/";

    const imageHash = data.companyLogo?.data?.attributes?.hash;

    const imageExt = data.companyLogo?.data?.attributes?.ext;

    // console.log(companyLogo);

    const { companyName, startDate, endDate, Role, description, skillTag } =
        data;

    function formatDateRange(startDate, endDate) {
        // Parse start and end dates
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

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

    return (
        <div>
            <div className="intern1 shadow-md rounded-xl p-6 bg-gray-50">
                <img
                    className="mx-auto h-[100px]"
                    src={URL + imageHash + imageExt}
                />

                <div className="my-auto mt-5">
                    <p className="font-semiboldld text-lg mt-4">
                        {companyName}
                    </p>
                    <p className="mt-1 text-gray-600">
                        {formatDateRange(startDate, endDate)}
                    </p>
                </div>
                <p className="mt-2 font-medium text-gray-600 text-lg">{Role}</p>

                <ul>
                    {description.map((singleDes, index) => {
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
                                    {singleDes.children[0].text}
                                </li>
                            </div>
                        );
                    })}
                </ul>

                <div className="pt-4 pb-2">
                    {skillTag.map((skill) => {
                        return (
                            <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-[550px] text-gray-700 mr-2 mb-2"
                                key={skill.children[0].text}
                            >
                                {skill.children[0].text}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
