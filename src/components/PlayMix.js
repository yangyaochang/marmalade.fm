import React from 'react';

const PlayMix = props => {
    const {playMix, id, currentMix, playing, children} = {...props}
        return (
            <div className = {`pointer ${id === currentMix && playing && 'playing'}`} onClick = {() => playMix(id)}>
                {children}
            </div>
        )
}

export default PlayMix