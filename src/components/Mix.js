import React from 'react';
import Playbutton from './PlayButton'

const Mix = props => {
    const {name, playMix, currentMix} = {...props}
    return (
        <div 
            className = 'aspect-ratio aspect-ratio--3x4 pointer bg-black'>
    
                <div className="ph3 pv4 aspect-ratio--object mix-overlay">
                    <div className="flex items-center relative z-2">
                        <h1 className="f4 f3-l mv0 white ttu biryani pr2 lh-title">{name}</h1>
                        <Playbutton/>
                    </div>
                </div>
        </div>
    )
}

export default Mix
