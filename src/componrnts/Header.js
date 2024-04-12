import React from "react";
import useOnlineStatus from "../utils/useonlinestatus";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const onlinestatus = useOnlineStatus();

  // useEffect({

  // },[])

  return (
    <div className="d-flex  justify-content-between gradient-bg ">
      <div>
        <img
          className="w-5 h-5 p-2 rounded-circle "
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div>
        <ul className="list-unstyled d-flex ">
          <li className="p-4 m-3 ">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="p-4 m-3 ">
            <Link className="link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="p-4 m-3 ">
            online Status:{onlinestatus ? "✅" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
