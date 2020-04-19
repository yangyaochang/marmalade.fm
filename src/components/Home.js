import React from 'react';
import Mix from './Mix'

const Home = ({mixes, ...props}) => {
    return (
        <div className = 'flex flex-wrap justify-between mixes ph3 ph4-l'>

        {mixes.map(mix => (
            <div className = 'mix mb4'>
            {/* props come from App Component, pass them to Mix component */}
            <Mix {...props} {...mix}/>
            </div>
        ))}
        </div>
    )
}

export default Home