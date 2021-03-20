import React from "react";
import {useSelector, shallowEqual} from "react-redux";
import {getAuthInfo, getAuthStatus} from "../../store/selectors";
import {AuthorizationStatus} from "../../const";
import {Link} from "react-router-dom";

function UserBlock() {
  const authStatus = useSelector(getAuthStatus, shallowEqual);
  const authInfo = useSelector(getAuthInfo, shallowEqual);

  return (
    <div className="user-block">

      {authStatus === AuthorizationStatus.AUTH
        ? (
          <div className="user-block__avatar">
            <img src={authInfo.avatarUrl} alt="User avatar" width={63} height={63} />
          </div>
        )
        : <Link className="user-block__link" to="/login">Sign in</Link>}

    </div>
  );
}

export default UserBlock;
