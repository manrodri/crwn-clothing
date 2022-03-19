import SignUpForm from "../../components/signUp/signUp.component";
import SignInForm from "../../components/signIn/signIn.component";
import './auth.styles.scss'

const Auth = () => {


    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
};

export default Auth;