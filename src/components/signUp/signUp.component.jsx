import {useState} from "react";
import {auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase.util";


const defaultFormField = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
}



const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormField);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Passwords do not match")
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName: displayName})
            resetFormFields()

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert("Cannot create user. Email already in use")
                return
            }
            console.log('user creation encounter an error: ', error)
        }
    }


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor={"displayName"}>Display Name</label>
                <input required={true} type={"text"} name="displayName" value={displayName} onChange={handleChange}/>
                <label htmlFor={"email"}>Email</label>
                <input required={true} type={"email"} name={'email'} value={email} onChange={handleChange}/>
                <label htmlFor={"password"}>Password</label>
                <input required={true} type="password" name={'password'} value={password} onChange={handleChange}/>
                <label htmlFor={"confirmPassword"}>Confirm Password</label>
                <input required={true} type="password" name={"confirmPassword"} value={confirmPassword} onChange={handleChange}/>
                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
}

export  default SignUpForm