import React, { Component } from 'react'
interface IProps {}
interface IState {
  products: []
}
export default class ProductPages extends Component<IProps, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      products: []
    }
    console.log("%c constructor", "background-color:green;")
  }

  componentDidMount(): void {
    console.log("%c dedmount", "background-color:blue;")
  
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      // Ensure that data.products is an array before setting it to state
      if (Array.isArray(data.products)) {
        this.setState({ products: data.products });
      } else {
        console.error('Unexpected data format:', data);
      }
    });
}
  render() {
    console.log("%c re-render", "background-color:red;");

    return (
    <>
      <div>products</div>
      {this.state.products.map(({id , title }:{id:number,title:string})=> <h3 key={id}>{title}</h3>) }
    </>
    )
  }
}
