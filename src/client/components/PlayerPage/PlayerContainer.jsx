import React, { Component } from 'react';
import PlayerCurrentInfos from './PlayerCurrentInfos.jsx';
import PlayerControl from './PlayerControl.jsx';

class PlayerContainer extends Component {
    render() {
        return (
            <div id="PlayerContainer">
                <PlayerCurrentInfos />
                <PlayerControl />
            </div>
        );
    }
}

export default PlayerContainer;