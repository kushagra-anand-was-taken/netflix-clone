import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Ticker from "react-ticker";
import { logout } from "../../action/auth";

import "./header.css";
function Header() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state?.auth?.user?.name);
  const [show, setshow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`header ${show && "header__black"}`}>
      <img
        className="header__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
      ></img>
      {name && (
        <Link
          to="/"
          onClick={() => {
            dispatch(logout());
          }}
        >
          {}
          <div className="header_ticker">
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p>{`Welcome ${name}  Click to Log Out`}</p>
                </>
              )}
            </Ticker>
          </div>
        </Link>
      )}

      <Link to="/signup">
        <img
          className="header__avatar"
          src="https://www.freepnglogos.com/uploads/netflix-logo-circle-png-5.png"
        ></img>
      </Link>
    </div>
  );
}

export default Header;
