import { AnyAction } from 'redux';  //? handle a wide range of actions without knowing their exact structure in advance

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
