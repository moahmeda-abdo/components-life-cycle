import React, { Component } from "react";

interface IProps {}
interface IState {
counter:number,
products:[],
}

class HomePages extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      counter: 0,
      products: [],
    };
  }
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <h1>count:{this.state.counter}</h1>
      </div>
    );
  }
}
export default HomePages;
