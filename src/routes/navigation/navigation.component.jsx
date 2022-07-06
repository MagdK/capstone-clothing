import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';

import { ReactComponent as SiteLogo } from '../../assets/site_logo.svg';
import { UserContext } from '../../contexts/user.context';

import {signOutUser} from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log(currentUser);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <SiteLogo />
            </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                Shop
            </Link>
            {currentUser ? (
                <span className="nav-link" onClick={signOutHandler}>
                    Sign out
                </span>
            ) : ( 
                <Link className="nav-link" to="/auth">
                    Sign in
                </Link>
            )}
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;