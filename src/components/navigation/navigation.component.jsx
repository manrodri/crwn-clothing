import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react/cjs/react.production.min";
import {useContext} from 'react';

import {UserContext} from "../../contexts/userContext";
import { signOutUser} from "../../utils/firebase.util";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to={"/"}>
                    <div className="logo"><CrownLogo/></div>
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>shop</Link>
                    {
                        currentUser ? <span className={'nav-link'}  onClick={signOutHandler} >Sign Out</span> :
                            <Link className="nav-link" to='/auth'>sing In</Link>
                    }

                </div>
            </div>
            <Outlet/>
        </Fragment>

    );
};

export default Navigation;