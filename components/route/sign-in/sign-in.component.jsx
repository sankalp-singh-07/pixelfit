import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../../src/utils/firebase/firebase.utils.js"


const SignIn = () => {

    const signInWithPopup = async() => {
        const { user } = await signInWithGooglePopup(); //> user is the object we need that contains uid and we get from auth 
        const userDocRef = await createUserDocumentFromAuth(user); //> we pass user object to this function to store data in firestore
    }

    return(
        <>
            <h1>Sign In Page</h1>
            <button onClick={signInWithPopup}>
                Sign in using Google
            </button>
        </>
    )
}

export default SignIn;