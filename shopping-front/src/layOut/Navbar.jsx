import { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../utils/Utils";

const Navbar = () => {
    
  const [open, setOpen] = useState(false);
  return (
    <div id="Navbar" >
      <div className="top_nav absolute flex w-full h-fit py-4 px-10 justify-between items-center  ">
        <div className="logo">my man</div>
        <div className="log">
          <Link>log</Link>
        </div>
      </div>
      <div className="side_nav">
        <button onClick={() => setOpen(!open)}>ccli</button>
        <div className="nav_menu">
          <nav className={open ? `max-sm:hidden` : " w-full"}>
            {nav.map((abc) => (
              <Link
                className=" px-4 font-semibold capitalize "
                key={abc.id}
                to={abc.path}
              >
                {abc.nam}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
