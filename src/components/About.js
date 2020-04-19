import React from 'react';

const Stat = ({statName, statNumber, statWord}) => {
    return (
        <div className = 'w-third tc pa3 ba bw2 b--light-gray' style = {{marginRight: -2}}>
            <div className = 'f6 biryani ttu'>{statName}</div>
            <div className = 'f5 b bityani-black ttu tracked'>{statNumber} {statWord}</div>
        </div>
    )
}

const About = ({mixes}) => {
    return (
        <div className = 'ph3 ph4-l'>
            <div className = 'measure center lh-copy f4 ph3'>
                <p className = 'mt0'>
                    Marmalade.fm features the latest and greatest in grooves, beats and world music.
                </p>
                <p>
                    Whether you're into hip hop, trip hop, classic jazz, fusion jass, afro beat or break beat...
                    we have you covered!
                </p>
            </div>

            <div className = 'flex pt3'>
                <Stat statName = 'Featuring...' statNumber = {mixes.length} statWord = 'mixes'/>
                <Stat statName = 'Played...' statNumber = {mixes.reduce((acc, cur) => acc + cur.play_count, 0)} statWord = 'times'/>
                <Stat statName = 'With...' statNumber = {mixes.reduce((acc, cur) => acc + cur.audio_length, 0)} statWord = 'seconds'/>
            </div>
        </div>
    )
}

export default About