import * as React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import * as Types from "MyTypes";
import { actions } from "../actions/actions";

// children
import ChickenCard from '../components/ChickenCard'

// this container displays all the individual chicken cards

interface CardDisplayProps {
  chickenList: any;
  filterBy: string;
  getAllChickenData: any;
};

const mapStateToProps = (store: Types.ReducerState) => {
  return {
    chickenList: store.main.chickenList,
    filterBy: store.main.filterBy,
  }
};

//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actions, dispatch);

const CardDisplay: React.FunctionComponent<CardDisplayProps> = props => {

  // if filterBy is null (ie when the page loads) don't sort chickenList
  // if a button is clicked, sort chickenList by that metric and then filterBy will update store
  const sortedArray = !props.filterBy ? props.chickenList : props.chickenList.sort((a, b) => {
    switch(props.filterBy) {
      case "Flavor":
        return a.avg_flavor - b.avg_flavor;
      case "Spice":
        return a.avg_spice - b.avg_spice;
      case "Crunch":
        return a.avg_crunch - b.avg_crunch;
      case "Temperature":
        return a.avg_temp - b.avg_temp;
      case "Size":
        return a.avg_size - b.avg_size;
    }
  });
  
  const restaurantArray = sortedArray.map((el, idx) => {
    return <ChickenCard key={idx} {...el}/>
  })

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      props.getAllChickenData();
      setCount(count + 1);
    }
    // fetch("/initialize").then(res => res.json()).then(console.log)
  })

  return (
    <div className="card-container">
      {restaurantArray}
    </div>
  )
}

export default connect<{},CardDisplayProps,{}>(mapStateToProps, mapDispatchToProps)(CardDisplay);