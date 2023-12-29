import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../../src/utils/firebase/firebase.utils.js';

import SignUpForm from '../../sign-up-form/sign-up-form.component.jsx';

const SignIn = () => {
	const signInWithPopup = async () => {
		const { user } = await signInWithGooglePopup(); //> user is the object we need that contains uid and we get from auth and we do destructuring here because we need only user object from the returned object
		const userRef = await createUserDocumentFromAuth(user); //> we pass user object to this function to store data in firestore ... userRef is the reference to the document in firestore database
	};

	return (
		<>
			<h1>Sign In Page</h1>
			<button onClick={signInWithPopup}>Sign in using Google</button>
			<SignUpForm />
		</>
	);
};

export default SignIn;
