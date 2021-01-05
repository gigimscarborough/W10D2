import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this) 
    }

    tick(){
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.intId = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intId)
    }



    render(){

        return(
            <div>
            <h1>Clock</h1>
                <ul>
                <li><p>{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</p></li>
                <li><p>{this.state.time.toDateString()}</p></li>
                </ul>
            </div>
        )
        
    }
}

export default Clock;