import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Types from "MyTypes";
import { actions } from "../actions/actions";

// this component contains the 5 "order by" buttons

interface FilterProps {
  filterBy: string;
  chooseFilter: any;
};

const mapStateToProps = (store: Types.ReducerState) => {
  return {
    filterBy: store.main.filterBy,
  }
};

// @ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actions, dispatch);

const Filter: React.FunctionComponent<FilterProps> = props => { 
  return (
    <div className="filter">
      <h1>Order by...</h1>
      <button onClick={(e) => {props.chooseFilter("Flavor")}}>Flavor</button>
      <button onClick={(e) => props.chooseFilter("Spice")}>Spice</button>
      <button onClick={(e) => props.chooseFilter("Crunch")}>Crunch</button>
      <button onClick={(e) => props.chooseFilter("Temperature")}>Temperature</button>
      <button onClick={(e) => props.chooseFilter("Size")}>Size</button>
    </div>
  )
}

export default connect<{},{},{}>(null, mapDispatchToProps)(Filter);