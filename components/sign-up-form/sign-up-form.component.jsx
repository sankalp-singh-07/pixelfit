import { useContext, useState } from 'react';
// import { UserContext } from '../../src/contexts/user.context.jsx'

import Button from '../button/button.component.jsx'

import {SignUpContainer, NoAccHeading} from './sign-up-form.styles.jsx'

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
	// console.log(userCredentials); //> why console log the userCredentials here? because we want to see the changes in the state as we type in the input fields and the original dataFormsFields object is not changing because we are not changing the state of the dataFormsFields object but we are changing the state of the userCredentials object which is a copy of the dataFormsFields object


	//!Only for education purpose
	// const var1 = useContext(UserContext);
	// console.log("hit"); //>hit is logged 2 times because we are using useContext() hook mtlb react re-renders the component but it won't change anything as our return jsx doen't change with the var1 value

	// const { setCurrentUser } = var1;

	const updateField = (e) => {
		const {name, value} = e.target;
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
			// setCurrentUser(user);
			resetForm();
		} catch (error) {
			if(error.code === "auth/email-already-in-use") {
				alert("email already in use");
			}
			else console.log("error we encountered: ", error.message);
		}
	}

	return (
		<SignUpContainer>
			<NoAccHeading>Don't have an account?</NoAccHeading>
			<span>Sign up with your email and password</span>
			<form onSubmit={ handleSubmit }>
				<FormInput label='Display Name' type='text' required name='displayName' value={displayName} onChange={updateField}/>

				<FormInput label='Email' type='email' required name='email' value={email} onChange={updateField}/>

				<FormInput label='Password' type='password' required name='password' value={password} onChange={updateField}/>

				<FormInput label='Confirm Password' type='password' required name='confirmationPassword' value={confirmationPassword} onChange={updateField}/>

				<Button type='submit'>Sign Up</Button>
			</form>
		</SignUpContainer>
	);
};

export default SignUpForm;