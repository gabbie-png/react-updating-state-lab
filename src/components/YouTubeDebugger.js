// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

 class YouTubeDebugger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }
    handleClick = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                bitrate: 12
            }
        })
        //debugger
        //console.log("Im Here") 
    }
    
    handleClickRes = () => {
        this.setState({
            settings:{
                ...this.state.settings,
                video:{
                    ...this.state.settings.video,
                    resolution:'720p'
                }
                
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} className="bitrate">Change Bitrate</button>
                <button onClick={this.handleClickRes} className="resolution">Change Resolution</button>
            </div>
        )
    }
}
export default YouTubeDebugger