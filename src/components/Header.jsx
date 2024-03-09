import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="pt-8 w-full h-14 flex pr-4 justify-between items-center">
                <div className="mx-auto mt-5 sm:m-0 text-lg font-semibold text-gray-700 tracking-widest">
                    <Link to="/"> 😺 ADITYA JINDAL </Link>
                </div>

                <ul className="hidden sm:flex">
                    <li className="mx-[10px] cursor-pointer hidden lg:block">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mx-[10px] cursor-pointer hidden lg:block">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="mx-[10px] cursor-pointer">
                        <Link to="/certifications">Certifications</Link>
                    </li>
                    <li className="mx-[10px] cursor-pointer">
                        <a
                            href="https://leetcode.com/adysleetcode/"
                            target="_blank"
                            className="flex"
                            rel="noreferrer"
                        >
                            <iconify-icon
                                className="mt-1 mr-2"
                                icon="simple-icons:leetcode"
                            ></iconify-icon>
                            <div className="">LeetCode</div>
                        </a>
                    </li>
                    <li className="mx-[10px] cursor-pointer">
                        <a
                            href="https://www.github.com/adityaongit/"
                            target="_blank"
                            className="flex"
                            rel="noreferrer"
                        >
                            <iconify-icon
                                className="mt-1 mr-2"
                                icon="bi:github"
                            ></iconify-icon>
                            <div className="">GitHub</div>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* <!-- Navbar for small screens --> */}
            <div className="sm:hidden mt-5">
                <div className="pt-4 pb-2 flex flex-wrap content-center justify-center">
                    <div className="">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-[550px] text-gray-700 mr-2 mb-2">
                            <Link to="#projects">Projects</Link>
                        </span>
                    </div>

                    <div className="">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-[550px] text-gray-700 mr-2 mb-2">
                            <Link to="./certifications.html">
                                Certifications
                            </Link>
                        </span>
                    </div>

                    <div className="">
                        <span className="inline-block h-[28px] bg-gray-200 rounded-full px-3 py-1 text-sm font-[550px] text-gray-700 mr-2 mb-2">
                            <a
                                href="https://www.github.com/adityaongit/"
                                target="_blank"
                                className="flex"
                                rel="noreferrer"
                            >
                                <iconify-icon
                                    className="mt-[3px]"
                                    icon="bi:github"
                                ></iconify-icon>
                            </a>
                        </span>
                    </div>

                    <div className="">
                        <span className="inline-block h-[28px] bg-gray-200 rounded-full px-3 py-1 text-sm font-[550px] text-gray-700 mr-2 mb-2">
                            <a
                                href="https://leetcode.com/adysleetcode/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <iconify-icon
                                    className="mt-[3px]"
                                    icon="simple-icons:leetcode"
                                ></iconify-icon>{" "}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            {/* <!-- End of Navbar for small screens --> */}
        </>
    );
};

export default Header;
