import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import "./navigation.styles.scss";

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={"/"}>
                    <div className="logo"><CrownLogo /></div>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>shop</Link>
                    <Link className="nav-link" to='/sign-in'>sing In</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>

    );
};

export default Navigation;