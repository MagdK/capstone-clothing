import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

import { ReactComponent as SiteLogo } from '../../assets/site_logo.svg';

import './navigation.styles.scss';

const Navigation = () => {
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
              <Link className="nav-link" to="/auth">
                Sign in
              </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    );
};

export default Navigation;