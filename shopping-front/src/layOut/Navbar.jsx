import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="Navbar">
      <div className="top_nav absolute flex w-full h-fit py-4 px-10 justify-between items-center  ">
        <div className="logo">
          <Link to="/">
            <img
              className=" w-20 h-22"
              src="https://i.pinimg.com/736x/7d/7a/11/7d7a11afa1b49f627c2536e3afd59fbf.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="log">
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
