import { useState, useContext } from 'react';

import { signInWithGooglePopup } from '../../src/utils/firebase/firebase.utils.js';

import Button from '../button/button.component.jsx'

import {SignInContainer, AlreadyHaveAccount, ButtonsContainer} from './sign-in-form.styles.jsx'

import FormInput from '../form-input/form-input.component.jsx'

import { createUserWithEmailAndPasswordInAuth , createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../src/utils/firebase/firebase.utils.js'

// import { UserContext } from '../../src/contexts/user.context.jsx'

const dataFormsFields = {
	email: '',
	password: '',
}


const SignInForm = () => {

	const [userCredentials, setUserCredentials] = useState(dataFormsFields);
	const {email, password} = userCredentials;

	const updateField = (e) => {
		const {name, value} = e.target;
		setUserCredentials({...userCredentials, [name]: value});
	}

	const resetForm = () => {
		setUserCredentials(dataFormsFields);
	}

	const signInWithPopup = async () => {
		await signInWithGooglePopup();
	};

	// const { setCurrentUser } = useContext(UserContext); //>Why context and why not provider : Because we need to access the setCurrentUser function in this component and we can't do that if we wrap this component in a provider. We can only access the currentUser and setCurrentUser properties in the children components of the provider component. So we use context here.
	// console.log(useContext(UserContext));

	const handleSubmit = async(e) => {
		e.preventDefault();

		try {
			const {user} = await signInAuthUserWithEmailAndPassword(email, password);
			resetForm();
			// setCurrentUser(user);
		} catch (error) {
			switch (error.code) {
				case "auth/user-not-found":
					alert("User does not exist");
					break;
				case "auth/wrong-password":
					alert("Wrong password");
					break;
				default:
					console.log("error we encountered: ", error.message);
			}
		}
	}

	return (
		<SignInContainer>
			<AlreadyHaveAccount>Already have an account?</AlreadyHaveAccount>
			<span>Sign in with your email and password</span>
			<form onSubmit={ handleSubmit }>

				<FormInput label='Email' type='email' required name='email' value={email} onChange={updateField}/>

				<FormInput label='Password' type='password' required name='password' value={password} onChange={updateField}/>

			<ButtonsContainer>
				<Button type='submit'>Sign In</Button>
				<Button type='button' onClick={signInWithGooglePopup} buttonType='google'>Sign In With Google</Button>
			</ButtonsContainer>

			</form>
		</SignInContainer>
	);
};

export default SignInForm;