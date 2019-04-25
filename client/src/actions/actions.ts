import { action } from 'typesafe-actions';
// import models

export enum actionTypes {
  UPDATE_SEARCH = "UPDATE_SEARCH",
  CHOOSE_RADIO = "CHOOSE_RADIO",
  CHICKEN_DATA = "CHICKEN_DATA",
  CHOOSE_FILTER = "CHOOSE_FILTER"
}

export const actions = {
    updateSearchBar: (input: any) => action(actionTypes.UPDATE_SEARCH, {input}),
    chooseRadio: (input: any) => action(actionTypes.CHOOSE_RADIO, {input}),
    chooseFilter: (input: string) => action(actionTypes.CHOOSE_FILTER, {input}),
    
    // TS-ify
    getAllChickenData: () => dispatch => {
    return fetch('/topten')
      .then(res => res.json())
      .then(jsonData =>
        dispatch({
          type: actionTypes.CHICKEN_DATA,
          payload: jsonData,
        })
      )
  }
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