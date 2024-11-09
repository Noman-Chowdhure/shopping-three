import { useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../utils/Utils";

const NavItmes = () => {
    const [open, setOpen] = useState(true);
  return (
    <div>
      <div id="side_nav" className="">
        <button className=" sm:hidden" onClick={() => setOpen(!open)}>ccli</button>
        <div className={open? '':`max-sm:bg-slate-400 `}>
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

export default NavItmes;
