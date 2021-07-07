import React, { Component } from 'react'


class InfoTemplate extends Component {


    componentDidMount() {
        console.log("Component Mounted in Infotemplate.js");
    }
    componentDidUpdate() {
        console.log("Component Updated in Infotemplate.js");
    }
    componentWillUnmount() {
        console.log("Component Will Unmount in Infotemplate.js");
    }
    render() {

        return (

            <>
                <p>My Name Is: {this.props.name}</p>
                <p>My Age Is: {this.props.age}</p>
                <p>My Profession Is: {this.props.profession}</p> 
                <button onClick={this.props.calc}>Click Me</button>
            </>

        );
    }

}

export default InfoTemplate;
