import { AnyAction } from 'redux';  //? handle a wide range of actions without knowing their exact structure in advance


type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>['type'];
	match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends () => AnyAction & {type : string}>(actionCreator : AC): Matchable<AC>

export function withMatcher<AC extends (...args : any[]) => AnyAction & {type : string}>(actionCreator : AC): Matchable<AC>

export function withMatcher(actionCreator : Function){
	const type = actionCreator().type;
	return Object.assign(actionCreator, {
		type,
		match(action: AnyAction){
			return action.type === type;
		}
	})
}

export type ActionWithPayload<T, P> = {
	type: T,
	payload: P,
}; //> this is a generic type that takes two type arguments T and P ... it is used to define action objects with type and payload properties ... T is the type which receives one of the values from the enum of category.types.ts and P is the type of the payload property which can be anything we povide

export type Action<T> = {
	type: T, 
}; //> we create an extra type instead of using "payload?: P" above bcoz it will return undefined if we don't provide a payload ... so there will always be a payload where we don't want it even if it is undefined

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>; //> This signature indicates that if createAction is called with both a type and a payload, it will return an object of type ActionWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void) : Action<T>; //> 2nd signature

export function createAction<T extends string, P>(type:T, payload: P){
	return { type, payload };
} //> Actual implmentation of the function

// export const createAction = (type, payload) => ({ type, payload }); //> this is a function that returns an action object with type and payload properties ... we will use this function to create action objects in our action creators



//! Some extra stuffs

//? Intersection types

type Human = {
	name: string,
}

type Alien = {
	fly: () => void
}

type Hybrid = Human & Alien

const a : Hybrid = {
	name: 'Sankalp',
	fly: () => {}
} //> 'a' must satisfy both type Human and type Alien

//> Note For Union Type (|) => It's like saying 'a' can be of type Human and type Alien


//? ReturnType - specifies what type of value the function will return

type Man = () => string;

type MyFunc = ReturnType<Man> //> MyFunc will return string 