import React from 'react';
import Playbutton from './PlayButton'
import PlayMix from './PlayMix'

const Mix = ({name, pictures, ...props}) => {
    return (
        <div 
            className = 'aspect-ratio aspect-ratio--3x4 pointer bg-black cover bg-center'
            style = {{backgroundImage: `url(${pictures.extra_large})`}}
        >
            <PlayMix {...props}>
                <div className="ph3 pv4 aspect-ratio--object mix-overlay">
                    <div className="flex items-center relative z-2">
                        <h1 className="f4 f3-l mv0 white ttu biryani pr2 lh-title">{name}</h1>
                        <Playbutton/>
                    </div>
                </div>
            </PlayMix>
        </div>
    )
}

export default Mix
