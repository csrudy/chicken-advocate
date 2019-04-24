import { action } from 'typesafe-actions';
// import models if needed

export enum actionTypes {
  TO_DO = "TO_DO",
  DELETE_TO_DO = "DELETE_TO_DO",
  UPDATE_SEARCH = "UPDATE_SEARCH"
}

export const actions = {
    addToDo: (input: any) => action(actionTypes.TO_DO,  {input}),  
    deleteToDo: (input: any) => action(actionTypes.DELETE_TO_DO,  {input}),
    updateSearchBar: (input: any) => action(actionTypes.UPDATE_SEARCH, {input})
  };









// type Person1 = {
//   name: string
//   age: number
// }

// type Person2 = {
//   name: string
//   isMinor: boolean
// }

// type Person3 = Person1 & Person2

// const p3 : Person3 = {
//   name: "sterling",
//   age: 27,
//   isMinor: true
// }