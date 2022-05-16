import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);
  const onClickProfile = () => {
    setShowProfile(!showProfile);
  };
  if (isLoading) {
    return <label>Loading...</label>;
  }
  return (
    isAuthenticated && (
      <>
        <div className="profile-auth m-hide">
          <img
            onClick={onClickProfile}
            className="imagen-auth"
            src={user.picture}
            alt={user.name}
          />
        </div>
        <div className="contenedor-info m-hide">
          {showProfile && (
            <>
              <h4>{user.name}</h4>
              <p>{user.email}</p>
            </>
          )}
        </div>
      </>
    )
  );
};

export default Profile;
