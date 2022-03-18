import {useState} from "react";
import {auth, createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase.util";

import FormInput from "../formInput/formInput.component";
import Button from "../button/Button.components";

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
                <FormInput label={"Display Name"} type={"text"} required onChange={handleChange} name={'displayName'} value={displayName}/>
                <FormInput label={"Email"} type={"email"} required onChange={handleChange} name={'email'} value={email}/>
                <FormInput label={"Password"} type={"password"} required onChange={handleChange} name={'password'} value={password}/>
                <FormInput label={"Confirm Password"} type={"password"} required onChange={handleChange} name={'confirmPassword'} value={confirmPassword}/>

                <Button  type={'submit'}>Sign up with email</Button>

            </form>
        </div>
    )
}

export  default SignUpForm