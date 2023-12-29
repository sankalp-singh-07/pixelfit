import { useState } from 'react';

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

	return (
		<>
			<h1>Sign up with your email and password</h1>
			<form onSubmit={() => {}}>
				<label>Display Name</label>
				<input type='text' required name='displayName' value={displayName} onChange={updateField}></input>

				<label>Email</label>
				<input type='email' required name='email' value={email} onChange={updateField}></input>

				<label>Password</label>
				<input type='password' required name='password' value={password} onChange={updateField}></input>

				<label>Confirm Password</label>
				<input type='password' required name='confirmationPassword' value={confirmationPassword} onChange={updateField}></input>

				<button type='submit'>Sign Up</button>
			</form>
		</>
	);
};

export default SignUpForm;