import React, { Component } from 'react';

class PlayerControl extends Component {

    constructor(props){
        super(props);
        this.state = {
            onListen: false,
        }
        this.playOrPause = this.playOrPause.bind(this)
    }

    playOrPause(){
        if (this.state.onListen){
            this.setState({'onListen' : false}) 
        } else {
            this.setState({'onListen' : true}) 
        }
    }


    render() {
        return (
            <div id="PlayerControl">
                <div className="controls">
                    <div className="controlButton">
                        <i className="fas fa-step-backward"></i>
                    </div>
                    <div className="controlButton" onClick={this.playOrPause}>
                        <i className={"fas " + (this.state.onListen ? 'fa-pause' : 'fa-play')}></i>
                    </div>
                    <div className="controlButton">
                        <i className="fas fa-stop"></i>
                    </div>
                    <div className="controlButton">
                        <i className="fas fa-step-forward"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerControl;