import React, {Component} from 'react'

import InfoTemplate from './InfoTemplate';

class MyComponent extends Component{
  state={
    name:'Tahmid',
    profession: 'S/W',
    age: 30,
    show:true
  };
 calc = () => {
   //alert('test');
   this.setState({...this.state, age:this.state.age+1});
 }
 toggler= (show)=>{
  
     this.setState({...this.state,show:show})
 }
 componentDidMount(){
  console.log("Component Mounted in app.js");
 }
 componentDidUpdate(){
  console.log("Component Updated in app.js");
 }
 componentWillUnmount(){
  console.log("Component Will Unmount in app.js");
 }
  render(){
    console.log('Inside Render in app.js')
    return (
      <div>
        <button onClick={()=>this.toggler(true)}>Show</button>
        <button onClick={()=>this.toggler(false)}>Hide</button>
        {
          this.state.show  && <InfoTemplate age={this.state.age} name={this.state.name} profession={this.state.profession} calc={this.calc}/>
        }
      
      </div>
    );
  }

}

export default MyComponent;
export const myTest="test";