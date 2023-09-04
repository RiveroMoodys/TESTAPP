import React, {Component} from "react"
//
class Main extends Component{
  // 
  constructor(props){
    super(props);
    this.state = {
      allCustomers: []
    }
  }
  //
  render(){
    return (
      <main>
        <h2>Customer List</h2>
        {
        this.state.allCustomers.map((customer, i) =>
          (<div key={i}>
            {customer.username}&nbsp;{customer.password}
          </div>)
          )
        }
      </main>
    );
  }
  //
  componentDidMount(){
    fetch("http://localhost:3030/customers")
    .then(data => {
      return data.json();
    })
    .then(resolvedData=>{
      this.setState({
        allCustomers:resolvedData
      });
    });
  }

  //
  
}
//
export default Main
