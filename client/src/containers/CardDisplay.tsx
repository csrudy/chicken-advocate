import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Types from "MyTypes";
import { actions } from "../actions/actions";

// container for all the results

import ChickenCard from '../components/ChickenCard'

interface AppProps {
  chickenList: any;
  getAllChickenData: any;
};

const mapStateToProps = (store: Types.ReducerState) => {
  return {
    chickenList: store.main.chickenList,
  }
};

//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actions, dispatch);

const CardDisplay: React.FunctionComponent<AppProps> = props => {
  const restaurantArray = props.chickenList.map((el, idx) => {
    return <ChickenCard key={idx} {...el}/>
  })
  console.log(restaurantArray)
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      props.getAllChickenData();
      setCount(count + 1);
    }
  })

  return (
    <div id='card-container'>
      {restaurantArray}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDisplay);