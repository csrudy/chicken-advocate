import * as React from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actions } from '../actions/actions';
import * as Types from "MyTypes";

// import model, styles, and children
import Header from '../components/Header'
import CardDisplay from './CardDisplay'

interface AppProps {
  name?: string, // makes name optional
};

const mapStateToProps = (store: Types.ReducerState) => {
  return {}
};

//@ts-ignore
const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators(actions, dispatch);

const App: React.FunctionComponent<AppProps> = (props) => {
  return (
    <React.Fragment>
      <Header />
      <CardDisplay />
      <h1>Hello, {props.name}</h1>
    </React.Fragment>
  )
}

App.defaultProps = {
  name: "Guest User", // adopted when name prop is omitted
}

export default connect(mapStateToProps, mapDispatchToProps)(App);