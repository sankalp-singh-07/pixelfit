import { useState } from 'react';

import { signInWithGooglePopup } from '../../src/utils/firebase/firebase.utils.js';

import Button from '../button/button.component.jsx'

import '../sign-in-form/sign-in-form.styles.scss'

import FormInput from '../form-input/form-input.component.jsx'

import { createUserWithEmailAndPasswordInAuth , createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../src/utils/firebase/firebase.utils.js'

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
		const { user } = await signInWithGooglePopup(); 
		await createUserDocumentFromAuth(user); 
	};

	const handleSubmit = async(e) => {
		e.preventDefault();

		try {
			const response = await signInAuthUserWithEmailAndPassword(email, password);
			console.log(response);
			resetForm();
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
		<div className='sign-in-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={ handleSubmit }>

				<FormInput label='Email' type='email' required name='email' value={email} onChange={updateField}/>

				<FormInput label='Password' type='password' required name='password' value={password} onChange={updateField}/>

			<div className='buttons-container'>
				<Button type='submit'>Sign In</Button>
				<Button type='button' onClick={signInWithGooglePopup} buttonType='google'>Sign In With Google</Button>
			</div>

			</form>
		</div>
	);
};

export default SignInForm;