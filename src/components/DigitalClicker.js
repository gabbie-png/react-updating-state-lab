// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
          timesClicked: 0
        }
      }
      increment = () => {
        const newCount = this.state.timesClicked + 1
        console.log("Look!", newCount)
        this.setState({
          timesClicked: newCount
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.increment}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
