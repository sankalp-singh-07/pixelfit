import { useState } from 'react';

import Button from '../button/button.component.jsx'

import '../sign-up-form/sign-up-form.styles.scss'

import FormInput from '../form-input/form-input.component.jsx'

import { createUserWithEmailAndPasswordInAuth , createUserDocumentFromAuth } from '../../src/utils/firebase/firebase.utils'

const dataFormsFields = {
	displayName: '',
	email: '',
	password: '',
	confirmationPassword: ''
}


const SignUpForm = () => {

	const [userCredentials, setUserCredentials] = useState(dataFormsFields);
	const {displayName, email, password, confirmationPassword} = userCredentials;
	console.log(userCredentials); //> why console log the userCredentials here? because we want to see the changes in the state as we type in the input fields and the original dataFormsFields object is not changing because we are not changing the state of the dataFormsFields object but we are changing the state of the userCredentials object which is a copy of the dataFormsFields object

	const updateField = (e) => {
		const {name, value} = e.target;
		console.log(name, value);
		setUserCredentials({...userCredentials, [name]: value});
	}

	const resetForm = () => {
		setUserCredentials(dataFormsFields);
	}

	const handleSubmit = async(e) => {
		e.preventDefault();

		if(password !== confirmationPassword) {
			alert("passwords do not match");
			return;
		}

		try {
			const {user} = await createUserWithEmailAndPasswordInAuth(email, password);

			await createUserDocumentFromAuth(user, {displayName})
			resetForm();
		} catch (error) {
			if(error.code === "auth/email-already-in-use") {
				alert("email already in use");
			}
			else console.log("error we encountered: ", error.message);
		}
			
			// const userRef = await createUserDocumentFromAuth(user);
	}

	return (
		<div className='sign-up-container'>
			<h2>Don't have an account?</h2>
			<span>Sign up with your email and password</span>
			<form onSubmit={ handleSubmit }>
				<FormInput label='Display Name' type='text' required name='displayName' value={displayName} onChange={updateField}/>

				<FormInput label='Email' type='email' required name='email' value={email} onChange={updateField}/>

				<FormInput label='Password' type='password' required name='password' value={password} onChange={updateField}/>

				<FormInput label='Confirm Password' type='password' required name='confirmationPassword' value={confirmationPassword} onChange={updateField}/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUpForm;