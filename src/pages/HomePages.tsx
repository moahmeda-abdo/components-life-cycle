import React, { Component } from "react";

interface IProps {}
interface IState {
  counter: number;
  products: [];
}

class HomePages extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      counter: 0,
      products: [],
    }
    // fire for the firat time
    console.log("%c constructor", "background-color:green;");
    
  }
  render() {
    // fire for every change in componenta
  
    console.log("%c re-render", "background-color:red;");
    return (
      <div>
        <h1>HomePage</h1>
        <h1>count:{this.state.counter}</h1>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        ></button>
      </div>
    );
  }
}
export default HomePages;

/*

1-constructor
2-render

*/