import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import AppsGoogle from "../components/AppsGoogle/index";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile/index";
import "./index.css";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const [showApps, setShowApps] = useState(false);

  const onClickApps = () => {
    setShowApps(!showApps);
  };
  return (
    //DOMINIO dev-jhm9mf44
    <nav className="nav home-header">
      <a
        className="nav-link active a-link click-a"
        aria-current="page"
        href="https://mail.google.com/"
      >
        Gmail
      </a>
      <a
        className="nav-link a-link click-a"
        href="https://www.google.com.ec/imghp?hl=es-419&ogbl"
      >
        Imágenes
      </a>
      <a
        onClick={onClickApps}
        className="nav-link a-link google-apps"
        href="/#"
      >
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Tooltip on bottom"
        >
          <BsGrid3X3GapFill />
        </div>
      </a>
      {showApps && <AppsGoogle />}
      {isAuthenticated ? (
        <>
          <Profile />
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="button-acceder"
          >
            Salir
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()} className="button-acceder">
          Acceder
        </button>
      )}
    </nav>
  );
};

export default Navbar;
