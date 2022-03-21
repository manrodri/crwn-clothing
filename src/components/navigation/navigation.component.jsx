import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react/cjs/react.production.min";

import {CartContext} from "../../contexts/cart-context";
import {useContext} from 'react';
import {UserContext} from "../../contexts/userContext";

import { signOutUser} from "../../utils/firebase.util";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const { isCartOpen, setIsCartOpen } = useContext(CartContext)

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
                    <CartIcon/>

                </div>
                { isCartOpen && <CartDropdown/>}

            </div>

            <Outlet/>
        </Fragment>

    );
};

export default Navigation;