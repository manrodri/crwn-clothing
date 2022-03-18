import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from "../../utils/firebase.util";

import SignUpForm from "../../components/signUp/signUp.component";

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={logGoogleUser}>Sign in with Email</button>

            <SignUpForm/>

        </div>
    );
};

export default SignIn;