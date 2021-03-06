import React, {Component} from 'react'
import './App.css'
export default class Counter extends Component{

  state = {
    count: 0
  }

  add = () => {
    const {count} = this.state
    if(count < 10)
    this.setState({
      count: count +1
    })
  }
  remove = () => {
    const {count} = this.state
    if(count > 0){
      this.setState({
        count: count -1
      })
    }
  }

  render(){
    const {count} = this.state
    const {add, remove} = this
    return(
      <div className="container">
        <h1>React Counter App</h1>
        <button onClick={add}> + </button>
        <h2>{count}</h2>
        <button onClick={remove}> - </button>
      </div>
    )
  }
}