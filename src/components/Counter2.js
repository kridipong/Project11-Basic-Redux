import { Component } from "react";
import {connect} from 'react-redux';
import classes from './Counter2.module.css'

class Counter extends Component {
    incrementHandler() {
        this.props.increment();
    }
    decrementHandler() {
        this.props.decrement();
    }



  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>-- {this.props.counter} --</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>increment</button>
          <button onClick={this.decrementHandler.bind(this)}>decrement</button>
        </div>
        <button>Toggle Counter</button>
      </main>
    );
  }
};

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type:'INCREMENT'}),
        decrement: ()=>dispatch({type:'DECREMENT'})
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);