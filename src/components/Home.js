import React from 'react';
import Mix from './Mix'

const Home = props => {
    return (
        <div className = 'flex flex-wrap justify-between mixes ph3 ph4-l'>
            <div className = 'mix mb4'>
                {/* props come from App Component, pass them to Mix component */}
                <Mix name = 'Mix name' {...props}/>
            </div>
        </div>
    )
}

export default Home