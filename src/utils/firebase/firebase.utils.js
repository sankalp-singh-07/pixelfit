import { initializeApp } from 'firebase/app';

import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'; //? createUserWithEmailAndPassword = is a method that takes auth and email and password and creates a user in auth with the email and password

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'; //> doc = to get document, getDoc = to get document data, setDoc = to set document data
//? "getFirestore" in your code is a function used to initialize and access the Firestore database service provided by Firebase. In simple terms, it's like getting ... same what getAuth does for authentication.

//> Collection and writeBatch are used to add multiple documents to firestore database at once

//! Firebase configuration

const firebaseConfig = {
	apiKey: 'AIzaSyBT45W_aMRoJUQb0fiAqHU1tAsnFPUL4QU',
	authDomain: 'crwn-clothing-demo-db.firebaseapp.com',
	projectId: 'crwn-clothing-demo-db',
	storageBucket: 'crwn-clothing-demo-db.appspot.com',
	messagingSenderId: '454597380255',
	appId: '1:454597380255:web:baebe0c7de80891b047aaa',
};

const firebaseApp = initializeApp(firebaseConfig);

//! Authentication

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth(); //? What is auth = auth can be interpret as a tracker of user authentication status for both browser and firebase database. It is used to check if the user is logged in or not and if logged in then it returns the user object with the user id and other details
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//! Database

export const db = getFirestore(); //> connecting to firestore database and when we call this function, we get access to firestore database and we can use "db" to do so

//> logic behind creating this function: get data from auth and store in firestore
export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
	const userRef = doc(db, 'users', userAuth.uid); //? doc(db, 'users', userAuth.uid) = db is the firestore database, users is the collection name and userAuth.uid is the document id .... userRef is the reference to the document in firestore database with the id of userAuth.uid in collection users in the database db
	// console.log(userRef);

	const userSnapshot = await getDoc(userRef);
	// console.log(userSnapshot);
	// console.log(userSnapshot.exists()); // to check if the document exists in firestore database or not and returns true or false

	// if user does not exist in firestore database then add/set it with data from auth
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth; //> displayName and email are the properties of userAuth object

		const createdAt = new Date(); // when the user is created

		try {
			await setDoc(userRef, { displayName, email, createdAt, additionalInfo }); //? setdoc is used to set data in firestore database and it takes two arguments: 1st is the reference to the document in firestore database and 2nd is the data to be stored in the document
		} catch (error) {
			console.log('Error creating user: ', error.message);
		}
	}

	// if user does exist in firestore database then return userRef
	return userRef;
};


export const createUserWithEmailAndPasswordInAuth = async (email, password) => {
	if(!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if(!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
}
//> signInwithemailandpassword is a method that takes auth and email and password and signs in a user in auth with the email and password if the user exists in auth

export const signOutAuthUser = async () => await signOut(auth); // auth keeps track of the user authentication status 


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)  //> onAuthStateChanged is a method that takes auth and a callback function and callback is called whenever the user authentication status(auth) changes 
/**
 * auth is the subject in the stream which we are subscribed to?watching changes in
 * next yaha pe = callback function hai ... which will run when auth states changes 
 * error and completion wala nahi diye hai isme jo ki 3rd and 4th argument hota 
 */


//! Adding products database
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = collection(db, collectionKey); //> collectionRef is the reference to the collection in firestore database with the name collectionKey in the database db ... what is reference = reference is a pointer/address to the collection in firestore database ... collection is a method that takes db and collectionKey and returns the reference to the collection in firestore database with the name collectionKey in the database db

	const batch = writeBatch(db); //> batch in simple words mein ek group of documents hai jo ki ek sath firestore database mein add ho jayenge ... batch is a method that takes db and returns a batch object which is used to add multiple documents to firestore database at once

	objectsToAdd.forEach((obj) => {
		const docRef = doc(collectionRef, obj.title.toLowerCase()); //> docRef is the reference to the document in firestore database with the id of obj.title.lowerCase() in collection 'collection' in the database db ... doc is a method that takes collection and obj.title.lowerCase() and returns the reference to the document in firestore database with the id of obj.title.lowerCase() in collection collection in the database db


		batch.set(docRef, obj); //> batch.set is used to add data to firestore database and it takes two arguments: 1st is the reference to the document in firestore database and 2nd is the data to be stored in the document
	})	

	await batch.commit()
	console.log('done');
}


//! Getting products database : here we get it in the form of map
export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories');
	
	const q = query(collectionRef);  //> query is a method that takes collectionRef and returns a query object which is used to get data from firestore database

	const querySnapshot = await getDocs(q); //> querySnapshot is the snapshot of the data in firestore database with the query q ... getDocs is a method that takes q and returns the snapshot of the data in firestore database with the query q

	// const categoryMap = querySnapshot.docs.map(doc => doc.data())
	return querySnapshot.docs.map(doc => doc.data())
	
	// .reduce((acc, doc) => {
	// 	const { title, items } = doc.data();
	// 	acc[title.toLowerCase()] = items;
	// 	return acc;
	// }, {}) //>querysnapshot.docs is an array of documents in firestore database with the query q and reduce is used to convert that array into an object

	// return categoryMap;
} 
//> commenting the reduce so that we can get the array to store in redux