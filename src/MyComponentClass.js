import React from "react"
class MyComponentClass extends React.Component

{
    counter = 0
    state = {
        count:0
    }
    
    constructor (props)
    {
        super (props)
        console.log(" constructor of MyComponentClass")
    }

    static getDrivedStateFromProps ()
    {
        console.log("getDrivedStateFromProps ")
    }

    shouldComponentUpdate()
    {
        console.log ("shouldComponentUpdate")
        return true
    }
    

    increment = () =>
    {
        // this.state.count = this.state.count + 1
        this.setState({count:this.state.count+1})
        console.log("count:",this.state.count)
    }


    incrementCounter = () =>
    {
        this.counter = 1
    }


    render()
    {   console.log("render")
        // console.log("Class props:",this.props)

        return <div>
                     <h1> Class Component</h1>
                     Hello React from class !!!
                     <br/>
                     Color:    <label style={{ backgroundColor: this.props.color}}>
                                  {this.props.color} 
                             </label>
                     <br/>
                     <button onClick={this.props.onClick}>Click Me</button>
                     ---------------------------------------------
                     <br/>
                    <div>
                         Count:{this.state.count}
                         <button onClick={this.increment}>Increment</button>
                     </div>


                     <div>
                         Counter:{this.counter}
                         <button onClick={this.incrementCounter}>Increment Counter</button>
                       

                      </div>
                </div>
                     
                     
    }

    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log ("getgetSnapshotBeforeUpdate")
        console.log ("prevProps", prevProps)
        console.log (" this.Props",  this.props)

        console.log ("prevState", prevState)
        console.log (" this.State",  this.state)
        return true
    }


    componentDidUpdate ()
    {
        console.log (" componentDidUpdate")
    }

    componentDidMount ()
    {
        console.log ("componentDidMount")
    }

    componentWillUnmount ()
    {
        console.log (" componentWillUnmount")
    }
}
export default MyComponentClass 