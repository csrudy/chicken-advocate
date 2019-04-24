import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { actions } from "../actions/actions";
import * as Types from "MyTypes";

// container for all the results

import ChickenCard from '../components/ChickenCard'

interface AppProps {};

const mapStateToProps = (store: Types.ReducerState) => {
  return {}
};

//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actions, dispatch);

const CardDisplay = (props) => {
  const restaurantArray = props.chickenList.map((el, idx) => {
    return <ChickenCard key={el._id} name={el.name} address1={el.address1} address2={el.address2} city={el.city} state={el.state} country={el.country} zip_code={el.zip_code} price={el.price} rating={el.rating}/>
    // photo?
  })
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      props.getAllChickenData();
      setCount(count + 1);
    }
  })

  return (
    <React.Fragment>
      {restaurantArray}
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);