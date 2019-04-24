import { action } from 'typesafe-actions';
// import models

export enum actionTypes {
  TO_DO = "TO_DO",
  CHICKEN_DATA = "CHICKEN_DATA"
}

export const actions = {
  //example TS action
  addToDo: (input: any) => action(actionTypes.TO_DO, { input }),

  // TS-ify
  getAllChickenData: () => dispatch => {
    return fetch('/api/restaurants')
      .then(res => res.json())
      .then(jsonData =>
        dispatch({
          type: actionTypes.CHICKEN_DATA,
          payload: jsonData,
        })
      )
  }

  // updateSearch
  // filter

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