import React, {Component} from 'react'

class MyComponent extends Component{
  state={
    name:'Tahmid',
    profession: 'S/W',
    age: 30
  };
 calc(){
   alert('test');
 }
  render(){
    //const age=10;
    return (
      <div>
        <p>My Name Is: {this.state.name}</p>
        <p>My Profession Is: {this.state.profession}</p>
        <p>My Age Is: {this.state.age}</p>
        <button onClick={this.calc}>Click Me</button>
      </div>
    );
  }

}

export default MyComponent;
export const myTest="test";